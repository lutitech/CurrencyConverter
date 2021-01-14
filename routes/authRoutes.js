const authController = require('../controllers/authController');

const authRoute = (router) => {
    router.route('/signup')
      .post(authController.signup);
  
    router.route('/login')
      .post(authController.login);
  
    router.route('/logout')
      .get((req, res) => {
        res.render('index', { title: 'You have logged out' });
      })
    }
  
  module.exports = authRoute;
  