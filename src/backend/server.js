const express = require('express');
const app = express();
const port = 4340;

app.get('/suggestedProducts', (req, res) => {
    res.status(200).json({
        suggestedProducts: ["Apples", "Grapes", "Bananas"]
    })
})

app.listen(port, () => console.log(`server listening on port ${port}`));