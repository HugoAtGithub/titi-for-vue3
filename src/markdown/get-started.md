# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "titi-ui"
```

就可以使用了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "titi-ui"
export default {
  components: {Button}
}
</script>
```