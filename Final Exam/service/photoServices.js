const Photo = require("../models/photo.js");

async function createPhoto(data, ownerId) {
  console.log(data);
  const newPhoto = await Photo.create({
    ...data,
    ownerId,
  });
  return newPhoto;
}

async function getAllPhotos() {
  const photos = await Photo.find({}).populate("ownerId").lean();
  return photos;
}

async function getPhotoById(id) {
  const photo = await Photo.findById(id).populate("ownerId").lean();
  return photo;
}
async function getPhotoInstanceById(id) {
  const photo = await Photo.findById(id);
  return photo;
}

async function getComments(id) {
  const photo = await Photo.findById(id).populate("commentList").lean();
  console.log(photo);
  const comments = photo.commentList.slice();
  return comments;
}
module.exports = {
  createPhoto,
  getAllPhotos,
  getPhotoById,
  getPhotoInstanceById,
  getComments,
};
