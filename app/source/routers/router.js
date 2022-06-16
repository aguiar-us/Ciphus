const express = require('express');
const router = express.Router();

router.get('/', async (request, response) => {
    response.send("ROUTER -> /");
});

module.exports = router; 