class HomeController {
  // [GET] HOME PAGE
  index(req, res) {
    res.render("home");
  }
  chart(req, res) {
    res.render("chart");
  }
}

module.exports = new HomeController();
