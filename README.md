做这个项目的初衷是当初找工作时看上了 **大管加** 这家公司，通过上网发现这家公司的官网分为 PC 端和移动端，而自己的移动端页面开发比较薄弱，借此为由和结合 Vue 的使用，于是有了这个项目。

## 演示

![演示](https://github.com/xiejesses/erplus/blob/master/app/img/erplus-show.gif)



## 自适应

### 三个视口

**布局视口**： 与移动端浏览器宽度无关，会缩小、完整展示PC端页面 `document.documentElement.clientWidth / clientHeight`

**视觉视口**： 当前能看到的区域，例如放大、缩小网页所能看到的部分 `window.innerWidth / innerHeight`

**理想视口**： 响应式布局，移动端web使用，要添加 `meta` 标签 `screen.width / height` 

```
<meta name=viewport content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
```

### 移动网站自适应使用步骤

1. 设计稿进行设计时先定好一个设备，例如 iphone 5，然后以这个设备的物理像素为基准进行设计。

   iphone 5 的设备宽高 320x568（也叫css像素），由于其 DPR = 2，所以物理像素为 640x1136

2. 确定 1rem = ？px，为了方便计算，选取 10px 为基底，而不是16（16px 为 html 根字体默认大小），因为 iphone 5的物理像素宽为 640 ,所以 640 /10 = 64，也即 remUnit的大小。remUnit在 px2rem-loader 插件里用到。

3. 安装 px2rem-loader 插件

4. 引入 viewport.js 文件，webpack 在 entry 里配置 

   ```entry: ['./app/js/viewport.js','./app/js/main.js']
   entry: ['./app/js/viewport.js','./app/js/main.js']
   ```

   修改

   ```
   document.documentElement.style.fontSize = `${innerWidth * 20 / 320}px`
   为
   document.documentElement.style.fontSize = `${innerWidth / 10}px`
   ```

   5.在不同的设备下显示，先取得设备尺寸和 DPR，将设备宽乘以 DPR 得到物理像素宽，再除以10，得到根字体大小，由于在上面步骤已经将 px 转化为 rem，所以能自动更改大小。

**问题：**

为什么设置maxWidth = 540？

因为旧版的flexible具有最大宽度1080(540*dpr)的问题？也就是说当屏幕宽度大于1080的时候，两边会留出空白，而无法占满屏幕

### 大管加官网移动端自适应方案

1. 使用手淘的 flexible 方案
2. 针对 ios 设备可以有不同的 dpr, 其它设备使用 dpr = 1
3. 选取 10 为基底计算 remUnit

### 其它方案

1. [使用vw](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)



## 遇到的问题

### 1. 安装 node-sass 出错

修改 .npmrc 文件

```
registry=https://registry.npm.taobao.org
SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass
```

### 2. a标签下有 img 时，a 标签有高度

```
原因：a 和 img 都是行内元素，他们的下边缘默认与基线对齐(vertical-align:baseline)
解决方法:
a img {
  display: block;
}
```

### 3. 字体px 不转 rem

1. 把设置字体的 `comment.scss` 改为 `comment.css`
2. 把不需要转化的样式后面加 ` /*no*/` 

解释：开始时使用的是.scss文件，在网上查到添加 

```
options: {
    outputStyle: 'expanded',
 }
```

可以解决加了 `/*no*/` 无效的问题，但在项目中加了没用，无奈之下，把 `comment.scss` 改为 `comment.css` 就行了

### 4. [`vue-router` history 模式问题](https://github.com/xiejesses/blog/issues/1)

### 5. Font Boosting

在项目开发过程中，这个问题也困惑了挺久，就是字体的显示大小与在 CSS 中设定的显示不一致。

解决方法是在出现问题的地方，在 CSS 里加上 `max-height: 100%` 禁用掉 `Font Boosting` 

具体解析请 [参见](https://github.com/amfe/article/issues/10)



## To Do List

- [ ] 首页动画