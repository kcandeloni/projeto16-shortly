import urlSchema from '../schemas/urls.schema.js';

async function validateUrl(req, res, next) {
    const { url } = req.body;
	const validation = urlSchema.validate(req.body, { abortEarly: false });

    if (validation.error) {
        console.log(validation.error.details.map(err => err.message))
        res.sendStatus(422);
        return;
    }

    const isUrl = url.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g);
    if (!isUrl) {
        res.sendStatus(422);
        return;
    }

    next();
}

export default validateUrl;