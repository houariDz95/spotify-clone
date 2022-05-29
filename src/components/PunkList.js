import React from 'react'
import CollectionCard from './CollectionCard';
import './punkList.css';

function PunkList({ punks, setSelectedPunk }) {

  return (
    <div className="punkList" >
        {
        punks.map(punk => (
          <CollectionCard
            setSelectedPunk={setSelectedPunk} 
            punk={punk}
            image={punk.metadata.image}
            name={punk.metadata.name}
            id={punk.metadata.id._hex}
            key={punk.metadata.id._hex}
            traits={punk.metadata.attributes[0].value}
          />
        ))
      }

    </div>
  )
}

export default PunkList