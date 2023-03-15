class HomeController {
  // [GET] HOME PAGE
  index(req, res) {
    res.render("ulti/home");
  }
  chart(req, res) {
    res.render("ulti/chart");
  }
}

module.exports = new HomeController();
