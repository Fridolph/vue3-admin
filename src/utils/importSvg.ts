import SvgIcon from '@/components/SvgIcon.vue'
// 1. 导入所有的svg图标
// 2. 完成svgIcon的全局注册
const svgRequire = require.context('/public/img/svg', false, /\.svg$/)

// svgRequire是一个fn 可接受一个request参数，用于require的导入
// 该函数提供三个属性，可通过 svgRequire.keys() 获得所有的svg图标
// 遍历图标，把图标作为request 参数传入到 svgRequire导入函数中，完成本地导入
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

export default (app: any) => {
  app.component('svg-icon', SvgIcon)
}
