const { connect } = require("mongoose");

module.exports = function () {
    connect("mongodb://localhost/shona", (err) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log("mongodb connected successfully");
    });
}