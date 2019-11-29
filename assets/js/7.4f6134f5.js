(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{156:function(t,s,a){t.exports=a.p+"assets/img/controls.785ad373.gif"},157:function(t,s,a){t.exports=a.p+"assets/img/fll.10fa8e18.gif"},164:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"给场景添加交互"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#给场景添加交互","aria-hidden":"true"}},[t._v("#")]),t._v(" 给场景添加交互")]),t._v(" "),n("p",[t._v("three.js提供了多种场景控制库，其中的OrbitControls可以很好的对整个场景进行旋转，平移，缩放。")]),t._v(" "),n("h2",{attrs:{id:"orbitcontrols"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#orbitcontrols","aria-hidden":"true"}},[t._v("#")]),t._v(" OrbitControls")]),t._v(" "),n("p",[t._v("首先引入插件，文件地址在官方案例的examples/js/controls/OrbitControls.js,将这个js文件拷贝至项目中存放并在页面的head标签里引入")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/pathName/OrbitControls.js"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}}),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("之后再创建OrbitControls对象控制场景并执行渲染，代码如下:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//场景控制")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" controls "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OrbitControls")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("camera"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncontrols"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("render"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//渲染        ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  renderer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("camera"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("现在就可以通过鼠标操纵场景进行平移，旋转，缩放了。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(156),alt:"几何体模型展示效果"}})]),t._v(" "),n("h2",{attrs:{id:"控制优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#控制优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 控制优化")]),t._v(" "),n("p",[t._v("如果浏览three.js中的一些官方示例，你会发现这些示例中的控效果比默认的效果操作起来舒服很多，这是因为OrbitControls有很多参数来控制显示效果，比如缩放阻尼，自旋转，平移速度等。\n其中的参数控制如下:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" controls "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OrbitControls")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("camera"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//鼠标控制是否可用")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enabled "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//聚焦坐标")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最大最小相机移动距离(景深相机)")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minDistance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxDistance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最大最小鼠标缩放大小（正交相机）")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minZoom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxZoom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最大仰视角和俯视角")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minPolarAngle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// radians")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxPolarAngle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// radians")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//水平方向视角限制")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minAzimuthAngle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// radians")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxAzimuthAngle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// radians")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//惯性滑动，滑动大小默认0.25")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enableDamping "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dampingFactor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.25")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//滚轮是否可控制zoom，zoom速度默认1")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enableZoom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zoomSpeed "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否可旋转，旋转速度")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enableRotate "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotateSpeed "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否可平移，默认移动速度为7px")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enablePan "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keyPanSpeed "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pixels moved per arrow key push")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否自动旋转，自动旋转速度。默认每秒30圈")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoRotate "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoRotateSpeed "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 30 seconds per round when fps is 60")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否能使用键盘")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enableKeys "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认键盘控制上下左右的键")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keys "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LEFT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UP")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("38")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RIGHT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("39")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BOTTOM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//鼠标点击按钮")]),t._v("\n  controls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mouseButtons "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ORBIT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MOUSE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LEFT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ZOOM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MOUSE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MIDDLE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PAN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MOUSE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RIGHT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("关于场景搭建的基础知识就是这些，我们可以建立一些模型，添加灯光，阴影和控制来学习Three.js。")]),t._v(" "),n("p",[t._v("有人可能就要问了，这些简单的模型无法满足项目的需要啊，项目中的模型通常都是模拟的真实物体，就像three.js官网示例中的炫酷的模型一样，比如下面这个例子，那这样的模型和效果是怎么实现的呢？")]),t._v(" "),n("p",[n("img",{attrs:{src:a(157),alt:"Three.js官网模型展示效果"}})]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",[t._v("skybox(天空盒)可以给场景添加背景，也就是上图中的车库这样的背景，后续详细讲解")])]),t._v(" "),n("p",[t._v("想要实现这样的模型，我们前面讲解的那种创建几何体并赋予材质和贴图是必定不能满足的，这种模型一般是通过3D建模软件制作并导出到浏览器中加载显示的。")])])}),[],!1,null,null,null);s.default=e.exports}}]);