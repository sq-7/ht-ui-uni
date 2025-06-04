import fs from 'fs'
import path from 'path'

// 用正则一段一段地匹配组件的scss变量字符串
const extractSCSSVariables = (scssFilePath: string): Record<string, string> => {
  const scssContent = fs.readFileSync(scssFilePath, 'utf8')
  const componentVarIndex = scssContent.indexOf('/* component var */')

  if (componentVarIndex === -1) {
    console.log('Error: Missing /* component var */ comment in SCSS file')
    return {}
  }

  const scssContentToProcess = scssContent.substring(componentVarIndex + '/* component var */'.length)

  const variableRegex = /\/\*\s*([a-zA-Z0-9-]+)\s*\*\/([\s\S]*?)(?=\/\*\s*([a-zA-Z0-9-]+)\s*\*\/|$)/g
  // \/\*\s*([a-zA-Z0-9-]+)\s*\*\/ 匹配的是/*任意数量空白字符，一个或多个的大小写字母数字和连字符，*/
  //([\s\S]*?) ()：捕获组，[\s\S]：匹配任意字符，*?：非贪婪匹配（尽可能少匹配字符，直到遇到后续条件）
  // (?=...)：正向先行断言（匹配位置，不消耗字符）要求当前位置之后必须满足 ... 的条件，但不包含在结果中。
  // 然后又一个匹配第一行的正则，
  // |$，或运算符和字符串结尾，作用是断言后要么是下一个注释快，要么是字符串结束

  const variables: Record<string, string> = {}

  // 匹配到 /* action-sheet */ 加上该组件的变量的字符串，actionsheet作为key，变量字符串作为value，放入结果对象
  let match
  while ((match = variableRegex.exec(scssContentToProcess)) !== null) {
    const keyComment = match[1].replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())
    const value = match[2].trim()

    variables[keyComment] = value
  }
  return variables
}

/**
 * 生成 config-provider 组件和各组件的样式变量的类型声明
 * @param {object} variables - 变量对象
 * @returns {string} - TypeScript 文件内容
 */
const generateTSFileContent = (variables: Record<string, string>) => {
  let tsContent = `import type { ExtractPropTypes, PropType } from 'vue'
import { makeStringProp, baseProps } from '../common/props'

export type ConfigProviderTheme = 'light' | 'dark'

export const configProviderProps = {
  ...baseProps,
  /**
   * 主题风格，设置为 dark 来开启深色模式，全局生效
   */
  theme: makeStringProp<ConfigProviderTheme>('light'),
  /**
   * 自定义主题变量
   */
  themeVars: {
    type: Object as PropType<ConfigProviderThemeVars>,
    default: () => ({})
  }
}

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>

export type baseThemeVars = {
  colorTheme?: string // 主题色
  colorWhite?: string // 用于mix的白色
  colorBlack?: string // 用于mix的黑色
  colorSuccess?: string // 成功色
  colorWarning?: string // 警告色
  colorDanger?: string // 危险出错色
  colorPurple?: string // 紫色
  colorYellow?: string // 黄色
  colorBlue?: string // 蓝色
  colorInfo?: string // 信息色
  colorGray1?: string // 灰色1
  colorGray2?: string // 灰色2
  colorGray3?: string // 灰色3
  colorGray4?: string // 灰色4
  colorGray5?: string // 灰色5
  colorGray6?: string // 灰色6
  colorGray7?: string // 灰色7
  colorGray8?: string // 灰色8
  fontGray1?: string // 字体灰色1
  fontGray2?: string // 字体灰色2
  fontGray3?: string // 字体灰色3
  fontGray4?: string // 字体灰色4
  fontWhite1?: string // 字体白色1
  fontWhite2?: string // 字体白色2
  fontWhite3?: string // 字体白色3
  fontWhite4?: string // 字体白色4
  colorTitle?: string // 模块标题/重要正文
  colorContent?: string // 普通正文
  colorSecondary?: string // 次要信息，注释/补充/正文
  colorAid?: string // 辅助文字字号，弱化信息，引导性/不可点文字
  colorTip?: string // 失效、默认提示文字
  colorBorder?: string // 控件边框线
  colorBorderLight?: string // 分割线颜色
  colorBg?: string // 背景色、禁用填充色
  darkBackground?: string // 深色背景1
  darkBackground2?: string // 深色背景2
  darkBackground3?: string // 深色背景3
  darkBackground4?: string // 深色背景4
  darkBackground5?: string // 深色背景5
  darkBackground6?: string // 深色背景6
  darkBackground7?: string // 深色背景7
  darkColor?: string // 深色字体1
  darkColor2?: string // 深色字体2
  darkColor3?: string // 深色字体3
  darkColorGray?: string // 深色灰色
  darkBorderColor?: string // 深色边框颜色
  colorIcon?: string // icon颜色
  colorIconActive?: string // icon颜色hover
  colorIconDisabled?: string // icon颜色disabled
  fsBig?: string // 大型标题字号
  fsImportant?: string // 重要数据字号
  fsTitle?: string // 标题字号/重要正文字号
  fsContent?: string // 普通正文字号
  fsSecondary?: string // 次要信息字号
  fsAid?: string // 辅助文字字号
  fwMedium?: string // 字重500
  fwSemibold?: string // 字重600
  sizeSidePadding?: string // 屏幕两边留白padding
}

`

  for (const key in variables) {
    tsContent += `export type ${key}ThemeVars = {\n`
    // 组件有多行变量
    if (variables[key].includes('\n')) {
      const lines = variables[key].split('\n')

      // 把每行css变量拿出来，然后设置ts类型
      lines.forEach((line) => {
        line = line.trim()
        if (line.split(':').length === 2) {
          const parts = line.split(':')
          const propertyName = parts[0].replace(/^\$-/, '').replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())
          tsContent += `  ${propertyName}?: string\n`
        }
      })
    } else {
      // 单行
      const line = variables[key]
      if (line.split(':').length === 2) {
        const parts = line.split(':')
        const propertyName = parts[0].replace(/^\$-/, '').replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())
        tsContent += `  ${propertyName}?: string\n`
      }
    }

    tsContent += '}\n\n'
  }

  // 最后拼接完整的 config-provider 的主题变量类型声明

  const exportTypes = Object.keys(variables)
    .map((key) => `${key}ThemeVars`)
    .join(' & ')
  tsContent += `export type ConfigProviderThemeVars = baseThemeVars &\n  ${exportTypes.split('&').join('&\n ')}\n`

  return tsContent
}

const tsFilePath = path.resolve(__dirname, '../src/uni_modules/ht-ui-uni/components/ht-config-provider/types.ts')
// 包含每个组件的css变量
const scssFilePath = path.resolve(__dirname, '../src/uni_modules/ht-ui-uni/components/common/abstracts/variable.scss')

const variables = extractSCSSVariables(scssFilePath)
const tsContent = generateTSFileContent(variables)

// 生成 config-provider 的 主题变量类型声明
fs.writeFileSync(tsFilePath, tsContent)

console.log('TS file generated successfully!')
