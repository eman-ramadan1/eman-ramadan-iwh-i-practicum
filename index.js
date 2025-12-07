const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");

const CUSTOM_OBJECT_TYPE = "2-195536657"; 

const headers = {
  Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
  "Content-Type": "application/json",
};

//  Homepage Route
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.hubapi.com/crm/v3/objects/${CUSTOM_OBJECT_TYPE}?properties=name,age,type`,
      { headers }
    );

    res.render("homepage", {
      title: "My Custom Object Table",
      records: response.data.results,
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.send("Error loading homepage data.");
  }
});

// GET Form Route
app.get("/update-cobj", (req, res) => {
  res.render("updates", {
    title: "Add Custom Object",
  });
});

// POST Route
app.post("/update-cobj", async (req, res) => {
  const { name, age, type } = req.body;

  try {
    await axios.post(
      `https://api.hubapi.com/crm/v3/objects/${CUSTOM_OBJECT_TYPE}`,
      {
        properties: {
          name,
          age,
          type,
        },
      },
      { headers }
    );

    res.redirect("/");
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.send("Error creating record.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
