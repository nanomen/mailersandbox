# Песочница для отправки писем через nodejs и nodemailer

Для отправки письма:

* установите зависимости (nodemailer) `npm i`
* сконфигурируйте конфиг `config.json` пример ниже:

```json
{
  "account": {
    "auth": {
      "user": "username@host",
      "pass": "YOUR PASSWORD HERE"
    }
  },
  "transporterOptions": {
    "host": "SMTP HOST HERE",
    "port": 465,
    "secure": true
  }
}
```

* запустите скрипт `npm start`
