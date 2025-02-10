import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const activeChain = {
  chainId: 11155111,
  rpc: ["https://rpc.ankr.com/eth_sepolia"], 
  nativeCurrency: { name: "Sepolia ETH", symbol: "ETH", decimals: 18 },
  shortName: "sepolia",
  slug: "sepolia",
  testnet: true,
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider  supportedChains={[activeChain]} desiredChainId={11155111}> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)