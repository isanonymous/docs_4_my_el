## useRemoteData

- 形参

| 参数名         | 说明                                | 类型     |
| -------------- | ----------------------------------- | -------- |
| getPromiseFn   | 返回一个Promise的函数               | Function |
| getPromiseData | 从arg0返回的Promise中获取数据的函数 | Function |
| initData       | 初始数据, =[]                       | any      |

- 返回值

| 属性名  | 说明                                                         | 类型              |
| ------- | ------------------------------------------------------------ | ----------------- |
| data    | 从arg0的返回值中获取到的数据, 初始为ref(initData)            | Ref               |
| loading |                                                              | Ref<<br/>Boolean> |
| doFetch | ①改变loading为true; ②调用arg0; ③在.finally中改变loading为false | Function          |

