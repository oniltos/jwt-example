import dotenv from 'dotenv/config'
import jwt from 'jsonwebtoken'

//Crio o payload, as infos que serão guardadas no jwt
const payload = {
    id: 1234567,
    email: 'felipe@gmail.com'
}

//chave secreta para assinar o jwt
const secret = process.env.JWT_SECRET
//tempo para expiração do jwt
const expiresIn = process.env.JWT_EXPIRES

//gerando o jwt
const token = jwt.sign(payload, secret, {expiresIn})
console.log('token gerado:', token)

//verificando o jwt
setTimeout(() => {
    try {
        const decoded = jwt.verify(token, secret)
        console.log('verificação: ', decoded)
    } catch (error) {
        console.log('erro: ', error)
    }
}, 10000)