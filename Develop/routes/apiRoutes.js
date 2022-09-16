const router = require("express").Router();
const path = require("path");
const fs = require("fs");

//
router.post("/notes", (req, res) => {
    const current = fs.readFileSync(path.join(process.cwd(), "/db/db.json"));

    const newSaves = [
        ...current,
        { title: req.body.title, text: req.body.text },
    ];

    fs.writeFile(path.join(process.cwd(), "/db/db.json"), newSaves);
});

module.exports = router;
