module.exports = (err, req, res, next) => {
    console.error('에러 발생:', err);
    res.status(400).json({ error: err.message || '에러 발생' });
};