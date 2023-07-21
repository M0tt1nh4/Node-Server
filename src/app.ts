import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

// Unitários: unidade da sua aplicação
// Integração: comunicação entre duas ou mais unidades
// e2e - ponta a ponta: simula um usuário operando na nossa aplicação

// front-end: abre a página de login, digite o texto felipe@gmail.com no campo com ID email, clique no botão
// bacl-end: chamadas HTTP, WebSockets

// Pirâmide de testes: E2E (não dependem de nenhuma tecnologia, arquitetura)

export const app = fastify()

app.register(cookie)

// Middleware Global

// app.addHook('preHandler', async (req, rep) => {
//   console.log(`[${req.method}] ${req.url}`)
// })

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

// app.get('/hello', async () => {
//   const transaction = await knex('transactions')
//     .insert({
//       id: crypto.randomUUID(),
//       title: 'Transação de teste',
//       amount: 1000,
//     })
//     .returning('*')

//   return transaction
// })
