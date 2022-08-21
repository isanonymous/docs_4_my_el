一些细节 / 语法糖



## 大致步骤:

1. 定义一些常量 : theme, (base_)api
2. 定义字段配置对象 (fields)
3. 调用getConfs方法来处理配置, 返回对象中的execTasks方法用来延迟处理配置 (使用之后才产生的变量)
4. 调用hooks函数, 获取crudDep, 然后传入formDep执行execTasks方法
5. 调用useOnion方法, 获取页面中用到的一些方法 (这些方法依赖crudDep中的属性、方法来完成功能)

`<script setup>`

```js
// 字段配置对象
/** field函数的参数 与getConfs的返回值 (第一个参数(arg0)只能为字符串, 意义为公共的label)
 * 第二个参数(arg1) 为字符串时,意义为公共的k(prop); 为对象时,意义为conf(k赋值为对应的字段名,这里为'name');
 * 剩余参数( 顺序为form > table > filter)
   , 都可以省略, form函数省略时,默认值为`{label:公共label, k:公共k, val:undefined, props:{}}`
              , table函数省略时为`{label:公共label, k:公共k}`
   , filter的对象类型参数(conf)这三个属性['label','type','props']在未定义时, 使用form的
 * form和table函数的参数为false, getConfs的返回值中对应的配置中将忽略该字段
 */
let fields = {         // 表单对话框显示后focus   ,   message使用form中的label
  name: field('卡组名',form({...first_input, rules:ru('请输入${label}', ru.has_visibly_str)})
              , filter({type:'t', props:{style:{width:'130px'}, placeholder:'卡组名'}})),
}
let confs = getConfs(fields)
let hooks  // 提前声明, crudHooks中会用到其中的函数
let crudDep = {
  pagDep: usePagination({doFetch: ()=>hooks.pageList()}),
  tableDep: useTable(crudFns.list, getPromiseData),
  formDep:useForm(confs.form_init_val, {reqFns:{add:crudFns.add, upd:crudFns.edit },theme:'卡片'} ),
  filterDep: useBaseForm(confs.filter_init_val, ()=>hooks.firstPageList())
}
// crudHook函数的静态属性prop配置了 下面解构的crudDep对象中的属性名
let { pagDep, tableDep, formDep, filterDep} =crudDep
let [pag,pagProps] = pagDep ||[]
confs.execTasks({formDep, })  // 延迟处理配置
// 可以通过修改`createCtx.isReqSuccess`的值, 来影响所有createCtx函数的返回值的isReqSuccess
let ctx = createCtx(crudDep)
//                     使用setTotalGetter(yourGetter)来修改获取total的逻辑
hooks = useOnion( ctx, {baseHook, customHook:{
  // (特殊函数)如果next()有返回值,return next(); 否则return {...ctx.pag,...ctx.filterDep.formData}
  getFetchArgs: [ useOnion.curr_base_hook, async (ctx, next)=>{
    let args = {...ctx.pag, ...ctx.filterDep.formData}
    if(args.name) args['name' + '_like'] = args.name
    args.name = undefined
    return args
  },],
  // (arg函数)第一个参数实现了迭代器, 第一个元素为ctx, 第二个元素为传入的参数组成的数组
  arg_toUpdOneRow:[async ([ctx, [row]], next)=>{
    cardRemoteDep.doFetch()
    extraCardRemoteDep.doFetch()
    await next()
  }, useOnion.curr_base_hook]
}
})
```





