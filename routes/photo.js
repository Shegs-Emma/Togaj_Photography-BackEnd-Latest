const express       = require('express'),
    router          = express.Router();

const photoCtrl = require('../controllers/photo');
const auth = require('../middleware/auth');

//===================GET A PHOTOGRAPH==================
router.get('/', photoCtrl.fetchPhotos);

//==================POST A PHOTOGRAPH================================
router.post('/', auth, photoCtrl.postPhotos);

//==================DELETE A PHOTOGRAPH================================
router.delete('/:id', photoCtrl.deletePhoto);

module.exports = router;