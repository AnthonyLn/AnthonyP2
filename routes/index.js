const ContactosController = require("../controllers/ContactosController");
const contactosController = new ContactosController();

const indexControllers = require("../controllers/IndexControllers")

var express = require("express");
var router = express.Router();

router.get("/", indexControllers);

router.post("/form-contacto", contactosController.add);

module.exports = router;