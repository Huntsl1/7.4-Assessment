const Antique = require('../models/antiques');

module.exports = {
  list: function(req,res) {
    Antique.find().then(results => {
      res.render('antique/list', {model: results});
    });
  }


};
