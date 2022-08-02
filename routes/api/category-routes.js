const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then((categoryData) => {
    res.json(categoryData);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:category_id', (req, res) => {
  Category.destroy(
    {
      where:{
        category_id: req.params.book_id
      }
    })
    .then( results => {
      console.log(results);
      if(results === 0){
        res.status(400).json({ message: "no changes made..."});
      }
      else{
        res.json(results);
      }
    })
    .catch( error => {
      res.json(error);
    });
});

module.exports = router;
