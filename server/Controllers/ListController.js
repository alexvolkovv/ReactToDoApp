const dataBase = require('../DataBase')

class ListController {
  async getAllList(req, res) {
    try {
      res.header('Access-Control-Allow-Origin', '*')
      const sql = `select list.id, list."name", c.id as "colorId", c.hex from list inner join color c on list.color_id = c.id;`
      const promise = await dataBase.query(sql)

      res.json(promise.rows)
    } catch (e) {
      console.log('Списки задач не получены')
    }
  }

  async addNewList(req, res) {
    try {
      const sql = `insert into list(name, color_id) values ('${req.body.name}', ${req.body.colorId}) RETURNING id;`
      const promise = await dataBase.query(sql)
      const sqlForGettingObject = `select list.id, list."name", c.id as "colorId", c.hex from list inner join color c on list.color_id = c.id
                                    where list.id = ${promise.rows[0].id};`
      const promise2 = await dataBase.query(sqlForGettingObject)

      res.json(promise2.rows[0])
    } catch (e) {
      console.log(e)
      console.log('Список не был добавлен')
    }
  }

  async removeList(req, res) {
    try {
      const sql = `delete from list where id = ${req.params.id};`
      const promise = await dataBase.query(sql)

      res.json(promise)
    } catch (e) {
      console.log(e)
      console.log('Список не был удален')
    }
  }

  async updateList(req, res) {
    try {
      const sql = `update list set "name" = '${req.body.name}' where id = ${req.params.id};`
      const answer = await dataBase.query(sql)

      res.json(answer)
    } catch (e) {
      console.log('Не удалось изменить список')
    }
  }
}

module.exports = new ListController()
