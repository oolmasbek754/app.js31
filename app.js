
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.post('/data', (req, res) => {
    const data = req.body;
    res.json({
        message: 'Data received',
        data: data
    });
});

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        message: `Item ${id} updated`
    });
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        message: `Item ${id} deleted`
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
