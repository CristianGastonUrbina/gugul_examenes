function recuerdame(req, res, next) {
  if (req.body.recuerdame != null) {
    res.redirect("/users/" + req.cookies.recuerdame);
  }

  next();
}
module.exports = recuerdame;
