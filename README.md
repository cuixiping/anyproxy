AnyProxy
----------------

AnyProxy是一个基于NodeJS的，可供NodeJS插件配置的HTTP/HTTPS代理服务器。

基于原 [alibaba/anyproxy][1] 4.1.0

### 目的：

原AnyProxy包括核心功能与监控功能，安装包较大，本Fork只保留核心功能，并减少依赖包，
较小安装大小，优化核心功能。

### 本Fork与原AnyProxy的主要区别：

|功能点|原AnyProxy|本Fork|
|------|:--------:|:----:|
|HTTP/HTTPS代理服务|√|√|
|NodeJS配置|√|√|
|Web监控|√|×|
|日志|√|×|
|文件缓存|√|×|
|命令行|√|×|
|依赖包|多|少|

### 使用手册：

- http://anyproxy.io/

[1]: https://github.com/alibaba/anyproxy
