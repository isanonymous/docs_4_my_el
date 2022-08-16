import{_ as t,c as d,o as e,a as r}from"./app.f56d6317.js";const _=JSON.parse('{"title":"getBaseCrudFn (\u9ED8\u8BA4\u5BFC\u51FA)","description":"","frontmatter":{},"headers":[{"level":2,"title":"getBaseCrudFn (\u9ED8\u8BA4\u5BFC\u51FA)","slug":"getbasecrudfn-\u9ED8\u8BA4\u5BFC\u51FA"},{"level":2,"title":"createCtx","slug":"createctx"}],"relativePath":"utils/getBaseCrudFn.md"}'),a={name:"utils/getBaseCrudFn.md"},h=r('<h2 id="getbasecrudfn-\u9ED8\u8BA4\u5BFC\u51FA" tabindex="-1">getBaseCrudFn (\u9ED8\u8BA4\u5BFC\u51FA) <a class="header-anchor" href="#getbasecrudfn-\u9ED8\u8BA4\u5BFC\u51FA" aria-hidden="true">#</a></h2><p>\u9759\u6001\u5C5E\u6027:</p><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>http</td><td>http\u8BF7\u6C42\u51FD\u6570</td><td>Function</td></tr></tbody></table><p>\u53C2\u6570:</p><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>baseURL</td><td>\u9875\u9762\u6240\u5BF9\u5E94\u63A5\u53E3\u7684\u524D\u7F00</td><td>string</td></tr><tr><td>http</td><td>\u9ED8\u8BA4\u4E3A: \u9759\u6001\u5C5E\u6027http || &quot;@/utils/req&quot;</td><td>Function</td></tr></tbody></table><p>\u8FD4\u56DE\u503C: // \u7C7B\u578B\u5747\u4E3AFunction</p><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>list</td><td>\u83B7\u53D6\u5217\u8868\u6570\u636E</td><td></td></tr><tr><td>add</td><td>\u6DFB\u52A0\u6570\u636E</td><td></td></tr><tr><td>edit / upd</td><td>\u4FEE\u6539\u6570\u636E</td><td></td></tr><tr><td>del / delById</td><td>\u5220\u9664by\u6570\u636E\u552F\u4E00\u6807\u8BC6</td><td></td></tr></tbody></table><h2 id="createctx" tabindex="-1">createCtx <a class="header-anchor" href="#createctx" aria-hidden="true">#</a></h2><p>\u9759\u6001\u5C5E\u6027:</p><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>isReqSuccess</td><td>\u901A\u8FC7\u54CD\u5E94\u5BF9\u8C61, \u5224\u65AD\u8BF7\u6C42\u64CD\u4F5C\u662F\u5426\u6210\u529F</td><td>(response)=&gt;boolean</td></tr></tbody></table><p>\u53C2\u6570:</p><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>crudDep</td><td>{ pagDep, tableDep, formDep, filterDep, // hooks\u51FD\u6570\u8FD4\u56DE\u503C<br>, baseCrudFn}</td><td>Object</td></tr><tr><td>other</td><td>Object.assign\u7684\u53C2\u6570</td><td>Object.assign<br>\u7684\u5408\u6CD5\u53C2\u6570</td></tr></tbody></table><p>\u8FD4\u56DE\u503C:</p><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>isReqSuccess</td><td>\u5224\u65AD\u7F51\u7EDC\u8BF7\u6C42\u662F\u5426\u6210\u529F<br> // \u9ED8\u8BA4\u503C\u4E3AcreateCtx\u7684\u540C\u540D\u9759\u6001\u5C5E\u6027</td><td>Function</td></tr><tr><td>pag</td><td>\u7B2C\u4E00\u4E2A\u53C2\u6570(crudDep)\u7684pagDep[0]</td><td>Reactive</td></tr><tr><td>pagProps</td><td>\u7B2C\u4E00\u4E2A\u53C2\u6570(crudDep)\u7684pagDep[1]</td><td>Reactive</td></tr><tr><td>\u4E24\u4E2A\u53C2\u6570\u7684Object.assign\u5408\u5E76</td><td><code>{ tableDep, formDep, filterDep, ...other}</code></td><td>\u540C\u5BF9\u5E94\u53C2\u6570</td></tr></tbody></table>',14),s=[h];function c(o,n,p,b,i,l){return e(),d("div",null,s)}var g=t(a,[["render",c]]);export{_ as __pageData,g as default};
