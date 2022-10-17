import connection from '../database/database.js';

async function createShortUrl(url, shortUrl, userId) {
	return await connection.query(`
		INSERT INTO urls 
			(url, "shortUrl", "userId") 
			VALUES ($1, $2, $3);`, 
			[url, shortUrl, userId]);
}

async function addContUrl(id, newCont) {
	return await connection.query(`
		UPDATE urls SET "visitCount"=$1
			WHERE id=$2;`, 
			[newCont, id]);
}

async function deleteUrl(id) {
	return await connection.query(`DELETE FROM urls
		WHERE id=$1;`, [id]);
}

async function getUrls(search, field) {
	return await connection.query(`SELECT * FROM urls
		WHERE "${field}"=$1;`, [search]);
}

const urlRepository = {
	createShortUrl, addContUrl, deleteUrl, 
	getUrls
}

export default urlRepository;