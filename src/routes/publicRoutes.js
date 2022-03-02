const routes = require("express").Router();
const {
  createUsers,
  getUsers,
  loginUsers,
  updateUser,
  deleteUser,
  getUserRole,
  getUserSubscription,
  approveUser,
} = require("../services/User");
const {
  createMeeting,
  getMeeting,
  updateMeeting,
  deleteMeeting,
  getAllMeetings,
} = require("../services/Meeting");
const {
  createPosts,
  getPost,
  updatePosts,
  deletePosts,
} = require("../services/Posts");
const { addResult } = require("../services/Paper");
const { getDiscussions } = require("../services/Discussion");
const { loginAdmin } = require("../services/Admin");

routes.post("/users/create", (req, res) => {
  createUsers(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/users/get", (req, res) => {
  getUsers(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.post("/users/login", (req, res) => {
  loginUsers(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/users/update", (req, res) => {
  updateUser(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.delete("/users/delete/:id", (req, res) => {
  deleteUser(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/users/role/:id", (req, res) => {
  getUserRole(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/users/subscription/:id", (req, res) => {
  getUserSubscription(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.post("/meeting/create", (req, res) => {
  createMeeting(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/meeting/get", (req, res) => {
  getMeeting(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/meeting/getAll", (req, res) => {
  getAllMeetings(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/meeting/update", (req, res) => {
  updateMeeting(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.delete("/meeting/delete/:id", (req, res) => {
  deleteMeeting(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});
routes.post("/post/create", (req, res) => {
  createPosts(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/post/get", (req, res) => {
  getPost(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.patch("/post/update", (req, res) => {
  updatePosts(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.delete("/post/delete/:id", (req, res) => {
  deletePosts(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.post("/paper/results", (req, res) => {
  console.log(req.body);
  addResult(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.get("/discussions/:id", (req, res) => {
  getDiscussions(req.params, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.post("/user/approval", (req, res) => {
  approveUser(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

routes.post("/admin/login", (req, res) => {
  loginAdmin(req.body, (result) => {
    res.status(result.statusCode).send(result.body);
  });
});

module.exports = routes;
