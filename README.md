# Graphql-server
Graphql-server

# 安装依赖

```
npm i
```

# 开发

```
ok     =>
× node index.js

better =>
√ nodemon index.js
```

## 使用
```
app.listen(4040, 'localhost')
```

## 扩展
我们建议您把项目扩展的 schema 和 resolver 放置在一个目录下面，同时只使用一层层级，例如使用这样的文件结构:
```
/project/graphql/schema/*.js
/project/graphql/resolver/*.js
```