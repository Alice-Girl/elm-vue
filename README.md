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
