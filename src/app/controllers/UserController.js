import passwordGenerator from 'password-generator';

export default {
    async store(req, res) {
        const { name, email } = req.body;
        const user = {
            name,
            user,
            password: passwordGenerator(15, false)
        };

        return res.json(user);
    }
}