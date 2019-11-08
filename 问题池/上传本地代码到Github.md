# 「如何将本地代码上传到Github？」中遇到的问题

**希望可以提供解决方法帮助遇到同样困扰的小伙伴。**

首先交代一下情景。在按照教程操作之前，已经在github新建好一个repository（并且在新建填入一些基本信息时，新建了一个Rename文件（并不知道对之后操作有何影响，但先不管，按照教程步骤走））
以及，本人是按照[阿法狗的世界](https://www.cnblogs.com/520lqlst/p/8375976.html)的步骤来实现本地代码上传到Github。

## 问题1：无法执行“git push -u origin master”指令

真实地，尝试了好几次，甚至从头来过好几次，依旧被reject！很气愤，所以找了一些内容帖子看为什么会出现这样的状况。
其中一次，在显示执行“git push -u origin master”指令失败之前，我的命令栏里显示需要输入关于rsa的passpharse。Excuse me?看教程老师的步骤根本没这个环节，我就想到肯定是之前想做博客的时候，已经生成过一次ssh。但是之前的想法算是烂尾而终，所以好像密码我也忘记了（but 我觉得自己输入的密码是对的，不知道为什么重新再绑定新邮箱设密码之后依旧报错，内心真的很郁闷）。

> 但是最后还是解决了~我是这样做的：
1. 删掉建好的repository
2. 进行到教程的[4-3 关联github仓库]步骤之前，再在Github上新建repository，并且这次不要一开始就有一个Rename文件
然后这次“git push -u origin master”指令就执行成功了。（Yeah~~~）

本次遇到的最大问题就是无法执行“git push -u origin master”指令，然后在回溯到底是哪一步出错的时候，还遇到了“如何重新绑定邮箱”“如何更新本地已经存在的ssh”的细小的拦路虎，但这些都在网络的帮助下得以解决。

[github 添加 SSH key - 别人眼中的过客 - 博客园](https://www.cnblogs.com/blogzhangwei/p/5944975.html "github 添加 SSH key - 别人眼中的过客 - 博客园")
[教你上传本地代码到github - 坐在家里晒太阳 - 博客园](http://www.cnblogs.com/mei0619/p/8260696.html "教你上传本地代码到github - 坐在家里晒太阳 - 博客园")