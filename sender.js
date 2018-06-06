// Библиотека отправки писем https://nodemailer.com
const nodemailer = require('nodemailer')

/**
 * Функция отправки письма на почту
 *
 * Входящие параметры
 * @param {Object} account объект с данными аккаунта (логин, пароль)
 * @param {Object} transporterOptions объект с параметрами для отправки сообщения
 *
 * @return {Funciton} возвращаем функцию, которая будет отправлять письма по указанным настройкам
 */
let send = ({ account, transporterOptions }) => {

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

  return function(mail) {

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

}

module.exports = send
