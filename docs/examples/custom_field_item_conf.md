## 自定义字段项的配置及解析

步骤:

1. 使用自定义配置
2. 定义解析函数
3. 在调用getConfs时, 传入解析函数

```jsx
// sty_w:'val' 和 getConfs的confHandler配合, 实现自定义配置解析
let fields = {  // Ⅰ
  title: field('包名',filter({ sty_w:'150px' })),  }
// Ⅱ
let parse_sty_w = async ([ctx, [fieldK]], next)=>{
  let conf = ctx.filterConfs[fieldK];
  if(conf.sty_w) {
    addProp( conf, 'props', {})
    addProp( conf.props, 'style', {})
    overrideAttrs(conf.props.style, {width: conf.sty_w})
    // 等同于 filter({ props:{style:{width:'150px'} }})
  }
  await next()   };
// Ⅲ, 对应上面的filter(...)
let confs = getConfs(fields, {
    confHandler:{ filterConfs: [ parse_sty_w, useOnion.curr_base_hook ], }   })
```

# 全局注册confHandlers

```js
let parse_sty_w = ... // 同上方代码
getConfs.useConfHandler('filterConfs', parse_sty_w)
let confs = getConfs(fields)
```







