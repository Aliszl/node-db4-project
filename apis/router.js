const express = require("express");
const helpers = require("../data/db");

const router = express.Router();


router.get("/api/recipes/", async (req, res) => {
  const posts = await server.find();
  res.status(200).json({ posts });
});

// router.get("/api/recipes/:id", async (req, res) => {
//   const { id } = req.params;
//   helpers
//     .findById(id)
//     .then(post => {
//       if (!post) {
//         res.status(404).json({ message: "No post with id " + id });
//       } else {
//         res.status(200).json(post);
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// router.post("/api/posts", async (req, res) => {
//   const payload = req.body;
//   helpers
//     .insert(payload)
//     .then(post => {
//       if (!post) {
//         res
//           .staus(400)
//           .json({
//             errorMessage: "Please provide title and contents for the post"
//           });
//       } else {
//         res.status(201).json(payload);
//       }
//     })
//     .catch(error => {
//       console.log(error);
//       res.end();
//       res.status(500).json({
//         error: "could not add post"
//       });
//     });
// });

// router.delete("/api/posts/:id", async (req, res) => {
//   const { id } = req.params;
//   const deletedPosts =[];

//   helpers.findById(id).then(post =>{
//     deletedPosts.push(post);
//     res.status(200).json(post);
//   })

//   helpers
//     .remove(id)
//     .then(post => {
//       if (!post) {
//         res
//           .status(404)
//           .json({ message: "The post with the specified ID does not exist." });
//       } else {
//         res.status(204).json({ message: "Removed " });
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });


//   const { id } = req.params;
//   const payload = req.body;
//   helpers
//     .update(id, payload)
//     .then(post => {
//       if (!post) {
//         res
//           .status(404)
//           .json({ message: "Please provide title and contents for the post" });
//       } else if (!id) {
//         res
//           .status(400)
//           .json({ message: "The post with the specified ID does not exist." });
//       } else {
//         res.status(200).json(payload);
//       }
//     })
//     .catch(error => {
//       res.status(500).json({
//         error: "could not update post"
//       });
//     });
// });


// router.get("/api/posts/:id/comments", async (req, res) => {
//   const { id } = req.params;
//   const comments = await helpers.findPostComments(id);
//   helpers
//     .findPostComments(Number(id))
//     .then(post => {
//       if (!post) {
//         res
//           .status(404)
//           .json({ message: "No comments associated with that post id " });
//       } else {
//         res.status(200).json(comments);
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// | POST   | /api/posts/:id/comments | Creates a comment for the post with the specified id using information sent inside of the `request body`.
// router.post("/api/posts/:id/comments ", async (req, res) => {
//   const { id } = req.params;
//   const payload = req.body;
//   helpers
//     .insertComment(payload)
//     .then(comment => {
//       if (!comment) {
//         res
//           .staus(404)
//           .json({
//             message: "The post with the specified ID does not exist."
//           });
//       } else {
//         res.status(201).json(payload);
//       }
//     })
//     .catch(error => {
//       console.log(error);
//       res.end();
//       res.status(500).json({
//         error: "could not add comment"
//       });
//     });
// });

module.exports = router;
