import Mail from '../lib/Mail.js';

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3,
        repeat: {
            every: 1,
            limit: 100
        },
        lifo: true
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


