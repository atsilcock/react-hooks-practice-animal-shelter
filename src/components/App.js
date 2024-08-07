import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  //console.log(pets)
  const [filters, setFilters] = useState({ type: "all" });
  //console.log(filters)

  function onChangeType(event){
    setFilters({type: event.target.value})
  }

  function onFindPetsClick() {
    const { type } = filters
    let url = "http://localhost:3001/pets"

    if( type !== "all") {
      url = `http://localhost:3001/pets?type=${filters.type}`
    }

    fetch(url)
    .then((res) => res.json())
    .then(pet => setPets(pet))
  }
 

  function onAdoptPet(id){
    const upDatedPets= pets.map((pet) => {
      if (pet.id === id) {
        pet.isAdopted = true
        return pet
      } else{
        return pet
      }
  })
  setPets(upDatedPets)
}
  // const handleAllPets = pets.filter((pet) => console.log(pet.type === filters.type) )



  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters filters={filters} onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;