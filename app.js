const express = require('express');
const { connectToDatabase } = require('./common/repository/database');
const { app, port } = require('./common/const/server');
const routes = require('./routes');
const path = require('path');
const errorHandler = require('./common/exceptions/errorHandler');

connectToDatabase();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});