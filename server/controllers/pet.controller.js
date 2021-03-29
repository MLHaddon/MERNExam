const { Pets } = require('../models/pet.model');

module.exports = {
  allPets: (req, res) => {
    Pets.find({}).sort({type: "asc"})
      .then(pet => res.json(pet))
      .catch(err => res.status(400).json(err));
  },
  newPet: (req, res) => {
    const {name, type, desc, skillOne, skillTwo, skillThree} = req.body;
    Pets.create({
      name, 
      type, 
      desc, 
      skillOne, 
      skillTwo, 
      skillThree
    })
      .then(new_pet => res.json(new_pet))
      .catch(err => res.status(400).json(err));
  },
  onePet: (req, res) => {
    Pets.findOne({_id: req.params.id})
      .then(pet => res.json(pet))
      .catch(err => res.status(400).json(err));
  },
  updatePet: (req, res) => {
    Pets.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators:true})
      .then(pet => res.json(pet))
      .catch(err => res.status(400).json(err));
  },
  deletePet: (req, res) => {
    Pets.deleteOne({_id: req.params.id})
      .then(success => res.json(success))
      .catch(err => res.status(400).json(err));
  }
}