var path = require("path");

module.exports = app => {

    app.get("/notes", function (_req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", function (_req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


};