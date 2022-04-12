const dataBase = require('../DataBase')

class ColorController {
  async getAllColors(req, res) {
    try {
      const sql = `select * from color`
      const promise = await dataBase.query(sql)

      res.json(promise.rows)
    } catch (e) {
      console.log('Список цветов не получен')
    }
  }
}

module.exports = new ColorController()
