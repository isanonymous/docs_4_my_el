## forEach

使用Object.keys来遍历js对象

| 参数名   | 说明                                                         | 类型     |
| -------- | ------------------------------------------------------------ | -------- |
| obj      | 要被遍历的对象                                               | Object   |
| callback | 遍历时的回调函数, 三个参数为 value(`obj[k]`), k, index // 类似vue的v-for | Function |



## jsonClone

```js
return JSON.parse(JSON.stringify(arg))
```



## overrideAttrs

使用Object.keys来遍历js对象

| 参数名   | 说明                                                         | 类型   |
| -------- | ------------------------------------------------------------ | ------ |
| obj      | 要被覆盖属性的对象                                           | Object |
| handlers | 遍历此参数的keys, 如果`handlers[key]`类型为函数, 第一个参数`obj[key] = handlers[key]( obj[key] )`;否则`obj[key] = handlers[key]` | Object |

