module.exports = {

  getAllProducts: function(req, res, next) {
      let db = req.app.get('db');
      db.get_all_products()
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      res.send('Error, originates from sc.getAllProducts: ', error)
    })
  }, 

  getSingleProduct: function(req, res, next) {
      let db = req.app.get('db');
      console.log(req.params);
      let {id} = req.params;
      db.get_single_product(id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.send('Error, originates from sc.getSingleProduct: ', error)
    })
  }



}