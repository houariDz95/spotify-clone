import React, {useEffect, useState} from 'react';
import './main.css';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';
function Main({selectedPunk, punks}) {
    const [activePunk, setActivePunk] = useState([]);
    useEffect(() => {
        setActivePunk(punks[selectedPunk])
    }, [punks, selectedPunk])
    console.log(activePunk)
  return (
    <div className="main">
        <div className="mainContent">
            <div className="punkHeightLight">
                <div className="punkContainer">
                    <img className="selectedPunk" src={activePunk.metadata.image} alt="" />
                </div>
            </div>
                <div className="punkDetails" style={{color: '#fff'}}>
                    <div className="title">
                        <h1>{activePunk.metadata.name}</h1>
                        <div className="itemNumber">#{activePunk.metadata.id._hex}</div>
                    </div>
                    <div className="owner">
                        <div className="ownerImageContainer">
                            <img src="https://gateway.ipfscdn.io/ipfs/QmRdEtZXAXBkpLxXnQ8CCcbsZFB5iMG2ydnqFZXhemvWj6/0.png" alt ="" />
                        </div>
                        <div className="ownerDetails">
                            <div className="ownerNameAndHandle">
                                <div style={{color: "white"}}>{activePunk.owner}</div>
                                <div className="ownerHandle">@eddHouariDev</div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="ownerLinks">
                <div className="ownerLlink">
                    <img src={instagramLogo} alt="" />
                </div>
                <div className="ownerLlink">
                  <img src={twitterLogo} alt="" />
                </div>
                <div className="ownerLlink">
                  <img src={moreIcon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main