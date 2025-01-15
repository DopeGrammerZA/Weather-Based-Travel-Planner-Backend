const express = require('express');
const favouriteController = require('../controllers/favouriteController');
const router = express.Router();

router.post('/save', favouriteController.saveFavourite);
router.get('/favourites/:email', favouriteController.getFavourites);
router.delete('/delete', favouriteController.deleteFavourite);

module.exports = router;
