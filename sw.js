if(!self.define){let e,s={};const i=(i,d)=>(i=new URL(i+".js",d).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(d,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>i(e,a),t={module:{uri:a},exports:c,require:o};s[a]=Promise.all(d.map((e=>t[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"_snowpack/env.js",revision:"271340c8a4138e1e23f57808561235d0"},{url:"_snowpack/pkg/break-styled-lines.js",revision:"bc58bf41b99fd881779ed0abb51a97c8"},{url:"_snowpack/pkg/bresenham-zingl.js",revision:"3b238aa3b8aad6d0cc1758ffcf0f6fdb"},{url:"_snowpack/pkg/browser-fs-access.js",revision:"0285b454fd7d7d0898d2253a5f5711a3"},{url:"_snowpack/pkg/hotkeys-js.js",revision:"5fe92b60d007851b2324bfe0d50e3112"},{url:"_snowpack/pkg/import-map.json",revision:"27b73a42b6c89cd9f6a05d365d23418c"},{url:"_snowpack/pkg/lit.js",revision:"7253c2fccae11340a3e2654fc8c12c4d"},{url:"_snowpack/pkg/lit/decorators.js",revision:"bbe49cb21911983801c8866bf1e59afb"},{url:"_snowpack/pkg/q-floodfill.js",revision:"8143bd3307d3d4e0b917c2eed0414e88"},{url:"3rdpartylicenses.txt",revision:"4f583e5d9e005b77673f338a115277d3"},{url:"assets/apple-touch-icon.png",revision:"43e60f8723acd485c7a23f04ebeb9754"},{url:"assets/icon.png",revision:"6401a7111b0b39f29448b74969487757"},{url:"dist/data/colors.js",revision:"a0c6abf05158b3200978bec05b05b814"},{url:"dist/data/drawing-context.js",revision:"199253c5d8d9faf3b1bd74958ede0850"},{url:"dist/data/font-sizes.js",revision:"eaa11da04a0c6ebfa0ac00fe5cd62992"},{url:"dist/data/fonts.js",revision:"1789d1a5796fff02649c6a089d96b232"},{url:"dist/elements/app.js",revision:"8a755317b06a496eee53b907153de46a"},{url:"dist/elements/button.js",revision:"db92036a5fbbfb3ef9cf75d4cd3d827c"},{url:"dist/elements/canvas.js",revision:"f32587a97ee8bdb5de54078531bc4260"},{url:"dist/elements/color-box.js",revision:"9f6021915bc03e4c9308e9f7f1801d20"},{url:"dist/elements/color-picker.js",revision:"777ff66704babb68f21f61c8c2776ee9"},{url:"dist/elements/color-switcher.js",revision:"b6fcfee525ac300bd16dc02433c33fe7"},{url:"dist/elements/dialogs/about.js",revision:"bab227f4b37f216581ea3287aac6f8ae"},{url:"dist/elements/dialogs/attributes.js",revision:"5cb3d71da8a9092203fc644592de3216"},{url:"dist/elements/dialogs/custom-zoom.js",revision:"59dcf27ce3ba53ffbf1bbee16764a2f6"},{url:"dist/elements/dialogs/flip-and-rotate.js",revision:"e183410187264d3dd5e5506da8bd2650"},{url:"dist/elements/dialogs/message-box.js",revision:"5e98fa8d8c7667462a76e4217e0e4fc0"},{url:"dist/elements/dialogs/text-toolbar.js",revision:"70cb4387f070d860640b35f0dae6843e"},{url:"dist/elements/handle.js",revision:"337df84cd74e440d38de45f4ccf42330"},{url:"dist/elements/index.js",revision:"a782027528a0e8f27ebdb3de44185293"},{url:"dist/elements/inset-container.js",revision:"a018a3f676aab5da69971fb43301ad61"},{url:"dist/elements/menu-bar.js",revision:"af9bef4fe1055a791b0e28f73b8a7602"},{url:"dist/elements/menu.js",revision:"8eb939083615d9aff78daad794863450"},{url:"dist/elements/ruler.js",revision:"713acc443f0742238c0eee20eb05cf51"},{url:"dist/elements/select-box.js",revision:"468ee0e9a8eb08ad1541d39bbaa671c6"},{url:"dist/elements/status-bar.js",revision:"458b5b0650bc9071bfc5de147cf52570"},{url:"dist/elements/text-area.js",revision:"bdc158437461753e15ba73a8c8c2e657"},{url:"dist/elements/tool-airbrush.js",revision:"33a9c5dde33726b99bb8b87c1e7d771b"},{url:"dist/elements/tool-bar.js",revision:"2d235b25b20d2c5a8a3e7357b33c5e77"},{url:"dist/elements/tool-box.js",revision:"59d683bc776dc4ba8653e041dcd4d50f"},{url:"dist/elements/tool-brush.js",revision:"d54512bf5af925627c3519ad41cae1c7"},{url:"dist/elements/tool-color-preview.js",revision:"03a4d9e4108208891d7fed9bcc6a0a24"},{url:"dist/elements/tool-draw-opaque.js",revision:"84eb3be0921cd7bf318b66d39bba6ef3"},{url:"dist/elements/tool-eraser-size.js",revision:"593111c28f3597fcf67aa321c5f19574"},{url:"dist/elements/tool-fill-style.js",revision:"8b007792c724eefc0c18fbb6ba9e7455"},{url:"dist/elements/tool-line-width.js",revision:"cdcb55b23af4542ac303936fb9f385e7"},{url:"dist/elements/tool.js",revision:"d598f1786d4c0a75a44eb8ced9d010ae"},{url:"dist/elements/window/title-bar-button.js",revision:"9c1b4e76955224552d0ca72bc72f9ea6"},{url:"dist/elements/window/window.js",revision:"b268270a7bdeacd9cddbd59f7023358e"},{url:"dist/helpers/bind-to-document-title.js",revision:"a04838ef372f44386b852321830a50cf"},{url:"dist/helpers/clear-canvas.js",revision:"15d34f05f989818cf20bab8a25f16175"},{url:"dist/helpers/clear-context.js",revision:"2fd2a98dbab9006868075cda52dee603"},{url:"dist/helpers/deselect-text-tool-when-zoomed-in.js",revision:"91f1a2021345e1582b83655b8143c069"},{url:"dist/helpers/dialog.js",revision:"ce48b5f0dd8bedb5396e54e404c8a0ce"},{url:"dist/helpers/dispatch-area-event.js",revision:"ac3ff42b680ef5312ec88c664c1f5d14"},{url:"dist/helpers/draw-area-rectangle.js",revision:"85590675350e59a7a0566b9437ace65c"},{url:"dist/helpers/draw-circle.js",revision:"b89538e344c0888d69e1a401ab76e623"},{url:"dist/helpers/evaluate-text-toolbar-visibility.js",revision:"f00c3526fa33016f4e4c7233abb8097e"},{url:"dist/helpers/file-handling-api.js",revision:"697be88b94e4184ad81380fa91ac390a"},{url:"dist/helpers/fill-ellipse.js",revision:"c49f88af3702eaabbe90183945d9a0da"},{url:"dist/helpers/font-cache.js",revision:"b1ccb7b47f9a35e8adf277a09535ce59"},{url:"dist/helpers/get-blob-from-selection.js",revision:"d2063f093d02d79e0280958a6754e59c"},{url:"dist/helpers/get-image-from-blob.js",revision:"c920a633074af94cdf0c1fb8fc0fd95f"},{url:"dist/helpers/handle-unsaved-changes.js",revision:"94326104516047801ec04097feb14bec"},{url:"dist/helpers/history.js",revision:"8403522108aae14d4199c5e4e5b221de"},{url:"dist/helpers/load-file-and-adjust-canvas.js",revision:"8e549e109470e1289ca902c548941098"},{url:"dist/helpers/message-box.js",revision:"3646d7d031747ccee1214a64642bc690"},{url:"dist/helpers/normalize-hotkey.js",revision:"6b1c5f9203ee994361d7078ef5d13dc5"},{url:"dist/helpers/register-drag-drop.js",revision:"3abc246c5b7cd1276dbd835ce1c496da"},{url:"dist/helpers/register-sw.js",revision:"a8421a03e923d1bee8137909b15c3881"},{url:"dist/helpers/render-mnemonic.js",revision:"5689f18958fcc8242b5295789ce66c38"},{url:"dist/helpers/to-blob.js",revision:"2c27ebb73c5a365562d20624b4257884"},{url:"dist/helpers/update-context.js",revision:"2bb7f0112641b15c6a95dec2636425b1"},{url:"dist/helpers/update-document-context.js",revision:"f8df3c40ce2bd12d681fd3f7f3416ab9"},{url:"dist/index.js",revision:"b48444c167b51fc7ed38c2c4167d537f"},{url:"dist/menus/all.js",revision:"5a96b937ff1e91c040c6af665f887476"},{url:"dist/menus/edit/clear-selection.js",revision:"e39cbc0a88bb57c75cadac2e9bba2ea5"},{url:"dist/menus/edit/copy-to.js",revision:"a828af884e8ee8aa503b5aa5e5e3c3d6"},{url:"dist/menus/edit/copy.js",revision:"d04573e1c89d7f88194aac174e309714"},{url:"dist/menus/edit/cut.js",revision:"9307845112648e3ccbc08028720b79f4"},{url:"dist/menus/edit/index.js",revision:"28f420a063ea24674e4658cce83919ab"},{url:"dist/menus/edit/paste-from.js",revision:"a474561a7a0ba8f0fe88a0f5b634ad01"},{url:"dist/menus/edit/paste.js",revision:"7dfaf4320e19d0b71357be804aa1a7d4"},{url:"dist/menus/edit/redo.js",revision:"6305d1b923c7f4a5113f2c3b451a5b80"},{url:"dist/menus/edit/select-all.js",revision:"e8ef50571dac026e094ade3fc422cbd9"},{url:"dist/menus/edit/undo.js",revision:"768d9d0f2bca792ccdda73a380c1a7c9"},{url:"dist/menus/file/exit.js",revision:"b26aeea40b6a2052c326137935ec2847"},{url:"dist/menus/file/index.js",revision:"bcebe7d97d1b746e5bf4910e646d1711"},{url:"dist/menus/file/new.js",revision:"c456e101cec3ed622f0c5b246ecd68c7"},{url:"dist/menus/file/open.js",revision:"f38e8e39ace9c6ffb4a2798d50dc2ffe"},{url:"dist/menus/file/print.js",revision:"8c51284fcf626ba3465923b289c5c753"},{url:"dist/menus/file/save-as.js",revision:"2c72cbbaf6e88da59762cebae8683b93"},{url:"dist/menus/file/save.js",revision:"24d1e682a8a567bb2577260c2e5d0ba9"},{url:"dist/menus/file/send.js",revision:"16ddf555c20714aa1ae56d69782ca841"},{url:"dist/menus/help/about.js",revision:"984016fb614cd991b9e44f13fe74dbc7"},{url:"dist/menus/help/index.js",revision:"f8a8073425278016891aafa3b1f68ecb"},{url:"dist/menus/image/attributes.js",revision:"e88e7c691933a7a52d6cd692adbfb04e"},{url:"dist/menus/image/clear-image.js",revision:"ac2c1b959cecdbedd7132ae60a2f4bfa"},{url:"dist/menus/image/flip-rotate.js",revision:"40be0f24c3d296c6cc6fc1cc01370eb8"},{url:"dist/menus/image/index.js",revision:"1343b9b6c071f8c5f6d60538c13852aa"},{url:"dist/menus/image/invert-image.js",revision:"e4618ac7fca6ff6db4db06cbf84d1aaf"},{url:"dist/menus/options/draw-opaque.js",revision:"3799a259e4bcac461c17527fd85233a1"},{url:"dist/menus/options/get-colors.js",revision:"a9ca13b39ddc91b458d85f0876677ac4"},{url:"dist/menus/options/index.js",revision:"951fa956b4e85e507ebafd7e69d98ddc"},{url:"dist/menus/options/save-colors.js",revision:"f4ef5d8d65b43db1e423cca911c298f0"},{url:"dist/menus/view/color-box.js",revision:"b1dfc1f3e359beb50cc7b7c64af7c4a8"},{url:"dist/menus/view/custom.js",revision:"e7d35fa954fd497f5ec6b3324d22f060"},{url:"dist/menus/view/index.js",revision:"9181ce787e0d189801e88b7919e15bdf"},{url:"dist/menus/view/large-size.js",revision:"f1afd9a5da58d68e4226914703ede4f3"},{url:"dist/menus/view/normal-size.js",revision:"8dba31d29ecb9fd453f4926c4158f652"},{url:"dist/menus/view/status-bar.js",revision:"a8f8f3e2288e4e92893591f62d71b25a"},{url:"dist/menus/view/text-toolbar.js",revision:"be2d91eba012dcf3a4ee3d883a4c7641"},{url:"dist/menus/view/tool-box.js",revision:"ac98195494f4d4b37bfe6ff2150a96fd"},{url:"dist/menus/view/view-bitmap.js",revision:"24c1602141d89928594a731e18f9e7f1"},{url:"dist/models/brush.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/drawing-context.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/fill-style.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/menu-action.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/menu.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/point.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/pointer-position.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/selection.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/text-context.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/tool-definition.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/tool.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/tools/airbrush.js",revision:"bf444007ceba4f6e93b6e3e8dc090cff"},{url:"dist/tools/all.js",revision:"2f78b651f63fa3a1aca21ccc94ccceca"},{url:"dist/tools/brush.js",revision:"cce96dd527516adcf8cd8da710b1f227"},{url:"dist/tools/ellipse.js",revision:"e6aca07e139349cd6cb8764970b342db"},{url:"dist/tools/eraser.js",revision:"a4bea9a62124da8d877cb9b4f23da4a7"},{url:"dist/tools/fill.js",revision:"226d2bb6c3c4989c1a73375c18b99dad"},{url:"dist/tools/line.js",revision:"c7a0079cbb6b20ed7d8b82d8a4f88d7c"},{url:"dist/tools/pencil.js",revision:"d8a0d0f1f76803b9640aaea2eb6d16b3"},{url:"dist/tools/pick.js",revision:"43cf29fdda4a7133c1bd3fb9337a9b44"},{url:"dist/tools/rectangle.js",revision:"f70bb647a57b16613a96ec1221d3cc09"},{url:"dist/tools/select.js",revision:"34beb97ff835631cb5a4a95b3095318c"},{url:"dist/tools/text.js",revision:"5b14dbf34c9d19625637f32a573d7b4b"},{url:"favicon.ico",revision:"0e809cc049c23b8d405a2886b8f1a23e"},{url:"index.html",revision:"aa97ad6a7ca3d28e37084669b41d358f"},{url:"manifest.webmanifest",revision:"276ee998c0d3e69b8e7d12f51743ea2a"},{url:"styles.css",revision:"66b72233258e473671c57c822f810400"}],{})}));
