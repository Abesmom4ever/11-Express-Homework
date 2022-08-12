const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//Will serve the homepage
// router.get()

module.exports = router;
