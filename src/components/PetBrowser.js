import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  console.log(pets)
  return <div className="ui cards"> 
    {pets.map(pet =>  <Pet onAdoptPet={onAdoptPet} pet={pet} key={pet.id}/>)}
  
  </div>;
}

export default PetBrowser;