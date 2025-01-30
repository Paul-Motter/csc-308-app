import mongoose from "mongoose";
import userModel from "./users.js";

mongoose.set("debug", true);

mongoose
  .connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

function getUsers(name, job) {
  let promise;
  if (name === undefined && job === undefined) {
    promise = userModel.find();
  } else if (name && !job) {
    promise = findUserByName(name);
  } else if (job && !name) {
    promise = findUserByJob(job);
  } else if (name && job) {
    promise = findUserByNameAndJob(name, job);
  }
  return promise;
}

function findUserByJob(job) {
    return userModel.find({ job: job });
}
function findUserByName(name) {
    return userModel.find({ name: name });
}
function findUserByNameAndJob(name, job){
    return userModel.find({name: name, job: job});
}

function findUserById(id) {
  return userModel.findById(id);
}

function addUser(user) {
  const userToAdd = new userModel(user);
  const promise = userToAdd.save();
  return promise;
}

function removeUser(id){
    return userModel.findByIdAndDelete(id)
}

export default {
  addUser,
  removeUser,
  getUsers,
  findUserById,
  findUserByName,
  findUserByJob,
};