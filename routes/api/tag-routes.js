const router = require("express").Router();
const {Tag, Product, ProductTag} = require("../../models");

router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if (!tagData) {
      return res.status(404).json({message: "No Tag found with that id!"});
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (tagData[0] === 0) {
      return res.status(404).json({message: "No Tag found with that id!"});
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      return res.status(404).json({message: "No Tag found with that id!"});
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

//This code sets up a router in an Express.js application to handle CRUD operations for tags.
// It provides endpoints for retrieving all tags, retrieving a specific tag by its ID, creating a new tag, updating an existing tag, and deleting a tag.
//The code interacts with the database models Tag, Product, and ProductTag to perform these operations.
