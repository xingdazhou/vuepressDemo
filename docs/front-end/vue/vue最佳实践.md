# vue最佳实践

用 vue-cli2 创建的项目把webpack配置文件向外暴露出来，对开发者友好，但是对新人不友好，所以vue-cli3创建的项目把webpack配置文件隐藏起来了

可以使用指令

vue inspect 在命令行查看webpack的所有配置

 inspect 后面跟参数可查看对应区域的内容

- --rules   查看loader  如：vue inspect --rules
  - 把rules改成rule后面在跟指令即可查看该loader的细节配置 如：vue inspect --rule vue



- --plugins  查看插件配置
  - 把plugins改成plugin后面在跟指令即可查看该plugin的细节配置