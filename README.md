# interview-ydh

## Test Problems

* 题目提交到当前repo
* 每天至少一次commit，方便我们这边跟进进度

#### 1. 仿造 github 搜索页面  
  1. 使用vue框架开发
  2. 真实还原[github 搜索页面][github_search]，即ui相同
  3. 调用[github api][github_api_v3]实现搜索、分页功能

#### 2. 实现一个quicksort动效

![quicksort-animation](https://images2017.cnblogs.com/blog/849589/201710/849589-20171015230936371-1413523412.gif)
  1. 使用quicksort排序
  2. 采用html、css、原生javascript实现上图效果

#### 3. 实现一个二叉树，使插入、查询、删除的时间复杂度为O(logn)
  1.使用typescript 编写，定义各数据类型Type

```javascript
class Tree {
// implement your code
}

let t = new Tree()
t.add(2)
t.hasValue(2)  // true
t.add(4)
t.add(4)
t.add(3)
t.print()      // 升序输出，[2, 3, 4]
t.remove(2)    // [3, 4]
```

[composition-api]:https://github.com/vuejs/composition-api
[github_search]:https://github.com/search?q=git
[github_api_v3]:https://developer.github.com/v3/
