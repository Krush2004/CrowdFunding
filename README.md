# 🚀 Crowdfunding DApp

A decentralized crowdfunding platform built on blockchain, allowing users to create and fund campaigns transparently. 

## 🌐 Live Demo
[🔗 https://visitcrowdfunding.netlify.app/]

## 📸 Screenshots
![Home Page](<Screenshot 2025-02-17 at 12.30.30 PM.png>)
![All Campaigns](<Screenshot 2025-02-17 at 1.18.59 PM.png>)
![create campaign](<Screenshot 2025-02-17 at 12.31.22 PM.png>)
![contact us](<Screenshot 2025-02-17 at 1.48.22 PM.png>)

---

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS
- **Blockchain**: Solidity, Hardhat
- **Wallet Integration**: MetaMask
- **Backend**: Node.js 
- **Smart Contract Interaction**: Ethers.js

---

## ✅ Prerequisites
Before running the project, ensure you have:
- **Node.js** installed
- **Metamask** browser extension set up
- **Sepolia Testnet** for local blockchain 

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
 git clone https://github.com/AmandeepGuggi/CrowdFunding.git
 cd crowdfunding
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 4️⃣ Set Up Client Credentials
In `client.jsx`, set your own client ID and secret key:
```javascript
const clientId = "your_client_id";
const secretKey = "your_secret_key";


> **Note**: This project is currently working with my deployed smart contract. If you want to use your own smart contract, replace smart contract address as followed :

### 5️⃣ Set Up Smart Contract Address
In `src/context/index.jsx`, set your own smart contract address:
```javascript
  const { contract } = useContract('your_smart_contract_address');
```
> The smart contract used in this project is available in the **newContract** repository. Please refer to that repo if you need to modify or deploy your own contract.

### 4️⃣ Start the Development Server
```bash
npm run dev
```
> The project should now be running on `http://localhost:5137`

---



## 💡 Features
- 🏗️ Create & manage crowdfunding campaigns
- 💰 Accept funding from users
- 🔗 Transparent transactions on the blockchain
- 🔥 Instant wallet connection using MetaMask

---

## 🤝 Contributing
Pull requests are welcome! If you find a bug or have a feature request, feel free to open an issue.

---

