import userRepository from '../../repositories/users.repository.js'
import bcrypt from 'bcrypt';

async function createUsers (req, res) {
    const {
        name,
        email,
        password } = req.body;

        const passwordHash = bcrypt.hashSync(password, 10);

    try {
        const newUser = await userRepository.createUser(name, email, passwordHash);
        if(newUser.rowCount !== 0){
            return res.sendStatus(201);
        }
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
}

export default createUsers;