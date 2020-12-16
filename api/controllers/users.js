const User = require('../models/user');
const querystring = require('querystring');
const jwt = require('jsonwebtoken');
exports.index = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const data  = jwt.decode(req.query.secret_token);
    const id=data.user._id;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  console.log(req.body);
  try {
    const { 
      name,
      email,
      emailConfirmation,
      password,
      passwordConfirmation
    } = req.body;

    const user = await User.register({
      name,
      email,
      emailConfirmation,
      passwordConfirmation,
      password
    }, password);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { 
      name,
      email,
      emailConfirmation,
      password,
      passwordConfirmation,
      secret_token
    } = req.body;
   // const {email : userEmail}=req.user;
    const data  = jwt.decode(secret_token);
    const id=data.user._id;
    
    
    const user = await User.findById(id);
    user.name=name;
    user.email=email;
    user.emailConfirmation=emailConfirmation;
    if(password && passwordConfirmation){
      user.password=password;
      user.passwordConfirmation=passwordConfirmation;
    }
    //await user.validate();

    if(password) await user.setPassword(password);
    await user.save({ validateBeforeSave:false});

    const body={_id:user._id,email:user.email};
    const token=jwt.sign({user:body},'any salty secret here');
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error);
  }
};
