const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        const filename = `${uuidv4()}.${extension}`;
        cb(null, filename);
    },
});

const upload = multer({ storage });

module.exports = { storage, upload };