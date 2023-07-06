const { postServices } = require('../services');

const getPost = async (req, res) => {
  const { type, data } = await postServices.getPosts();

  return res.status(type).json(data);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { type, data } = await postServices
    .getPostById(Number(id));

  return res.status(type).json(data);
};

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const { type, data } = await postServices.postPost({ title, content, userId: id, categoryIds });

  return res.status(type).json(data);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const { title, content } = req.body;

  const { type, data } = await postServices
    .putPost({ id, title, content, userId });

  return res.status(type).json(data);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const { type, data } = await postServices
    .deletePost({ id, userId });

  return res.status(type).json(data);
};

const searchPost = async (req, res) => {
  const { q: searchTerm } = req.query;

  const { type, data } = await postServices
    .searchPost(searchTerm);

  return res.status(type).json(data);
};

module.exports = {
  getPost,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  searchPost,
};