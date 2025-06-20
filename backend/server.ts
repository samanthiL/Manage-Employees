import express from 'express';

const app = express();



app.get('/api', (req,res) => {
  res.json({ fruits :["apple","orange","banana"]});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
