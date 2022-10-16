import urlRepository from '../../repositories/urls.repository.js'

async function openUrl (req, res) {
    const shortUrl = req.params.shortUrl;
    
    try {
        const getUrl = await urlRepository.getUrl(shortUrl);
        if(getUrl.rowCount !== 0){
            const addVisit = getUrl.rows[0].visitCount + 1;
            await urlRepository.addContUrl(getUrl.rows[0].id, addVisit);
            return res.redirect(getUrl.rows[0].url);
        }
        else{
            return res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
}

export default openUrl;