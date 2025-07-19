

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// נקודת בדיקה
app.get('/api/hello-world', (req, res) => {
    res.send('Hello World from API!');
});

// מאזין לפורט
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // חשוב לטסטים
