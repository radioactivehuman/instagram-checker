const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.post('/submitForm', (req, res) => {
    const { name, email } = req.body;

    // Log the filled information to the server terminal
    console.log('Name:', name);
    console.log('Email:', email);

    // Send a response to the client
    res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
