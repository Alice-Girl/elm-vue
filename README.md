### 外面App商家页面


#### 一： 准备

> 需求分析

- 

> 页面素材

- 图标字体制作

    - **SVG** 图片转换成图标字体 [网站](https://icomoon.io/app/)

- 图片 `2@x` 和 `3@x` **dpr**

 
#### 二： 目录结构设计

- 基本样式 、图片

- `Mock` 数据

   - 读取 `mock` 数据
   - 根据 `webpack` 内部机制 [参考资料](https://webpack.js.org/configuration/dev-server/#devserverbefore)
   - 反问 `本地地址` + **/api/seller**
```javascript
    devServer: {
        before: function(app, server, compiler) {
          app.get('/api/seller', function(req, res) {
            res.json({ data: Seller });
          });
        }
    }
    ...
```

#### 三： 样式初始化

- 使用 **reset.css** [参考资料](https://meyerweb.com/eric/tools/css/reset/)

- tab栏点击元素样式动态变化 [参考资料](https://router.vuejs.org/zh/api/#router-link)

```text
（1）: isActive：如果需要应用激活的 class 则为 true。允许应用一个任意的 class。
（2）：isExactActive：如果需要应用精确激活的 class 则为 true。允许应用一个任意的 class。
（3）：设置链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置。
```

#### 四： 接口请求

- 使用的是 `axios` 插件进行请求接口
   - 参考资料 [github中的axios](https://github.com/axios/axios) 
   - [官方演示案例](https://cn.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)
   - 可以查看源码文档，下载插件包以后进行点击源码里面进行查看
```js
// 1: 执行请求 【get 、post 、put ...】

   axios.get('url', {}).then(res => res)

// 2: 可以通过向 axios 传递相关配置来创建请求
   axios({
     method: 'get/post',
     url: 'url',
     data: {}
   })
```


