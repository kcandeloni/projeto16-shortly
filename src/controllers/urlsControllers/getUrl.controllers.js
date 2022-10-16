import urlRepository from '../../repositories/urls.repository.js'

async function getUrlbyId (req, res) {
    const id = req.params.id;
    
    if(!(Number(id) > 0)){
        return res.sendStatus(404);
    }
    try {
        const getUrl = await urlRepository.getUrlbyId(id);
        if(getUrl.rowCount !== 0){
            return res.status(200).send(getUrl.rows[0]);
        }
        else{
            return res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
}

export default getUrlbyId;