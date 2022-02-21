const Hits = require("../models/Hit");

module.exports = {
createHit: async (req, res) => {
    try {
        console.log(req)
      await Hits.create({
        title: req.body.title,
        image: result.secure_url,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
      });

      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  },
}