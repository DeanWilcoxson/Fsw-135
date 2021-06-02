const express = require("express");
const router = express.Router();
const Comment = require("../models/comment.js");

router.get("/", (req, res, next) => {
  Comment.find((err, comments) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(comments);
  });
});

router.get("/issue/:issueID", (req, res, next) => {
  console.log(req.params.issueID)
  console.log("router")
  Comment.find({ issueId: req.params.issueID }, (err, comment) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(comment);
  });
});

router.post("/", (req, res, next) => {
  const newComment = new Comment(req.body);
  newComment.save((err, savedComment) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedComment);
  });
});

router.delete("/:commentID", (req, res, next) => {
  Comment.findOneAndDelete(
    { _id: req.params.commentID },
    (err, deletedItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res
        .status(200)
        .send(`Successfully deleted item ${deletedItem._id} from the database`);
    }
  );
});

router.put("/:commentID", (req, res, next) => {
  Comment.findOneAndUpdate(
    { _id: req.params.commentID },
    req.body,
    { new: true },
    (err, updatedComment) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedComment);
    }
  );
});

module.exports = router;
