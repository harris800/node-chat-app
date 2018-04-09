const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     // res.send('<h1>Hello Express!</h1>');
//     res.render('index.html');
// });
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
