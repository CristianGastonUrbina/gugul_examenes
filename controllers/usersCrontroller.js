const db = require("../database/models");
const Usuario = require("../entities/usuarios");

const UsersCrontroller = {
  showlogin: (req, res) => {
    res.render("login");
  },

  listUsers: (req, res) => {
    db.Usuarios.findByPk(req.params.id).then((usuario) => {
      res.render("user", { usuario: usuario });
    });
  },
  login: (req, res) => {
    db.Usuarios.findOne({
      where: {
        mail: req.body.mail,
        password: req.body.password,
      },
    }).then((usuario) => {
      if (usuario === null) {
        return res.redirect("login");
      } else {
        console.log(usuario.dataValues.id);
        res.cookie("recuerdame", usuario.dataValues.id);
        return res.redirect("/users/" + usuario.dataValues.id);
      }
    });
  },

  register: (req, res) => {
    res.render("register");
  },

  create: (req, res) => {
    db.Usuarios.create({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      mail: req.body.mail,
      password: req.body.password,
    })
      .then(() => {
        res.redirect("login");
      })
      .catch((err) => {
        console.error(err);
      });
  },
  createExamen: (req, res) => {
    res.render("examen");
  },
};
module.exports = UsersCrontroller;
