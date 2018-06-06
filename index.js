// Подключаем модуль отправки сообщений
const sender = require('./sender')

// Данные аккаунта
const config = require('./config')

// Инициализируем модуль отправки сообщений
let send = sender({
  account: config.account,
  transporterOptions: config.transporterOptions
})

// Тестово отправляем письмо
// эта функция должна быть внутри бота
// в нее нужно передавать тело отправляемого письма
send({
  from: 'Lexa <nanomen@mail.ru>',
  to: 'nanomen@mail.ru',
  subject: 'test from nodemailer',
  text: 'test text'
})
