import conection from '../db/db.js';

let db = await conection();

async function verificaToken(req, res, next) {
    const authorization = req.headers.authorization;
    const token = authorization?.replace('Bearer ', '');
    if (!token) {
        return res.sendStatus(401);
    }

    const session = await conection.query(
        `SElECT * FROM sessions WHERE token = $1;`, [token]);
    if (session.rowCount === 0) {
        return res.sendStatus(401);
    }

    const user = await conection.query(
        `SElECT * FROM users WHERE id = $1;`, [session.userId]);

    if (user.rowCount === 0) {
        return res.sendStatus(401);
    }
    delete user.rows[0].password;

    res.locals.user = user.rows[0];

    next();
}

export default verificaToken;