import express from 'express'

import rutaproductos from './rutaproductos.js'
import rutacarts from './rutacarts.js'

const server = express()

server.use(express.json())
server.use("/api/productos", rutaproductos)
server.use("/api/carts", rutacarts)

server.listen(8080, () => {
  console.log('Servidor levantado')
})
