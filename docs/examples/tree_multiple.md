## 使用多选的ETree组件的例子

[细节参考组件篇](/c7tDocs/ETree.html)

```jsx
<ETree :data="treeDep.data"  // 同ElTree的同名属性
    v-model="treeDep.modelValue"  // 树组件选中数据的"id"或其组成的数组
    getCheckedType="hasHalf"  // 配置树组件获取选中数据的策略
    :ref="treeDep.setRef"
    :props="id_name_props"  // 同ElTree的同名属性
></ETree>
```

`<script setup>`

```js
let cardTypeCrudFn = getBaseCrudFn('/card_type')
let toTreeData = r=> arrToTree(r.data, {pId:'parentId'});
                        // 获取数据的函数, 树组件的初始选中数据的"id",  处理获取到的原始数据
let treeDep = useTree(cardTypeCrudFn.list, ['trap', 'monster'], toTreeData)
treeDep.doFetch()
```

