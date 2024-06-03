// server/index.js

const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
const pages = require('./data/pagesData.js');
const menus = require('./data/menuesData.js');
const forms = require('./data/formsData.js');


app.get("/pages/:pageName", (req, res) => {
  const pageName = req.params.pageName;
  const pageData = pages.find(page => page.pageName === pageName);
  res.json(pageData);
});
app.get("/menus/:menuId", (req, res) => {
  const mId = req.params.menuId;
  const menuItem = menus.filter(menu => menu.menuId === mId);
  if (menuItem) {
    res.json(menuItem); // Wrap the single menu item in an array
  } else {
    res.status(404).json({ error: "Menu item not found" });
  }
});


app.get("/forms/:pageName", (req, res) => {
  const pageName = req.params.pageName;
  const pageData = pages.find(page => page.pageName === pageName); 
  const form = forms.find(form => form.formId === pageData.formId);
  res.json({pageData, forms : form});
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


