import './App.css';
import {useEffect} from 'react'
import Web3 from 'web3';

function App() {
  const providerUrl = process.env.PROVIDER_URL || "https://localhost:8545";

  useEffect(() => {
    const web3 = new Web3(providerUrl)

    let provider = window.ethereum;

    if(typeof provider !== 'undefined'){
      // Metamask is installed

      provider.request({method: 'eth_requestAccounts'}).then(accounts =>{
        console.log(accounts)
      }).catch(err=>{
        console.log(err)
      })
    }
  }, [])

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
