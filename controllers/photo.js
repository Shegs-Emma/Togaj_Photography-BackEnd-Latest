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
    const imageCategory = req.body.imageCategory;
    
    file.mv(`C:/Users/user/Documents/My_React_Express_Project/Togaj_Photography/client/public/uploads/${file.name}`, err => {
        if(err){
            console.log(err);
            return res.status(500).send(err);
        }
        const photo = new Photo({
            photoUrl: `/uploads/${file.name}`,
            imageCategory: imageCategory
        });
        photo.save();
        res.status(201).json({ 
            fileName: file.name, 
            filePath: `/uploads/${file.name}`, 
            imageCategory: imageCategory });
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