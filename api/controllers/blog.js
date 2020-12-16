const Blog = require('../models/blog');

exports.index = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
}

exports.show = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  console.log(req.body);

  try {
    const { heading, blog } = req.body;
    const bg = await Blog.create({
      heading,
      blog,
    });
    res.status(200).json({message: 'Blog was created successfully', status: 'success', blog: bg});
  } catch (error) {
    next(error);
  }
}

exports.update = async (req, res, next) => {
  try {
    const { _id, heading, blog } = req.body;
    const bg = await Blog.findOneAndUpdate({ _id }, {
      heading,
      blog,
    });
    res.status(200).json({message: 'Blog was updated successfully', status: 'success', blog: bg});
  } catch (error) {
    next(error);
  }
}

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Blog.findOneAndDelete({ _id });
    res.status(200).json({message: 'Blog was deleted successfully', status: 'success'});
  } catch (error) {
    next(error);
  }
}

