### 导出initGlobalAPI方法
* 劫持Vue的config属性 - _不允许私自修config配置_
* Vue.util上添加四个属性
  * ？warn
  * ？extend
  * ？mergeOptions
  * ？defineReactive
* Vue上添加三个方法
  * set
  * delete
  * nextTick
* ？添加observable API
* 创建options对象
  * 初始化ASSET_TYPES中的'component',
  'directive',
  'filter'三个属性为Object.create(null)
* ？扩展Vue.prototype.components 添加keepAlive组件
* ？initUse
* ？initMixin
* ？initExtend
* ？initAssetRegisters