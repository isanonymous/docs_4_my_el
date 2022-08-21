## getBaseCrudFn (默认导出)

静态属性:

| 属性名 | 说明         | 类型     |
| ------ | ------------ | -------- |
| http   | http请求函数 | Function |

参数:

| 参数名  | 说明                                    | 类型     |
| ------- | --------------------------------------- | -------- |
| baseURL | 页面所对应接口的前缀                    | string   |
| http    | 默认为: 静态属性http \|\| "@/utils/req" | Function |

返回值: // 类型均为Function

| 属性名        | 说明               | 类型 |
| ------------- | ------------------ | ---- |
| list          | 获取列表数据       |      |
| add           | 添加数据           |      |
| edit / upd    | 修改数据           |      |
| del / delById | 删除by数据唯一标识 |      |



## createCtx

静态属性:

| 属性名       | 说明                               | 类型                |
| ------------ | ---------------------------------- | ------------------- |
| isReqSuccess | 通过响应对象, 判断请求操作是否成功 | (response)=>boolean |

参数:

| 参数名  | 说明                                                         | 类型                         |
| ------- | ------------------------------------------------------------ | ---------------------------- |
| crudDep | { pagDep, tableDep, formDep, filterDep, // hooks函数返回值<br/>, baseCrudFn} | Object                       |
| other   | Object.assign的参数                                          | Object.assign<br/>的合法参数 |

返回值:

| 属性名                      | 说明                                                         | 类型       |
| --------------------------- | ------------------------------------------------------------ | ---------- |
| isReqSuccess                | 判断网络请求是否成功<br/> // 默认值为createCtx的同名静态属性 | Function   |
| pag                         | 第一个参数(crudDep)的pagDep[0]                               | Reactive   |
| pagProps                    | 第一个参数(crudDep)的pagDep[1]                               | Reactive   |
| 两个参数的Object.assign合并 | `{ tableDep, formDep, filterDep, ...other}`                  | 同对应参数 |

