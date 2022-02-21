// import {useNavigate} from 'react-router-dom';
const Hits = require("../models/Hit");
// import {toast} from 'react-toastify'

module.exports = {
createHit: async (req, res) => {
    // const navigate = useNavigate()
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
      navigate('/hits')
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  },
}