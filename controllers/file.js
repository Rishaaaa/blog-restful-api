const uploadFile = async(req, res, next) => {
    try {
        const { file } = req;
        console.log(file);
        res.json({ ok: true });
    } catch (error) {
        next(error);
    }
}

module.exports = { uploadFile }