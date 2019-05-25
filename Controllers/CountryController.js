const User = require('../Models/User');
const Country = require('../Models/Country');

exports.getCountries = (req, res, next) => {
    Country.find().then(countries => {
       res.status(200).json({
        countries: ['hey', 'there'],  
        userType: 'admin' 
       });     
    })
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    });
};


exports.postCountry = (req, res, next) => {
    const countryName = req.body.countryName;

    const country = new Country({
        title: countryName
    });

    country.save().then(result => {
       res.status(201).json({
        country: result,   
        message: 'Country Created Successfully !'
       });     
    })
    .catch(err => {
        if(!err.statusCode){
        err.statusCode=500;   
        }
        next(err);
      });
};

exports.deleteCountry = (req, res, next) => {
    const countryId = req.body.countryId;    
    
       Country.deleteOne({_id: countryId})
       .then(() => {
            res.json({
                    message: "Deletion Successfull"
                });
            }
       )
        .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
    };
       
        
      exports.editCountry = (req, res, next) => {
        const countryId = req.body.countryId;    
        const updatedTitle = req.body.countryName;
        
           Country.findById(countryId)
           .then((country) => {
                country.title = updatedTitle
                country.save().then(result => {
                    res.json({
                        country: result,
                        message: "Updation Successfull"
                    });
                })
           })
           .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
          });

    };



