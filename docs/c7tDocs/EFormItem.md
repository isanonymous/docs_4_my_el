主要功能

- 继承EForm的使用表单方式的同时, 实现自定义布局



使用: 

```js
<EForm :confs="..." :model="...">
     // confs[string]符合此类型( {k: string} )时 , .k可省略
  <EFormItem :k="${EForm.props.confs[string].k}" />
</EForm>
```

