const { getCubeByIdAndPop } = require("../services/cubeServices.js");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const cube = await getCubeByIdAndPop(id);
  console.log(cube);

  const accessories = [
    {
      _id: "asd123",
      name: "Some fancy accessory",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61J8UP8pySL._SX425_.jpg",
      description: "This is very cute accessory, panda look alike",
      cubesId: ["dsa123"],
    },
  ];
  res.render("details", { cube, accessories });
});
module.exports = router;
