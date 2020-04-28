const Digimon = require("../models/schema");

exports.create = (req, res) => {
    let digimon = Object.assign(req.body);
    console.log(req.body)
    const newDigimon = { ...digimon};
    if(!req.body)
        return res.status(400).send({
            message: "Digimon can't be empty"
        });

        return Digimon.create(newDigimon)
            .then(data => {
                res.status(201).json({
                    success: true,
                    message: "Successful",
                    data: data
                })
            })
            .catch(err => {
                res.status(400).json({
                    success: false,
                    message: err.message
                });
            });
};

exports.digimon = (req, res) => {
    Digimon.find({})
        .then(data => {
            res.status(200).json({
                success: true,
                message: "successfully",
                data:data
            })
        })
        .catch(err => {
            res.status(400).json({
                success: false,
                message: err.message
            });
        })
}


exports.delete = (req, res) => {
    Digimon.findByIdAndDelete(req.params.id)
        .then(data => {
            res.status(200).json({
                success: true,
                message: "Successfully",
                data: data
            })
        })
        .catch(err => {
            res.status(400).json({
                success: false,
                message: err.message
            })
        })

}