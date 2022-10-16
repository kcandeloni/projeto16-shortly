import connection from '../database/database.js';

async function getUrlbyId(id) {
	return await connection.query(`SELECT u.id,u.url AS url,u."shortUrl" FROM urls u
		WHERE id=$1;`, [id]);
}

async function createShortUrl(url, shortUrl, userId) {
	return await connection.query(`
		INSERT INTO urls 
			(url, "shortUrl", "userId") 
			VALUES ($1, $2, $3);`, 
			[url, shortUrl, userId])
}

const urlRepository = {
	getUrlbyId, createShortUrl
}

export default urlRepository;