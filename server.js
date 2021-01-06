app.use(express.static('./dist/hdya-front'));

app.get('*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/hdya-front/' });
});

app.listen(process.env.PORT || 8080);