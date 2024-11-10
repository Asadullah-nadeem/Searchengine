const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    const query = req.query.q || '';  // Search query from the URL
    const results = [];
        res.render('index', { results, query });
   });
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
