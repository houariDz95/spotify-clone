import React, {useState, useEffect}  from 'react'
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import './App.css';
import PunkList from './components/PunkList';
import Header from './components/Header';
import Main from './components/Main'
function App() {
  const [selectedPunk, setSelectedPunk] = useState(0);
  const [punks, setPunks] = useState([]);
  useEffect(() => {
      async function getData() {
          const sdk = new ThirdwebSDK("rinkeby");
          const contract = sdk.getNFTCollection("0xCf1dbdCD7DfEe1b53217d6186f32E7Eb1740A715");
          const result = await contract.getAll()
                setPunks(result) 
                setSelectedPunk(5)
        }
        getData()
  }, [])
  return (
    <div className="app">
      <Header />
      <Main selectedPunk={selectedPunk} punks={punks} />
      <PunkList setSelectedPunk={setSelectedPunk} punks={punks} />
    </div>
  );
}

export default App;
