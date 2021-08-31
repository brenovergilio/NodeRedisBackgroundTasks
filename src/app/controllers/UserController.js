export default {
    async store(req, res) {
        const { name, email } = req.body;
        const user = {
            name,
            user,
            password
        };

        return res.json(user);
    }
}