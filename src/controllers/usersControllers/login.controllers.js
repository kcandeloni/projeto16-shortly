import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import sessionRepository from '../../repositories/sessions.repository.js'

async function singIn (req, res) {
    const { password } = req.body;
    const user = res.locals.user;

    if (bcrypt.compareSync(password, user.password)) {
        
        const token = uuid();
        
        try {
            const newSession = await sessionRepository.createSession(user.id, token);
            if(newSession.rowCount !== 0){
                return res.status(200).send({token:token});
            }
        } catch (err) {
            console.error(err);
            return res.sendStatus(500);
        }

    } else {
        res.sendStatus(401);
    }
}

export default singIn;