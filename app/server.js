const Koa = require('koa')
const app = new Koa()
const port = 3000

app.use(ctx => ctx.body = 'Olás')

app.listen(port, () => {
  console.log(`Servidor criado em: http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c')
})
