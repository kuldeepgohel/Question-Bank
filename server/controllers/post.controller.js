import postModel from "../models/post.model.js";

const createPost = async (req, res, next) => {
  try {
    const { topic, question, answer } = req.body;
    const responseData = await postModel.create({
      topic,
      question,
      answer,
    });
    res.send({
      succsess: true,
      responseData,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllPost = async (req, res, next) => {
  try {
    const responseData = await postModel.find();
    res.send({
      succsess: true,
      responseData,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSinglePost = async (req, res, next) => {
  try {
    const { postID } = req.query;
    if(!postID || postID === "undefined" ){
      return res.status(400).send({
        message: "Post id is not provided",
        success: false
      })
    }
    const responseData = await postModel.findById(postID);
    res.send({
      succsess: true,
      responseData,
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { postID } = req.body;
    const responseData = await postModel.findByIdAndDelete(postID);
    res.send({
      succsess: true,
      responseData,
    });
  } catch (error) {
    console.log(error);
  }
};
const updatePost = async (req, res, next) => {
  try {
    const { topic, question, answer, postID } = req.body;
    const responseData = await postModel.findByIdAndUpdate(
      postID,
      {
        topic,
        question,
        answer,
      },
      { new: true }
    );
    res.send({
      succsess: true,
      responseData,
    });
  } catch (error) {
    console.log(error);
  }
};

export { createPost, getAllPost, getSinglePost, deletePost , updatePost };
