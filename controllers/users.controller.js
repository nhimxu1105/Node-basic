const shortid = require('shortid')

var db = require('../db');

module.exports.user = (req, res) => {
   res.render('users/user', {
      users: db.get('users').value()
   });
};

module.exports.create = (req, res) => {
   res.render('users/create');
};

module.exports.search = (req, res) => {
   var q = req.query.q;
   var users = db.get('users').value();
   var filterUser = users.filter((user) => {
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
   })
   res.render('users/user', {
      users: filterUser
   })
};

module.exports.filterUser = (req, res) => {
   var id = req.params.id;
   var user = db.get('users').find({
      id: id
   }).value();
   res.render('users/view', {
      user: user
   });
};

module.exports.postCreate = (req, res) => {
   // req.body tra ve 1 object
   req.body.id = shortid.generate();
   db.get('users').push(req.body).write();
   res.redirect('/users');
};