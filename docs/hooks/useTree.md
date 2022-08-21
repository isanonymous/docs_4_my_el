## useTree (默认导出)

静态属性:

| 属性名         | 说明                       | 类型            |
| -------------- | -------------------------- | --------------- |
| getPromiseData | 默认实现为: r=>r.data.data | (response)=>any |

- 形参

| 参数名         | 说明                                                         | 类型     |
| -------------- | ------------------------------------------------------------ | -------- |
| getPromiseFn   | 返回一个Promise的函数 [同useRemoteData.arg0](/hooks/useRemoteData.html) | Function |
| initVal        | 初始数据, =[]                                                | Array    |
| getPromiseData | 从arg0返回的Promise中获取数据的函数 [同useRemoteData.arg1](/hooks/useRemoteData.html) | Function |

- 返回值(reactive)

| 属性名                          | 说明                                                         | 类型           |
| ------------------------------- | ------------------------------------------------------------ | -------------- |
| data                            | 从arg0的返回值中获取到的数据, 初始为ref([])<br/> [同useRemoteData返回值.data](/hooks/useRemoteData.html) | Array          |
| loading                         | [同useRemoteData返回值.loading](/hooks/useRemoteData.html)   | Boolean        |
| doFetch                         | ①改变loading为true; ②调用arg0; ③在.finally中改<br/>变loading为false [同useRemoteData返回值.doFetch](/hooks/useRemoteData.html) | Function       |
| ref / setRef                    |                                                              | Ref / Function |
| setCheckedKeys / setCurrentKeys | 分别存在于多/单选 时, 作用同`<ElTree>`的同名方法             | Number         |
| v-model / modelValue            | 树的选中项 (值为数据的唯一标识) // 作用类似于`<ElTree>的default-checked-keys` |                |

