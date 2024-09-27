const multer = require("multer"),
    { PassThrough } = require('stream'),
    config = require("../config"),
    azureStorage = require("azure-storage"),
    memoryStorage = multer.memoryStorage(),
    uploadStrategy = multer({ storage: memoryStorage }).single('imagen'),
    blobService = azureStorage.createBlobService(config.storageAccountOrConnectionString),
    containerName = "alondraimagenes";


function storageAzure(req) {
    const blobName = `${Math.random().toString().replace(/0\./, '').substring(0, 3)}-${req.file.originalname}`,
        streamLength = req.file.buffer.length,
        stream = new PassThrough();
    stream.end(req.file.buffer);

    blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, err => {
        if (err) {
            console.log("tienes un error " + err)
            return;
        }})
        return `https://alondracosmetic.blob.core.windows.net/alondraimagenes/${blobName}`
}

module.exports = {
    storageAzure,
    uploadStrategy
}