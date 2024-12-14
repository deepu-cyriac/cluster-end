const express = require("express");
require("dotenv").config();

app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
