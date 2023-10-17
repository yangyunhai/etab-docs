On this page

Table of Contents for current page

# ❌Download Interrupted [​](#❌download-interrupted)

> edge浏览器安装扩展插件报错：出现错误Download interrupted的解决办法

1.  打开host文件：文件路径为 `C:\Windows\System32\drivers\etc`
2.  找到host文件后，txt记事本方式打开，然后在host文件最下面，把下面的内容复制粘贴添加进去：

```
131.253.33.219 edge.microsoft.com131.253.33.219
msedgeextensions.sf.tlu.dl.delivery.mp.microsoft.com
```

3.  保存 hosts 文件。
4.  如果无法保存hosts，文件用管理员权限打开 hosts 文件即可