const { index, show, create, update, destroy} = require('../controllers/blog');

module.exports = router => {
  router.get('/blogs', index);
  router.get('/blogs/:id', show);
  router.post('/blogs', create);
  router.post('/blogs/update', update);
  router.post('/blogs/destroy', destroy);
};