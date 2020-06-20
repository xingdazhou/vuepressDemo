

# KOA-鉴权

常见鉴权方式

- Session/Cookie
- Token
- OAuth

#### cookie的基本原理：

第一次请求服务器响应设置cookie，浏览器收到之后，把cookie保存起来，下次再去请求的话，他就会带上这个cookie（就是后端在前端放置一个状态）

- 第一次请求，让服务端响应一个设置cookie的信息。

<!-- ![image-20200608171700119](../assets/image-20200608171700119.png) -->

- 下次再请求，在请求头中就会携带上这个cookie的值

<!-- ![image-20200608171706913](../assets/image-20200608171706913.png) -->

### session