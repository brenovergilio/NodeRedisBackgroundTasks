import Mail from '../lib/Mail.js';

export default {
    key: 'RegistrationMail',
    options: {

    },
    async handle({ data }) {
        const { user } = data;
        await Mail.sendMail({
            from: 'TESTE <contato@teste.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Teste de cadastro',
            html: `Olá, ${user.name}, bem-vindo à plataforma`
        })        
    }
}


