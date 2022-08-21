## useTable (默认导出)

静态属性:

| 属性名         | 说明                       | 类型            |
| -------------- | -------------------------- | --------------- |
| getPromiseData | 默认实现为: r=>r.data.data | (response)=>any |

- 形参

| 参数名         | 说明                                                         | 类型     |
| -------------- | ------------------------------------------------------------ | -------- |
| getPromiseFn   | 返回一个Promise的函数 [同useRemoteData.arg0](/hooks/useRemoteData.html) | Function |
| getPromiseData | 从arg0返回的Promise中获取数据的函数 [同useRemoteData.arg1](/hooks/useRemoteData.html) | Function |

- 返回值(reactive)

| 属性名                 | 说明                                                         | 类型           |
| ---------------------- | ------------------------------------------------------------ | -------------- |
| data                   | 从arg0的返回值中获取到的数据, 初始为ref([])<br/> [同useRemoteData返回值.data](/hooks/useRemoteData.html) | Array          |
| loading                | [同useRemoteData返回值.loading](/hooks/useRemoteData.html)   | Boolean        |
| doFetch                | ①改变loading为true; ②调用arg0; ③在.finally中改<br/>变loading为false [同useRemoteData返回值.doFetch](/hooks/useRemoteData.html) | Function       |
| ref / setRef           |                                                              | Ref / Function |
| total                  | 用于分页组件, 初始为0                                        | Number         |
| showColCo<br/>ntroller | 用于表格的列控制器的显/隐                                    | Boolean        |

