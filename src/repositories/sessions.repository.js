import connection from '../database/database.js';

async function createSession(userId, token) {
	return await connection.query(`
		INSERT INTO sessions 
			("userId", token) 
			VALUES ($1, $2);`, 
			[userId, token])
}

async function getSession(token) {
	return await connection.query(`
    SElECT * FROM sessions WHERE token = $1;`
        , [token])
}

const sessionRepository = {
	createSession, getSession
}

export default sessionRepository