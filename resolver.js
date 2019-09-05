const database = require('./database.json');

const COLORS = new Map([
  ['1','BLACK'],
  ['2','RED'],
  ['3','WHITE'],
])

module.exports = {
  Query: {
    random: () => Math.random(),

    quote: () => Math.random() < 0.5 ? '我是好人' : '我是坏人',

    rollThreeDice: () => [1, 2, 3].map(() => 1 + Math.floor(Math.random() * 6)),

    queryMap: () => database.person,

    books: () => database.book,

    showcase: (obj, args, ctx, self) => {
      const {
        code,
      } = args
      if(!args)
        return null
      return {
        color: COLORS.get(code)
      }
    },
  },
}