const   express     = require('express'),
        router      = express.Router();

const contactCtrl = require('../controllers/contact');

router.post('/', contactCtrl.postRequest);


module.exports = router;