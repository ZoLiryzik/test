const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/addReview', (req, res) => {
    const newReview = req.body;
    
    fs.readFile('reviews.json', (err, data) => {
        if (err) throw err;
        
        const reviews = JSON.parse(data);
        reviews.reviews.push(newReview);
        
        fs.writeFile('reviews.json', JSON.stringify(reviews), (err) => {
            if (err) throw err;
            res.status(201).send('Review added');
        });
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));
