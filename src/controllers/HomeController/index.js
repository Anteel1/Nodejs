class HomeController {
  // [GET] HOME PAGE
  index(req, res) {
    res.render("home");
  }
}

module.exports = new HomeController();
