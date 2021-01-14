const User = require('../models/user');




exports.signup = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({email})
      if(user){
          return res.status(401).json({
            status: "error",
            message: "User Already Exist",
            data:[]

          })
      }
      const newUser = new User({ email, password });
      await newUser.save();
      
      res.status(201).json({
        status: 'success',
        message: 'signup successfully',
        data: { ...newUser }
      });
    } catch (error) {
      return res.status(401).json({
        status: 'error',
        message: error.message.toString(),
        data: []
      });
    }
};
  

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({
          status: 'error',
          message: 'Email does not exist',
          data: []
        });
      }
     /**  const validPassword = await validatePassword(password, user.password);
      if (!validPassword) {
        return res.status(401).json({
          status: 'error',
          message: 'invalid credentials',
          data: []
        });
      }
     */
      await User.findByIdAndUpdate(user._id);
      const data = { ...user._doc };
      delete data.password;
      res.status(200).json({
        status: 'success',
        message: 'login successfully',
        data
      });
    } catch (error) {
      return res.status(401).json({
        status: 'error',
        message: error.message.toString(),
        data: []
      });
    }
  };