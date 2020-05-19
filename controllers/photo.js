const Photo = require('../models/photo');

exports.fetchPhotos = (req, res) => {
    Photo.find().then(
        (photos) => {
            res.status(200).json(photos);
        }
    ).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

exports.postPhotos = (req, res, next) => {
    if(req.files === null) {
        return res.status(400).json({
            msg: 'No file uploaded'
        });
    };

    const file = req.files.file;
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if(err){
            console.log(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
    });

    const photo = new Photo({
        // photoUrl: url + '/images/' + req.file.filename,
        photoFile: file,
        imageCategory: req.body.photoDetails.imageCategory
    });

    photo.save().then(() => {
        res.status(201).json({
            message: 'Photo added successfully!'
        });
    }).catch(error => {
        res.status(400).json({
            error: error
        });
    });
}