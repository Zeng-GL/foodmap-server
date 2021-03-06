const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

router.get("/", async (req, res) => {
  try {
    const rest = await Restaurant.find();
    res.json(rest);
  } catch (e) {
    res.json({ message: e });
  }
});

router.post("/", async (req, res) => {
  const rest = new Restaurant({
    name: req.body.name,
    lat: req.body.lat,
    lng: req.body.lng,
    location: req.body.location,
    food: req.body.food,
  });

  try {
    const savedRest = await rest.save();
    res.json(savedRest);
  } catch (e) {
    res.json({ message: e });
  }
});

router.patch("/:restId",async(req,res)=>{
  try{
    const editedRest = await Restaurant.updateOne(
      { _id:req.params.restId },
      {
        $set:{
          name: req.body.name,
          lat: req.body.lat,
          lng: req.body.lng,
          location: req.body.location,
          food: req.body.food,
        },
      }
    );
    res.json(editedRest)
  }catch (e) {
    res.json({ message: e });
  }
});

router.delete("/:restId",async(req,res)=>{
  try{
    const removedRest = await Restaurant.remove({
      _id: req.params.restId,
    });
    res.json(removedRest)
  }catch (e) {
    res.json({ message: e });
  }   
});

module.exports = router;
