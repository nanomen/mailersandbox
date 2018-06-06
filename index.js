// Библиотека отправки писем https://nodemailer.com
const nodemailer = require('nodemailer')

// Данные аккаунта
const config = require('./config')

/**
 * Функция отправки письма на почту
 *
 * Входящие параметры
 * @param {Object} account объект с данными аккаунта (логин, пароль)
 * @param {Object} transporterOptions объект с параметрами для отправки сообщения
 * @param {Object} mail тело отправляемого письма
 * @return {void}
 */
let send = ({ account, transporterOptions, mail }) => {

  // Подключаем передатчик сообщений на почту, через nodemailer
  // настройки берем отсюда https://help.mail.ru/mail-help/mailer/popsmtp, которые лежат в конфиге
  //
  // объединяем настройки с данными аккаунта в один общий конфиг
  let transporter = nodemailer.createTransport(
    Object.assign(
      {},
      transporterOptions,
      account
    )
  )

  // Используя передатчик, отправляем письмо
  // по вышеуказанным настройкам transporter
  //
  // Передаем в функцию само сообщение mailOptions
  transporter.sendMail(mail, (error, info) => {

    // В случае ошибки
    if (error) {
      return console.log(error)
    }

    // Информационное сообщение в консоль,
    // при отсутствии ошибок,
    // о том, что сообщение отправлено
    console.log('message sent: %s', info.messageId)
  })
}

// Тестово отправляем письмо
// эта функция должна быть внутри бота
// в нее нужно передавать тело отправляемого письма
send({
  account: config.account,
  transporterOptions: config.transporterOptions,
  mail: {
    from: 'Lexa <nanomen@mail.ru>',
    to: 'nanomen@mail.ru',
    subject: 'test from nodemailer',
    text: 'test text'
  }
})
