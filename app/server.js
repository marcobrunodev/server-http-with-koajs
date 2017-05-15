const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
const port = 3000

router
  .get('/', (ctx, next) => {
    ctx.body = '<h1>Você está na Home!</h1>'
  })
  .get('/contato', (ctx, next) => {
    ctx.body = (`
      <h1>Contato</h1>

      <form action="/contato" method="POST">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">

        <label for="mensagem">Mensagem:</label>
        <textarea name="mensagem" id="mensagem"></textarea>

        <input type="submit" value="Enviar">
      </form>
    `)
  })
  .post('/contato', (ctx, next) => {
    ctx.body = '<h1>Precisamos aprender a pegar os valores que o usuário digitou!</h1>'
  })

app.use(router.routes())

app.listen(port, () => {
  console.log(`Servidor criado em: http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c')
})
