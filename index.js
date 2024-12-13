const express = require("express");

app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
