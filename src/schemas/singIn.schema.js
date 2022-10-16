import joi from "joi";

const singInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).required()
});

export default singInSchema;