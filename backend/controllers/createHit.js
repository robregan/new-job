// import {useNavigate} from 'react-router-dom';
const Hits = require("../models/Hit");
// import {toast} from 'react-toastify'

module.exports = {
createHit: async (req, res) => {
    const url = 'localhost:5000/create-hit'
    // const navigate = useNavigate()
    // try {
     await fetch(url).then(data => data.json())

   console.log(req)
   console.log(data)
    //   await Hits.create({
    //     title: req.body.title,
    //     image: result.secure_url,
    //     caption: req.body.caption,
    //     likes: 0,
    //     user: req.user.id,
    //   });

    //   console.log("Post has been added!");
    //   navigate('/hits')
    // } catch (err) {
    //   console.log(err);
    //   res.redirect("/");
    // }
  },
}