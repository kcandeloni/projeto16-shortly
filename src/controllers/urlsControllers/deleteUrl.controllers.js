import urlRepository from '../../repositories/urls.repository.js'

async function deleteUrl (req, res) {
    const id = req.params.id;
    const userId = res.locals.userId;

    if(!(Number(id) > 0)){
        return res.sendStatus(404);
    }
    try {
        const getUrl = await urlRepository.getUrlbyId(id);
        
        if(getUrl.rowCount !== 0){
            
            if(getUrl.rows[0].userId !== userId){
                return res.sendStatus(401);    
            }
            
            await urlRepository.deleteUrl(id);
            
            return res.sendStatus(204);
        }
        else{
            return res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
}

export default deleteUrl;