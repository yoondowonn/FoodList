const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

app.get("/api/recipes", async (req, res) => {
  try {
    const { data } = await axios.get("https://api.edamam.com/api/recipes/v2", {
      params: {
        type: "public",
        q: req.query.q,
        app_id: "YOUR_APP_ID",
        app_key: "YOUR_APP_KEY",
        imageSize: "REGULAR",
        from: "0",
        to: "20",
      },
    });
    res.json(data);
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    res.status(500).send("Server Error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
