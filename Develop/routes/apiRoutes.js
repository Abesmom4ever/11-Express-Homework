const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

router.post("/notes", (req, res) => {
    const current = fs.readFileSync(path.join(process.cwd(), "/db/db.json"));

    const newSaves = [
        ...current,
        { title: req.body.title, text: req.body.text, id: uuid() },
    ];

    fs.writeFileSync(path.join(process.cwd(), "/db/db.json"), newSaves);
});
