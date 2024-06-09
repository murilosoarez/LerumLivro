export default function Validating(type, data) {
    var error = {}
    var result = true

    if (type == 'register' || type == 'login') {
        if (data.user === '') {
            error.user = 'Campo de usuário não pode ficar vazio!'
            result = false
        } 
        else if (data.password === '') {
            error.password = 'Campo de senha não pode ficar vazio!'
            result = false
        }
    }

    if (type == 'register') {
        if (data.email === '') {
            error.email = 'Campo de email não pode ficar vazio!'
            result = false
        }  else if (!data.email.includes('@') || !data.email.includes('.')) {
            error.email = 'Campo de email precisa conter @ e . em seu corpo!'
            result = false
        }
    }

    return { error, result }
}