const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection('users').find();
  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDatabase().db().collection('users').find({ _id: userId });
  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(users[0]);
  });
};


const createUser = async (req, res) => {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favouriteColor: req.body.favouriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongodb.getDatabase().db().collection('users').insertOne(user);
  if (response.acknowledged > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred during updating.');
  }
};


const updateUser = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favouriteColor: req.body.favouriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongodb.getDatabase().db().collection('users').replaceOne({ _id: userId});
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred during updating.');
  }
};

const deleteUser = async (req, res) =>{
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDatabase().db().collection('users').deleteOne({ _id: userId});
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred during updating.');
  }
}

module.exports = {
  getAll,
  getSingle,
  createUser,
  updateUser,
  deleteUser,
};