import{_ as t,c as d,o as e,a as r}from"./app.f56d6317.js";const u=JSON.parse('{"title":"getConfs (\u9ED8\u8BA4\u5BFC\u51FA)","description":"","frontmatter":{},"headers":[{"level":2,"title":"getConfs (\u9ED8\u8BA4\u5BFC\u51FA)","slug":"getconfs-\u9ED8\u8BA4\u5BFC\u51FA"}],"relativePath":"utils/eField.md"}'),o={name:"utils/eField.md"},a=r('<p>baseConfHandler</p><table><thead><tr><th>\u5C5E\u6027(\u51FD\u6570)</th><th>\u4F5C\u7528</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>formConfs</td><td>\u9ED8\u8BA4\u5B9E\u73B0\u4E3A: \u5982\u679C\u5B57\u6BB5\u88AB\u914D\u7F6E\u4E3Afirst_input, \u6DFB\u52A0\u4E00\u4E2Atask\u6765\u628A<code>form.props.ref\u7684\u503C\u8BBE\u4E3AformDep.setFirstInputRef</code><br>, \u89E3\u6790\u4E00\u4E2A\u5B57\u6BB5\u540E\u8C03\u7528\u4E00\u6B21 // form(false)\u65F6\u4E0D\u8C03\u7528</td><td>\u5F53\u524D\u5904\u7406\u7684\u5B57\u6BB5\u7684&quot;k&quot;</td></tr><tr><td>formRules</td><td>\u9ED8\u8BA4\u5B9E\u73B0\u4E3A: \u89E3\u6790rule\u9879\u4E2D\u7684message\u8868\u8FBE\u5F0F<br>, \u8C03\u7528\u65F6\u673A\u540CformConfs</td><td>\u5F53\u524D\u5904\u7406\u7684\u5B57\u6BB5\u7684&quot;k&quot;</td></tr><tr><td>form_init_val</td><td>\u9ED8\u8BA4\u5B9E\u73B0\u4E3A: \u5411<code>getConfs.form_init_val\u4E2D\u6DFB\u52A0\u5C5E\u6027, \u5C5E\u6027\u540Dopts.itemKey(\u4E0D\u4F20\u65F6\u4E3A&quot;id&quot;), \u5C5E\u6027\u503Cundefined</code><br>, \u89E3\u6790\u5B8C\u6240\u6709\u5B57\u6BB5\u540E\u8C03\u7528</td><td></td></tr></tbody></table><h2 id="getconfs-\u9ED8\u8BA4\u5BFC\u51FA" tabindex="-1">getConfs (\u9ED8\u8BA4\u5BFC\u51FA) <a class="header-anchor" href="#getconfs-\u9ED8\u8BA4\u5BFC\u51FA" aria-hidden="true">#</a></h2><p>\u9759\u6001\u5C5E\u6027:</p><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>useConfHandler</td><td>\u5168\u5C40\u6CE8\u518CconfHandlers</td><td>(handlerName, handlerFn)=&gt;void</td></tr></tbody></table><p>\u53C2\u6570:</p><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>fieldsObj</td><td>\u9875\u9762\u7684\u5B57\u6BB5\u914D\u7F6E\u5BF9\u8C61</td><td>Object</td></tr><tr><td>opts</td><td><code>{itemKey: \u6570\u636E\u552F\u4E00\u6807\u8BC6 =&quot;id&quot;, confHandler: \u57FA\u4E8E\u6D0B\u8471\u6A21\u578B\u5B9A\u5236\u7684baseConfHandler}</code></td><td>Object</td></tr></tbody></table><p>\u8FD4\u56DE\u503C: // \u9664\u4E86execTask\u548C addTask, \u5747\u4E3AObject\u7C7B\u578B</p><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>execTasks</td><td>\u5EF6\u8FDF\u5904\u7406\u914D\u7F6E (\u5373getConfs\u8FD4\u56DE\u503C)</td><td>Function</td></tr><tr><td>addTask</td><td>\u5411\u5EF6\u8FDF\u5904\u7406\u914D\u7F6E\u6570\u7EC4\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u51FD\u6570</td><td>Function</td></tr><tr><td>opts</td><td>\u7B2C\u4E8C\u4E2A\u53C2\u6570</td><td></td></tr><tr><td>formConfs</td><td>\u4E00\u4E2AEForm\u7EC4\u4EF6\u7684\u914D\u7F6Econfs, \u503C\u4E2D\u4E00\u5B9A\u4F1A\u6709label\u548Ck</td><td></td></tr><tr><td>form_init_val</td><td>useForm\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570</td><td></td></tr><tr><td>formRules</td><td>\u7528\u4E8EE(l)Form\u7EC4\u4EF6\u7684rules\u5C5E\u6027</td><td></td></tr><tr><td>filterConfs</td><td>\u4E00\u4E2AEFilter\u7EC4\u4EF6\u7684\u914D\u7F6Econfs, \u503C\u4E2D\u4E00\u5B9A\u4F1A\u6709label\u548Ck</td><td></td></tr><tr><td>filter_init_val</td><td>useBaseForm\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570</td><td></td></tr><tr><td>tableConfs</td><td>\u4E00\u4E2AETable\u7EC4\u4EF6\u7684\u914D\u7F6Econfs, \u503C\u4E2D\u4E00\u5B9A\u4F1A\u6709label\u548Ck</td><td></td></tr><tr><td>tableProps</td><td>ElTable\u7EC4\u4EF6\u7684\u5C5E\u6027<code>{cellClassName?:Function, cellStyle?:Function}</code></td><td></td></tr></tbody></table>',9),s=[a];function n(l,f,c,i,h,_){return e(),d("div",null,s)}var m=t(o,[["render",n]]);export{u as __pageData,m as default};
