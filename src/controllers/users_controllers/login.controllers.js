import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import userRepository from '../../repositories/userRepository.js'

async function login (req, res) {
    const { password } = req.body;
    const user = res.locals.user;

    if (bcrypt.compareSync(password, user.password)) {
        
        const token = uuid();
        
        try {
            const newSession = await userRepository.createSession(user.id, token);
            if(newSession.rowCount !== 0){
                return res.send({token:token});
            }
        } catch (err) {
            console.error(err);
            return res.sendStatus(500);
        }

    } else {
        res.sendStatus(401);
    }
}

export default login;