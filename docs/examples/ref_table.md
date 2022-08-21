## 从表格中选取数据

步骤:

1. 配置`<RefTable>`(表格`<ETable>`和其搜索栏`<EFilter>)`的字段项 // `field('label', table(), filter() )`
2. 在主页面字段项中定义插槽类型(form_item_slot_prefix)的表单字段, 例子中使用的回显组件是`<ESelect>`
3. 调用useRefTable函数, 传入初始值
4. 传入1.和2. 中涉及组件的props

```jsx
//4.
<confirm-dialog  title="选择卡片" v-model="show" draggable  width="500px" 
    :onOk="onOk" :onCancel="onCancel"
>
  <pre>{{JSON.stringify(selectionIds)}}</pre>
  <RefTable :confs="cardViewDep.confs" // {tableConfs:Object, filterConfs:Object}
      v-model="cardViewDep.selectionIds" // 表格的选中项 (值为数据的唯一标识)
      :model="cardViewDep.filterDep.formData" // 同EFilter组件的同名属性
      :do-reset="cardViewDep.filterDep.reset" // 同EFilter组件的同名属性
      :do-search="cardViewDep.hooks.firstPageList" // 同EFilter组件的同名属性
      :table-data="cardViewDep.tableDep.data" // 同ETable组件的data属性
      :tableProps="cardViewDep.confs.tableProps" // ElTable的属性`{cellClassName?:Function, cellStyle?:Function}`
      v-bind="tableProps" // 表格作为输入组件时的v-model相关配置
      :table-ref="cardViewDep.tableDep.setRef" // 用于获取表格数据和ElTable
      :total="cardViewDep.tableDep.total" // 同ElPagination组件的同名属性
      :pagProps="cardViewDep.pagProps" // ElPagination组件的常用props
  ></RefTable>
</confirm-dialog>
//2.
<EForm :model="formDep.data" :confs="confs.formConfs"
    :rules="confs.formRules" :ref="formDep.setRef">
  <template #[form_item_slot_prefix+confs.formConfs.cardIds.k]="{conf, model}">
    <ESelect v-bind="conf.props" // form()生成的输入组件的props
        v-model="selectionIds" // 表格的当前选中项
        :opts="unref(selectOpts)" 
        :props="id_name_props"
        @click.native="cardIdSelClick" // 点击时, 展示表格选取组件
        multiple popper-class="d-n" // 多选 和 隐藏Select组件的Option
    ></ESelect>
  </template>
</EForm>
//2.
let fields = {
  cardIds: field('卡片列表', form({type:slotType(form_item_slot_prefix), sty_w:'100%'}))   }
//1.
let cardViewDep = useSimpleCrud({
  name: field('卡名', filter({ sty_w:'150px'})),
  star: field('星数',),
}, {api:'/cards', theme:'卡片'})
// 3.  返回值说明参考useRefTable文档
let selectionVal = ref([])
let {onOk, onCancel, show, tableProps, showTable:cardIdSelClick, tableBoxRef
  , setSelectionRows, selectionIds, selectOpts} = useRefTable({modelValue:selectionVal})
// 用于获取表格数据和ElTable
tableBoxRef.value = {tableDep: cardViewDep.tableDep}
```



