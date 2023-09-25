const express = require('express');
const router = express.Router();
const path = require('path');
const { upload } = require('./config/multer');
const Image = require('./Models/Image');
const { UPLOADS_FOLDER, IMAGE_FIELD_NAME } = require('./common/const/upload');

router.post('/upload', upload.single(IMAGE_FIELD_NAME), (req, res, next) => {
  if (!req.file) {
    return next(new Error('파일이 업로드되지 않았습니다'));
  }
  const imagePath = '/images/' + req.file.filename;
  Image.create({ imagePath })
    .then(savedImage => {
      console.log('이미지 저장 완료:', savedImage);
      res.status(200).json({ imagePath });
    })
    .catch(next);
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = router;
