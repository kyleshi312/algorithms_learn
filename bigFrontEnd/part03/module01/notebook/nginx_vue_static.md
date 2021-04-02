* 下载windows nginx

* start nginx.exe
nginx -s reload

nginx -s stop



```
location / { 
    root html; index index.html index.htm; 

    #新添加内容 #尝试读取$uri(当前请求的路径)，如果读取不到读取$uri/这个文件夹下的首页 #如果都获取不到返回根目录中的 

    index.html 
    try_files $uri $uri/ /index.html; 
}
```