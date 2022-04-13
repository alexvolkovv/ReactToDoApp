const dataBase = require('../DataBase')

class TaskController {
  async getAllTask(req, res) {
    try {
      res.header('Access-Control-Allow-Origin', '*')
      const sql = `select t.id, t."name", t.completed, t.list_id, l."name" as "listName" from task t inner join list l on t.list_id = l.id;`
      const promise = await dataBase.query(sql)

      res.json(promise.rows)
    } catch (e) {
      console.log('Задачи не получены')
    }
  }

  async removeTask(req, res) {
    try {
      const sql = `delete from task where id = ${req.params.id};`
      const answer = await dataBase.query(sql)

      res.json(answer)
    } catch (e) {
      console.error(e)
      console.log('Задача не была удалена')
    }
  }

  async addNewTask(req, res) {
    try {
      const sql = `insert into task(name, list_id) values ('${req.body.name}', ${req.body.list_id}) RETURNING id;`
      const promise = await dataBase.query(sql)
      const sqlForGettingObject = `select t.id, t."name", t.completed, t.list_id, l."name" as "listName" from task t inner join list l on t.list_id = l.id
                                    where t.id = ${promise.rows[0].id};`
      const promise2 = await dataBase.query(sqlForGettingObject)

      res.json(promise2.rows[0])
    } catch (e) {
      console.log(e)
      console.log('Список не был добавлен')
    }
  }

  async updateTask(req, res) {
    try {
      const sql = `update task set "name" = '${req.body.name}', completed = '${req.body.completed}' where id = ${req.params.id};`
      const answer = await dataBase.query(sql)

      res.json(answer)
    } catch (e) {
      console.log('Обновление задачи не было выполнено')
    }
  }
}

module.exports = new TaskController()
