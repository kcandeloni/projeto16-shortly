import urlRepository from '../../repositories/urls.repository.js'

async function myUrls (req, res) {
    const {id, name} = res.locals.user;
    
    try {
        const listMyUrls = await urlRepository.getUrls(id, 'userId');
        let visitCount = 0;
        if(listMyUrls.rowCount !== 0){
            listMyUrls.rows.map(url => {
                    delete url.createdAt;
                    delete url.userId;
                    visitCount += url.visitCount;
            });
        }
        return res.send({
            id, 
            name, 
            visitCount,
            shortenedUrls:listMyUrls.rows }).status(200);

    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
}

export default myUrls;