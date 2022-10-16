import sessionRepository from '../repositories/sessions.repository.js'
import userRepository from '../repositories/users.repository.js'

async function verificaToken(req, res, next) {
    const authorization = req.headers.authorization;
    const token = authorization?.replace('Bearer ', '');
    if (!token) {
        return res.sendStatus(401);
    }

    const session = await sessionRepository.getSession(token);
    if (session.rowCount === 0) {
        return res.sendStatus(401);
    }

    const user = await userRepository.getUserbyId(session.rows[0].userId);

    if (user.rowCount === 0) {
        return res.sendStatus(401);
    }

    res.locals.userId = session.rows[0].userId;

    next();
}

export default verificaToken;