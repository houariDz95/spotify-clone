import React from 'react'
import weth from '../assets/weth.png'
import './collectionCard.css'

function CollectionCard({id, name, traits, image, punk, setSelectedPunk}) {
  
  return (
    <div className="collectionCard" onClick={() => setSelectedPunk(parseInt(punk.metadata.id._hex))}>
        <img src={image} alt="" />
        <div className="details">
        <div className="name">
            {name} <div className="id"> .#{id}</div>
        </div>
        <div className="priceContainer">
            <img className="wethImage" src={weth} alt="" />
            <div className="price">{traits}</div>
        </div>
        </div>
    </div>
  )
}

export default CollectionCard;