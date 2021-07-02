import{o as e,c as t,k as n,p as i,d as o,C as a,x as l,y as s,r,t as c,n as d}from"./vendor.910582b6.js";const u=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak preview print save searchreplace tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],m=["searchreplace fontsizeselect bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link charmap preview anchor pagebreak insertdatetime table emoticons forecolor backcolor fullscreen"];let p=[];const h=(e,t)=>{const n=document.getElementById(e),i=t||function(){};if(!n){const t=document.createElement("script");t.src=e,t.id=e,document.body.appendChild(t),p.push(i);("onload"in t?function(t){t.onload=function(){this.onerror=this.onload=null;for(const e of p)e(null,t);p=null},t.onerror=function(){this.onerror=this.onload=null,i(new Error("Failed to load "+e),t)}}:function(e){e.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;for(const t of p)t(null,e);p=null}}})(t)}n&&i&&(window.tinymce?i(null,n):p.push(i))};const g={name:"Tinymce",props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},modelValue:{type:String,default:""},toolbar:{type:Array,required:!1,default:()=>[]},menubar:{type:String,default:"edit view format table"},height:{type:[Number,String],required:!1,default:400},width:{type:[Number,String],required:!1,default:"auto"}},data:()=>({hasInit:!1,tinymceId:null,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}),computed:{containerWidth(){const e=this.width;return/^[\d]+(\.[\d]+)?$/.test(e)?`${e}px`:e}},watch:{modelValue(e){this.hasInit&&this.getContent()!==e&&this.$nextTick((()=>window.tinymce.get(this.tinymceId).setContent(e||"")))}},created(){this.tinymceId=this.id},mounted(){this.init()},activated(){window.tinymce&&this.initTinymce()},deactivated(){this.destroyTinymce()},destroyed(){this.destroyTinymce()},methods:{init(){h("https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",(e=>{e?console.log(e.message):this.initTinymce()}))},initTinymce(){const e=this;window.tinymce.init({selector:`#${this.tinymceId}`,language:this.languageTypeList.zh,height:this.height,body_class:"panel-body ",object_resizing:!0,toolbar:this.toolbar.length>0?this.toolbar:m,menubar:this.menubar,plugins:u,end_container_on_empty_block:!0,powerpaste_word_import:"propmt",powerpaste_html_import:"propmt",powerpaste_allow_local_images:!0,paste_data_images:!0,code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,fontsize_formats:"11pt 12pt 12pt 14pt 18pt 24pt 36pt 72pt",nonbreaking_force_tab:!0,init_instance_callback:t=>{e.modelValue&&t.setContent(e.modelValue),e.hasInit=!0,t.on("NodeChange Change KeyUp SetContent",(()=>{this.$emit("update:modelValue",t.getContent())}))},paste_preprocess:(e,t)=>{let n=[];t.content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,((e,t)=>{0===t.indexOf("//")?n.push("http:"+t):n.push(t)})),n.length>0&&this.uploadRemoteFile(n,0)},images_upload_handler:function(e,t,n){let i=e.blob();i.name||(i=new window.File([i],"image.png"));let o=new FormData;o.append("file",i),uploadImage(o).then((e=>{t({}.VUE_APP_Image+"/"+e.data)}))},setup(t){t.on("FullscreenStateChanged",(t=>{e.fullscreen=t.state}))},convert_urls:!1})},destroyTinymce(){const e=window.tinymce.get(this.tinymceId);this.fullscreen&&e.execCommand("mceFullScreen"),e&&e.destroy()},setContent(e){window.tinymce.get(this.tinymceId).setContent(e)},getContent(){return window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK(e){window.tinymce.get(this.tinymceId).insertContent(`<img src="${{}.VUE_APP_Image}/${e}" >`)},uploadRemoteFile(e,t){}}},y=i()(((i,o,a,l,s,r)=>(e(),t("div",{class:[{fullscreen:s.fullscreen},"tinymce-container"],style:{width:r.containerWidth}},[n("textarea",{id:s.tinymceId,class:"tinymce-textarea"},null,8,["id"])],6))));g.render=y,g.__scopeId="data-v-c161e2b8";var _=o({components:{tinymce:g},setup(){let e=a("");return{word:e,setData:function(){e.value="我是一个初始值"}}}});const f=i();l("data-v-2655fd2b");const b={class:"layout-container"},w={class:"layout-container-table"},v={style:{"text-align":"left"}},k=d(" v-model结果 "),C=d("初始赋值");s();const I=f(((i,o,a,l,s,d)=>{const u=r("tinymce"),m=r("el-button"),p=r("el-card");return e(),t("div",b,[n("div",w,[n(u,{modelValue:i.word,"onUpdate:modelValue":o[1]||(o[1]=e=>i.word=e)},null,8,["modelValue"]),n(p,{class:"box-card"},{header:f((()=>[n("p",v,[k,n(m,{style:{float:"right",padding:"3px 0"},type:"text",onClick:i.setData},{default:f((()=>[C])),_:1},8,["onClick"])])])),default:f((()=>[n("div",null,c(i.word),1)])),_:1})])])}));_.render=I,_.__scopeId="data-v-2655fd2b";export default _;