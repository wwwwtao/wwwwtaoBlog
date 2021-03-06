## HTTP 发展历史

### HTTP/0.9

 只有一个命令 get ，   没有 Header ,   服务器发送完毕就关闭 TCP 连接

### HTTP/1.0or1.1

 增加了很多命令，   增加了 status code 和 header

 持久连接 ，   pipeline ,   增加 host

### HTTP/2

 所有数据以二进制传输

 同一个连接发送多个请求不再需要按顺序来（现在是并发发送 HTTP 请求 但是服务器响应请求要一个一个来）

 头信息压缩以及推送等提高效率的功能（请求 html 同时 推送 js，css 到客户端  并行下载 html，css，js）

### HTTP/3

#### RTT 是 Round Trip Time 的缩写，通俗地说，就是通信一来一回的时间。

1. HTTP 通信时间总和 = TCP 连接时间 + HTTP 交易时间 = 1.5 RTT + 1 RTT = 2.5 RTT
2. HTTPS 通信时间总和 = TCP 连接时间 + TLS 连接时间 + HTTP 交易时间 = 1.5 RTT + 1.5 RTT + 1 RTT = 4 RTT

3. HTTP1.x
完整页面加载时间 = 4RTT *2 = 8RTT

3. HTTP2
头部阻塞（Head of line Blocking）

4. QUIC
QUIC（Quick UDP Internet Connection）IP / UDP / QUIC
其页面的加载时间为 2.5 RTT 时间 重连 TLS 连接是一个 0 RTT 事件，用户所要等待的页面加载事件 = HTTP 交易事件 = 1 RTT。

5. HTTP /3
TLS 1.3
IETF 的 QUIC 标准集成了 TLS 1.3 版本，1.3 版本更简练，建立 TLS 连接不再需要 1.5 RTT，而只需要 1 RTT，是因为浏览器第一次就把自己的密钥交换的素材发给服务器，这样就节省了第三次消息，少了 0.5 个 RTT 时间。
页面的整体加载时间 = TLS 1.3 连接时间 + HTTP 交易时间 = 1RTT + 1RTT = 2 RTT
重连页面的加载时间 = HTTP 交易时间 = 1 RTT
上文协议的进化过程就是人类与 RTT 斗争史，目标是减少用户等待页面加载时间、同时保证用户看到的页面安全，没有在传输过程中被偷窥、篡改。

#### 总结

##### HTTP/2 虽然具有多个流并发传输的能力，但是传输层是 TCP 协议，于是存在以下缺陷：

1. 队头阻塞，HTTP/2 多个请求跑在一个 TCP 连接中，如果序列号较低的 TCP 段在网络传输中丢失了，即使序列号较高的 TCP 段已经被接收了，应用层也无法从内核中读取到这部分数据，从 HTTP 视角看，就是多个请求被阻塞了；

2. TCP 和 TLS 握手时延，TCL 三次握手和 TLS 四次握手，共有 3-RTT 的时延；

3. 连接迁移需要重新连接，移动设备从 4G 网络环境切换到 WIFI 时，由于 TCP 是基于四元组来确认一条 TCP 连接的，那么网络环境变化后，就会导致 IP 地址或端口变化，于是 TCP 只能断开连接，然后再重新建立连接，切换网络环境的成本高；

##### HTTP/3 就将传输层从 TCP 替换成了 UDP，并在 UDP 协议上开发了 QUIC 协议，来保证数据的可靠传输。QUIC 协议的特点：

1. 无队头阻塞，QUIC 连接上的多个 Stream 之间并没有依赖，都是独立的，也不会有底层协议限制，某个流发生丢包了，只会影响该流，其他流不受影响；

2. 建立连接速度快，因为 QUIC 内部包含 TLS1.3，因此仅需 1 个 RTT 就可以「同时」完成建立连接与 TLS 密钥协商，甚至在第二次连接的时候，应用数据包可以和 QUIC 握手信息（连接信息 + TLS 信息）一起发送，达到 0-RTT 的效果。

3. 连接迁移，QUIC 协议没有用四元组的方式来“绑定”连接，而是通过「连接 ID 」来标记通信的两个端点，客户端和服务器可以各自选择一组 ID 来标记自己，因此即使移动设备的网络变化后，导致 IP 地址变化了，只要仍保有上下文信息（比如连接 ID、TLS 密钥等），就可以“无缝”地复用原连接，消除重连的成本；

4. 另外 HTTP/3 的 QPACK 通过两个特殊的单向流来同步双方的动态表，解决了 HTTP/2 的 HPACK 队头阻塞问题。

## 为什么使用三次握手？ HTTP 三次握手连接示例 https://www.jianshu.com/p/ae3715d0cf80

  为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误 ——谢希仁著《计算机网络》第四版
  谢希仁版《计算机网络》中的例子是这样的，“已失效的连接请求报文段”的产生在这样一种情况下：client 发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达 server。本来这是一个早已失效的报文段。但 server 收到此失效的连接请求报文段后，就误认为是 client 再次发出的一个新的连接请求。于是就向 client 发出确认报文段，同意建立连接。假设不采用“三次握手”，那么只要 server 发出确认，新的连接就建立了。由于现在 client 并没有发出建立连接的请求，因此不会理睬 server 的确认，也不会向 server 发送数据。但 server 却以为新的运输连接已经建立，并一直等待 client 发来数据。这样，server 的很多资源就白白浪费掉了。采用“三次握手”的办法可以防止上述现象发生。例如刚才那种情况，client 不会向 server 的确认发出确认。server 由于收不到确认，就知道 client 并没有要求建立连接。”

  主要目的防止 server 端一直等待，浪费资源。

## 自己的理解：

  第一次 客户端 - 服务端 Seq=0（我不知道有没有被成功接收的数据）

  第二次 服务端 - 客户端 Seq=0（我不知道有没有被成功接收的数据）  Ack=1（但是我接收了一个数据）

  第三次 客户端 - 服务端 Seq=1（我此时知道了一个被成功接收的数据）  Ack=1（我也接收了一个数据）  准备好建立连接发给服务端 之后连接建立

  观察 SYN 的含义：同部字段。如果客户端和服务器端都需要使用 SYN-ACK 机制同步一下的话，最少是需要 3 次握手的。另一方面服务器资源相对于客户端资源是更加重要一点。

  序号 seq ：发送了多少被成功接受的数据。

  确认号 ack：接受了多少数据

  发送端的 seq 字段需要接收到服务器段的 ack 才会变化，这个时候 服务器 ack = 客户端 seq

## 浏览器输入 URL 后 HTTP 请求返回的完整过程

DNS 解析（根据域名知道 ip 地址），建立 TCP 链接（三次握手），发送 http 请求
serer 接收到 http 请求，处理，并返回
客户端接收到返回数据，处理数据

![img](https://raw.githubusercontent.com/wwwwtao/Notes/master/HTTP协议原理/images/浏览器输入 URL 后 HTTP 请求返回的完整过程.png)
<!-- <img width="100%" src="https://raw.githubusercontent.com/wwwwtao/Notes/master/HTTP协议原理/images/浏览器输入 URL 后 HTTP 请求返回的完整过程.png"> -->

## 应用层协议 (HTTP 协议）    ==>传输层（TCP）==>网络层 ==>数据链路层 ==>物理层：

 只要能够保证，一端发送时构造的数据，另一端能够正确的解析，就是 ok 的，这种约定就是应用层协议

### 认识 URL

![img](https://raw.githubusercontent.com/wwwwtao/Notes/master/HTTP协议原理/images/认识URL.png)
<!-- <img width="100%" src="https://raw.githubusercontent.com/wwwwtao/Notes/master/HTTP协议原理/images/认识URL.png"> -->

### HTTP 协议格式

（1）HTTP 请求

主要分为四部分：

    1）请求行：在 HTTP 请求报文中第一行即为请求行，以空格为界，分为三个区域：【请求方法，常为 GET/POST】+【想请求的资源 url】+【HTTP 协议版本，常为 1.0/1.1】；

    2）请求报头 Header：在 HTTP 请求报文中从第二行到空行之前的即为请求报头，是请求属性，均以冒号分割的键值对形式呈现，每组属性间用 \n 分隔；

    3）空行：表示报头已完，不能省略

    4）请求正文 Body：空行以后的均是请求正文，表示要提交给浏览器看的消息，允许为空字符串。若 Body 存在，在 Header 中有一个 Content-Length 属性来表标识 Body 的长度；若服务器返回一个 html 页面，那么 html 页面内容就是在 Body 中

其中：

    1）GET 方法：请求消息在正文中

    2）POST 方法：请求消息在报文中

主要格式如下图：（请求报文）

![img](https://raw.githubusercontent.com/wwwwtao/Notes/master/HTTP协议原理/images/HTTP协议格式.png)
<!-- <img width="100%" src="https://raw.githubusercontent.com/wwwwtao/Notes/master/HTTP协议原理/images/HTTP协议格式.png"> -->

（2）响应报文 response

主要分四部分：

    1）响应行：在 HTTP 请求报文中第一行即为请求行，以空格为界，分为三个区域：【协议版本号】+【状态码】+【状态码解释】；

    2）响应报头 Header：在 HTTP 请求报文中从第二行到空行之前的即为请求报头，表示请求的属性；

    3）空行：表示报头已完，不能省略；

    4）响应正文 Body：空行以后的均是请求正文，允许为空字符串；若 Body 存在，在 Header 中有一个 Content-Length 属性来表标识 Body 的长度；若服务器返回一个 html 页面，那么 html 页面内容就是在 Body 中。

具体响应报文如下图（其中一部分，响应正文没有截完）：

![img](https://raw.githubusercontent.com/wwwwtao/Notes/master/HTTP协议原理/images/响应报文.png)
<!-- <img width="100%" src="https://raw.githubusercontent.com/wwwwtao/Notes/master/HTTP协议原理/images/响应报文.png"> -->

### HTTP 的方法

具体方法见下表，常用方法有 GET 与 POST 方法：

![img](https://raw.githubusercontent.com/wwwwtao/Notes/master/HTTP协议原理/images/HTTP的方法.png)
<!-- <img width="100%" src="https://raw.githubusercontent.com/wwwwtao/Notes/master/HTTP协议原理/images/HTTP的方法.png"> -->

### HTTP 的状态码

HTTP 的状态码有以下几种，其中重定向状态码又分为永久性重定向、临时性重定向两种。

![img](https://raw.githubusercontent.com/wwwwtao/Notes/master/HTTP协议原理/images/HTTP的状态码.png)
<!-- <img width="100%" src="https://raw.githubusercontent.com/wwwwtao/Notes/master/HTTP协议原理/images/HTTP的状态码.png"> -->

### HTTP 请求头 (request headers) 和响应头 (response headers) 解析

#### 请求头（request headers）

<!-- -- 请求方式 文件名 http 版本号 -->

POST /user/signin HTTP/1.1

<!-- 请求地址  -->

Host: passport.cnblogs.com

<!-- Connection 决定当前的事务完成后，是否会关闭网络连接。如果该值是“keep-alive”，网络连接就是持久的，不会关闭，使得对同一个服务器的请求可以继续在该连接上完成。 -->

Connection: keep-alive

<!-- 发送给 HTTP 服务器的长度 -->

Content-Length: 557

<!-- 起源是来自哪里 -->

Origin: https://passport.cnblogs.com

<!-- 表明是 ajax 异步请求 -->

X-Requested-With: XMLHttpRequest

<!-- 提供上下文服务器，告诉服务器我是从哪里来的，一般用于网站流量统计。 -->

Referer: https://passport.cnblogs.com/user/signin?ReturnUrl=http://www.cnblogs.com/fighter007/p/8422868.html

<!-- 浏览器申明自己接收的编码方式：通常指定压缩、是否支持压缩、支持什么方式压缩（gzip/default） -->

Accept-Encoding: gzip, deflate, br

<!-- 浏览器申明自己接收的语言 -->

Accept-Language: zh-CN,zh;q=0.9

<!-- 浏览器接收的媒体类型 application/json, text/javascript 代表浏览器可以处理所有类型 -->

Accept: application/json, text/javascript, */*;

<!-- 告诉 HTTP 服务器客户端浏览器使用的操作系统和浏览器的版本和名称 -->

User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36

<!-- 浏览器接收的内容类型、字符集 -->

Content-Type: application/json; charset=UTF-8

补充：常见的媒体格式 Content-Type 类型如下：

   text/html ： HTML 格式

   text/plain ：纯文本格式

   text/xml ：  XML 格式

   image/gif ：gif 图片格式

   image/jpeg ：jpg 图片格式

   image/png：png 图片格式

   以 application 开头的媒体格式类型：

   application/xhtml+xml ：XHTML 格式

   application/xml     ： XML 数据格式

   application/atom+xml  ：Atom XML 聚合格式

   application/json    ： JSON 数据格式

   application/pdf       ：pdf 格式

   application/msword  ： Word 文档格式

   application/octet-stream ： 二进制流数据（如常见的文件下载）

   application/x-www-form-urlencoded ： form encType=''中默认的 encType，form 表单数据被编码为 key/value 格式发送到服务器（表单默认的提交数据的格式）

   另外一种常见的媒体格式是上传文件之时使用的：

  multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式

  cookies: 是服务器发送到浏览器并保存在本地的一小块数据，存储在 header 中，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上，通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。

#### 响应头（response headers）解析

<!--  响应的状态码 200 表示正常应答 -->

HTTP/1.1 200 OK

<!-- 生成消息的具体时间和日期 -->

Date: Mon, 12 Feb 2018 11:22:13 GMT

<!-- 申明资源的最后修改日期和时间 -->

Last-Modified:Wed, 21 Dec 2011 09:09:10 GMT

<!-- http 服务器告诉浏览器自己响应的对象类型和字符集（并且告诉客户端实际返回的内容的内容类型） -->

Content-Type: application/json; charset=utf-8

更多类型，例如：

Content-Type:text/html; charset=utf-8

Content-Type:text/html;charset=GB2312

Content-Type: image/jpeg

<!-- http 服务器的响应实体正文的长度 -->

Content-Length: 54

<!-- http 服务器告诉浏览器自己响应的语言 -->

Content-Language：da

<!-- http 服务器表名自己使用了什么压缩方法 -->

Content-Encoding：gzip

<!-- Connection 决定当前的事务完成后，是否会关闭网络连接。如果该值是“keep-alive”，网络连接就是持久的，不会关闭，使得对同一个服务器的请求可以继续在该连接上完成 -->

Connection: keep-alive

<!-- "private" 表示该响应是专用于某单个用户的，中间人不能缓存此响应，该响应只能应用于浏览器私有缓存中。 -->

Cache-Control: private

<!-- asp.net 版本号 -->

X-AspNetMvc-Version: 5.2

<!-- asp.net 技术的版本号 -->

X-AspNet-Version: 4.0.30319

<!-- 表示网站是由什么技术开发 -->

X-Powered-By: ASP.NET

<!-- Set-Cookie 是非常重要的 header, 用于把 cookie 发送到客户端浏览器， 每一个写入 cookie 都会生成一个 Set-Cookie. -->

Set-Cookie

Cookie 的具体工作原理为：当用户访问某个带 Cookie 的网站时，该网站的服务器该用户产生一个标识符，并将该标识符作为索引在后台的数据库中生成一个项目。然后在响应报文中添加一个“Set-Cookie：标识符”的键值对。当浏览器收到响应之后，会将“服务器的主机名和标识符”添加在它管理的 Cookie 文件中。当用户继续浏览该网站时，浏览器会将在请求报文中添加“Cookie: 标识符”的键值对，发送给服务器，这样服务器便可以根据标识符知道用户之前的活动状态了。 通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态

## 创建一个最简单的 web 服务（node.js 版）

```javascript
//第一行请求（require）Node.js 自带的 http 模块，并且把它赋值给 http 变量。

// 接下来我们调用 http 模块提供的函数： createServer 。这个函数会返回 一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号。

const http = require('http')

http.createServer(function(request,response){
  console.log('request come',request.url)

  // 发送响应数据 "Hello World"
  response.end('Hello World')
}).listen(8888)

console.log('server listening on 8888')
```

## CORS 跨域请求的限制与解决

### 什么是跨域：

协议、端口号、域名 都相同才是同一个域。

需要注意的是：协议不同（eg:https 和 http）或者端口号不同造成的跨域，前端是无法解决的。

在命令行 curl 发送请求是不会有限制的。

跨域是 浏览器 CORS 做出的同源限制

### 跨域请求的解决

1. 请求服务器的 响应头 设置 'Access-Control-Allow-Origin'

```javascript
response.writeHead(200,{

  /*  设置响应头
      res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' })
      参数1：必选，三位数的http状态码
      参数2：可选，可有可无
      参数3：可选，告诉浏览器我发给你的数据是什么类型的
   */
    /* 'Access-Control-Allow-Origin': '*'  //这样是不安全的 所有人都可以访问我们的内容 */
    'Access-Control-Allow-Origin': 'http://127.0.0.1:8888'
  })

  /* 如果想添加多个域 可以做判断（在服务端） 判断是允许的域就写入到 Access-Control-Allow-Origin 中 */
```

2. JSONP  浏览器允许 link img script 这类在标签上写 src 路径加载内容 是跨域的

```javascript
<script src="http://127.0.0.1:8887/"></script>
```

### CORS 预请求验证限制

允许的方法（跨域的时候不需要设置允许就可以进行预请求的）：GET HEAD POST （只有这三个默认）

允许 Content-Type（这三种不需要预请求验证就可以发送） : text/plain multipart/form-data application/x-www-form-urlencoded

其他限制：
1. 请求头限制 (https://fetch.spec.whatwg.org 里面有介绍允许的头部）

2. XMLHttpRequestUpload 对象均没有注册任何事件监听器

3. 请求中没有使用 ReadableStream 对象

```javascript
response.writeHead(200,{
    'Access-Control-Allow-Origin': '*', //允许所有跨域请求 (允许跨域的服务器)
    'Access-Control-Allow-Headers': 'X-Test-Cors', //允许跨域请求可以设置的请求头 (打破请求头限制)
    'Access-Control-Allow-Methods': 'POST,PUT,Delete', //允许这些请求进行跨域（默认只有GET POST HEAD 打破默认请求方法限制）
    'Access-Control-Max-Age': '1000',//1000秒内再次请求 不需要也不会进行预请求验证
  })
```

## 缓存头 Cache-Control 的含义和使用 （客户端缓存）

### 可缓存性

public （谁都可以缓存）

private （发送请求方可以缓存）

no-cache （你可以在本地缓存 缓存要在服务器验证 才可以使用）

### 到期

<!-- max-age=<seconds> （规定过期时间）

s-maxage=<seconds> （代理服务器的到期时间）

max-stale=<seconds> （即便缓存已经过期了 只要在 max-stale 的时间内 依然可以使用这个缓存） -->

### 重新验证

must-revalidate （设置了 must-revalidate 的缓存 如果已经过期 则必须去原服务端发送请求重新获取数据验证是否真的已经过期了）

proxy-revalidate （缓存服务器过期了 必须去原服务器重新请求一遍）

### 其他

no-store （本地 和 代理都不能存储缓存）

no-transform （不允许代理服务器对返回内容进行压缩之类的）

## 缓存验证头 Last-Modified 和 Etag 的使用

### Last-Modified（上次修改时间）

对比上次修改时间来验证资源是否需要更新

配合 If-Modified-Since 或者 If-Unmodified-Since 使用

### Etag（数据签名）

常见于对资源的内容进行哈希计算，对比资源的签名判断是否使用缓存

配合 If-Match 或者 If-None-Match 使用

### 使用方法 (Chrome 勾选 Disable cache 就不会发送带缓存的头了）)

1. 服务端响应头（response headers） 设置 缓存验证头

2. 浏览器在第二次发送请求 会在请求头（request headers）中，把对应的验证缓存的头带上（If-Modified-Since,If-None-Match）

3. 在服务端做判断验证是否可以使用缓存

```javascript
if (request.url === '/script.js') {
    // const html = fs.readFileSync('test.html', 'utf-8')
    const etag = request.headers['if-none-match']
    if (etag === '777') {
      response.writeHead(304, {
        'Content-type': 'text/javascript',
        'Cache-Control': 'max-age=20000000,no-cache',
        'Last-Modified': '123',
        'Etag': '777'
      })
      response.end('') //无效的 Chrome会返回你命中的缓存的值
    } else {
      response.writeHead(200, {
        'Content-type': 'text/javascript',
        'Cache-Control': 'max-age=20000000,no-cache',
        'Last-Modified': '123',
        'Etag': '777'
      })
      response.end('console.log("script loaded twice")')
    }
  }
```

## cookie 和 session

### Cookie

1. 通过 Set-Cookie 设置

2. 下次请求自动带上

3. 键值对，可以设置多个

### Cookie 属性

max-age 和 expires 设置过期时间

Secure 设置只有 https 的时候才带上 cookie

HttpOnly 无法通过 document.cookie 访问（无法用 JS 访问 cookie 内容）

Domain 让二级域名之间共享 cookie 可以设置一个主域名 在此域名之上的二级域名都共享 cookie

## Connection- 长链接 (Keep-Alive 与 close 是否保持 TCP 链接）

1. HTTP 请求是在 TCP 链接上发送的

2. 一个 TCP 链接可以发送多个 HTTP 请求

3. HTTP1.1 不能并发 HTTP 请求 HTTP2 可以并发（所以只开一个 TCP 链接就够了）！！！

4. 目前谷歌浏览器支持 6 个 TCP 链接并发

## 数据协商

### Accept

 Accept（声明 - 我想要的数据类型）

 Accept-Encoding（声明 - 我想要的编码方式 主要指数据压缩方式）

 Accept-Language（声明 - 我想要的语言）

 User-Agent（浏览器相关信息 - 移动端 or PC 端）

### Content

 Content-Type （声明 - 我实际返回的数据类型）

 Content-Encoding（声明 - 我返回的编码方式 主要指数据压缩方式）

 Content-Language（声明 - 我返回的语言）

## Redirect（重定向）返回状态码 302/301 才行

1. 在 writeHead（响应头）里面设置'Location':'/ 新路径'

2. 302 是临时重定向 301 是永久重定向 301 服务器会告诉浏览器以后这个地址你直接请求新路径（缓存了用户不清不能反悔），而 302 是每次经过服务器都会跳转到 Location 中的新路径

## Nginx 代理，缓存以及面向未来的 HTTP

### Nginx 安装和基础代理配置

```js
// 1. Nginx 文件夹 -->conf-->nginx.conf  （nginx 配置文件）
// 2. include servers/*.conf  这行代码表示配置 servers 文件夹下的 conf 配置（新的站点的单独配置文件）include 导入配置指令
// 3. .conf配置文件具体作用
   server {
    listen     8888; //监听的端口
    server_name  test.com; //浏览器里面访问的host_name 根据我们访问的host_name判断服务启动在哪里 返回什么 代理到哪里

    // location是项目的定位， root定位到项目所在文件夹，index定位到首页HTML。
    location / {
        proxy_pass http://127.0.0.1:8888;  // 代理到哪个地方
        proxy_set_header Host $host;       // 设置请求头Host为$host(nginx的变量 指原host--test.com) 用来区分不同的server_name
}
```

### Nginx 代理配置和代理缓存的用处

```js
// 1. 配置Nginx的缓存 .conf
proxy_cache_path cache levels=1:2 keys_zone=my_cache:10m    //(cache文件夹 levels是否要生成二级目录 keys_zone指关键区域的名字和内存大小)
   server {
     //...省略

    location / {
      proxy_cache my_chche; //配置的代理缓存的名字
      //...省略
}
// 2. 代理缓存相关请求头
res.writeHead(200,{
  'Cache-Control': 'max-age=2, s-maxage=20, private,no-store'
  // max-age是浏览器缓存过期时间
  // s-maxage是代理缓存过期时间
  // private 不允许代理缓存
  // no-store 不允许缓存

  'Cache-Control': 's-maxage=200',
  'Vary': 'X-Test-Cache'
  //Vary 指发送一个请求的时候，只有Vary指定的Http头的值是相同的情况下 才会使用缓存
  //还有。。。让缓存使用内存之类等等的配置
})
```

### HTTPS 解析 [vipsrc.com]

![img](https://raw.githubusercontent.com/wwwwtao/Notes/master/HTTP协议原理/images/HTTPS流程.png)
<!-- <img width="100%" src="https://raw.githubusercontent.com/wwwwtao/Notes/master/HTTP协议原理/images/HTTPS流程.png"> -->

### 使用 Nginx 部署 HTTPS 服务

```js
// 1. 在nginx/certs(证书)文件夹下输入证书生成命令（git Bash）
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout localhost-privkey.pem -out localhost-cert.pem

// 2. 配置一个HTTPS的nginx代理服务器 HTTPS server
    server {
        listen       443 ssl;
        server_name  localhost;

        ssl_certificate      cert.pem;
        ssl_certificate_key  cert.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;

        location / {
            root   html;
            index  index.html index.htm;
        }
    }

// 3. 访问HTTP跳转到HTTPS
    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  test.com
        return 302 https:/ /$server_name$request_uri;
    }
```

### HTTP2 的优势和 Nginx 配置 HTTP2 的简单使用

1. 信道复用

2. 分帧传输

3. Server push

```js

// 2. 配置一个HTTPS的nginx代理服务器 HTTPS server  HTTP2
    server {
        listen       443 ssl http2;//
        server_name  localhost;
        http2_push_preload on; //

        ssl_certificate      cert.pem;
        ssl_certificate_key  cert.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;

        location / {
            root   html;
            index  index.html index.htm;
        }
    }
```
