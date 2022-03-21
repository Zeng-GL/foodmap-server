const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (e) {
    res.json({ message: e });
  }
});

// get specific post
router.get("/:postId", async (req, res) => {
  // console.log(req.params.postId);
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (e) {
    res.json({ message: e });
  }
});

// submit a post
router.post("/", async (req, res) => {
  // console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (e) {
    res.json({ message: e });
  }
});

// edit a post
router.patch("/:postId", async (req, res) => {
  try {
    const editedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      }
    );
    res.json(editedPost);
  } catch (e) {
    res.json({ message: e });
  }
});

// delete post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({
      _id: req.params.postId,
    });
    res.json(removedPost);
  } catch (e) {
    res.json({ message: e });
  }
});

module.exports = router;
