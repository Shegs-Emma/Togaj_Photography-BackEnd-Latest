const Photo         = require('../models/photo'),
    { cloudinary }  = require('../cloudinary');

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
    const imageCategory = req.body.imageCategory;

    cloudinary.uploader.upload(file.tempFilePath, function(err, result){
        if(err){
            return res.status(500).send(err);
        }
        const photo = new Photo({
            photoUrl: result.url,
            imageCategory: imageCategory
        });

        // Saving into MongoDB here and sending response to the frontend
        photo.save();
        res.status(201).json({
            fileName: file.name,
            filePath: result.url,
            imageCategory: imageCategory
        });
    });
};

exports.deletePhoto = (req, res, next) => {
    Photo.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(error => {
        res.status(400).json({
            error: error
        });
    });
};