import React from "react";

function Pet({ onAdoptPet, pet}) {
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {(pet.gender !== "male" ? '♀' : '♂' )}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted  ? <button className={pet.isAdopted ? "ui disabled button" :"ui primary button" }  >Already adopted</button> : <button className={pet.isAdopted ?  "ui disabled button": "ui primary button"} onClick={()=>onAdoptPet(pet.id)}>Adopt pet</button>}

      </div>
    </div>
    
  );
}

export default Pet;