import singInSchema from '../schemas/singIn.schema.js';
import userRepository from '../repositories/userRepository.js';

async function validaSignIn(req, res, next) {
    const { email } = req.body;
	const validation = singInSchema.validate(req.body, { abortEarly: false });

    if (validation.error) {
        console.log(validation.error.details.map(err => err.message))
        res.sendStatus(422);
        return;
    }

    try {
        const getUser = await userRepository.getUserbyEmail(email);
        if(getUser.rowCount === 0){
            return res.sendStatus(422);
        }
        res.locals.user = getUser.rows[0];
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }

    next();
}

export default validaSignIn;