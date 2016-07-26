"use strict";
const express = require('express');
const app = express();
const colors = require('colors');
app.use(express.static('.'));

app.listen(8080, () => {
  console.log(`
    ⭐️ ${"http://localhost:8080/".underline}
`);
});