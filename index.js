// represents api we're building (value is an import of the express package)
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

// start server (listens on specified port)
app.listen(
    PORT,
    () => console.log(`Server running on http://localhost:${PORT}`)
);

// Creates an endpoint to handle gets request at the specified URL
app.get('/tshirt', (req,res) => {
    // Provide status code
    res.status(200).send({
        tshirt: 'Green long tee',
        size: 'large'
    })
});

// Dynamic url for different tshirts
app.post('/tshirt/:id', (req,res) => {
    const { id } = req.params; // from request parameters
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'Please send a logo' })
    }

    res.send({
        tshirt: `T-shirt with logo: ${logo} and ID: ${id}`
    })
});