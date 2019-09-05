module.exports =
  `
    "schema根query"
    type Query {
      "宣言"
      quote: String
      "随机数"
      random: Float!
      "随机长度3数组"
      rollThreeDice: [Int]!
      queryMap: Person
      books: [Book]
      showcase(
        code: String!
      ): Showcase
    }

    "人物"
    type Person {
      "姓名"
      name: String!
      "未知属性"
      appearsIn: [String]
    }

    "书籍"
    type Book {
      "书名"
      title: String
      "作者"
      author: String
    }

    "显示哪种颜色"
    type Showcase{
      color: Color
    }

    "颜色枚举"
    enum Color {
      "1"
      BLACK
      "2"
      RED
      "3"
      WHITE
    }
  `