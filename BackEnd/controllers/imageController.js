
const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const createImage = async (req, res) => {

    try{
        const image = await openai.images.generate({
            prompt: "cartoon image of a baby on the moon",
            n: 2,
            size: "1024x1024"
        });
        res.status(200).json({
            data: image.data,
            success: true
        });
    }
    catch(error){
        res.status(400).json({
            error: error,
            success: false
        });
    }

}

module.exports = { createImage };