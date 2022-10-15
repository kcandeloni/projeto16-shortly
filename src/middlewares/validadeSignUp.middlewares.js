import userSchema from '../schemas/users.schema.js';
import userRepository from '../repositories/userRepository.js'

async function valideteUser (req, res, next) {
    const { name, email, password, confirmPassword } = req.body;
    
    if(name === '' || name[0] === ' '){
        return res.sendStatus(422);
    }

    const validation = userSchema.validate(req.body, { abortEarly: false });

    if (validation.error) {
        console.log(validation.error.details.map(err => err.message))
        return res.sendStatus(422);
    }

    if(password !== confirmPassword){
        return res.sendStatus(422);
    }

    try {
        const uniqueEmail = await userRepository.getUserbyEmail(email);
        if(uniqueEmail.rowCount !== 0){
            return res.sendStatus(409);
        }
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
    next();
}

export default valideteUser;