使用fields配置和其他页面相关配置, 生成简单页面所需的数据 和函数

> 对页面配置的定制性要求较低时使用

函数内部流程:

1. 根据api, getCrudFns生成请求函数s
2. 调用getConfs和4个基础hook函数
3. 调用useOnion生成页面的hooks (使用"@/utils/baseCrudHooks")



## 形参

| 属性                      | 说明                                                         | 类型                       |
| ------------------------- | ------------------------------------------------------------ | -------------------------- |
| fields                    | 页面字段的配置对象, [参考](/examples/base_crud_page.html)  | Object                     |
| opts                     | 页面其他配置, 具体见下表                                        | Array                      |



## 第二个参数opts

| 属性         | 说明                                                         | 类型     |
| ------------ | ------------------------------------------------------------ | -------- |
| api          | 页面涉及的http请求的url前缀部分                              | String   |
| getCrudFns   | 根据"api"来生成请求函数s的工厂函数<br/>, 默认为"@/utils/getBaseCrudFn" | Function |
| theme        | 同[useForm](/hooks/useForm.html)第二个参数的theme            | String   |
| customHook   | 用于扩展baseHook("@/utils/getBaseCrudFn")<br/>, 同useOnion第二个参数的customHook | Object   |
| getConfsOpts | getConfs函数的第二个参数                                     | String   |
| ctx          | 会和useOnion的第一个参数合并 (Object.assign)                 |          |

## 返回值:

> 除了hooks,confs,pagDep, 均为Object类型 (Reactive)

| 属性值    | 说明          | 类型   |
| --------- | ------------- | ------ |
| hooks     | useOnion()    | Object |
| confs     | getConfs()    | Object |
| pagDep    | usePagination() | Array  |
| &nbsp; &nbsp; pag | pagDep[0]     |        |
| &nbsp; &nbsp; pagProps | pagDep[1]     |        |
| tableDep  | useTable()      |        |
| formDep   | useForm()       |        |
| filterDep | useBaseForm()   |        |

