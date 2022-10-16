import urlRepository from '../../repositories/urls.repository.js'
import { nanoid } from 'nanoid';

async function setShortUrl (req, res) {
    const { url } = req.body;
    const userId = res.locals.userId;

        const shortUrl = nanoid(8);

    try {
        const newUrl = await urlRepository.createShortUrl(url, shortUrl, userId);
        if(newUrl.rowCount !== 0){
            return res.status(201).send({shortUrl:shortUrl});
        }
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
}

export default setShortUrl;