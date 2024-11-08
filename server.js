const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, JS)
app.use(express.static(__dirname));

app.post('/submit', (req, res) => {
  const { name, email, password } = req.body;

  // Basic server-side validation
  if (!name || !email || !password) {
    return res.send('All fields are required.');
  }

  if (password.length < 6) {
    return res.send('Password must be at least 6 characters long.');
  }

  res.send('Form submitted successfully!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
