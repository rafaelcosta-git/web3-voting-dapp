# 🗳️ Web3 Voting DApp

A decentralized voting application built with a modern Web3 stack, focusing on smart contract design, wallet authentication, and frontend–blockchain interaction.

This project simulates an on-chain voting system where users connect their wallet and submit transactions directly to a deployed smart contract.

---

## 🏗 Architecture

The application is structured in layers:

- Smart Contract Layer – Voting logic implemented in Solidity
- Blockchain Layer – Deployed to a testnet environment
- Frontend Layer – React + TypeScript interface
- Web3 Integration Layer – Wagmi for contract interaction and state handling
- Wallet Provider – MetaMask for authentication and transaction signing

The project emphasizes clear separation between UI logic and blockchain communication.

---

## 🚀 Tech Stack

- Solidity – Smart contract development
- React 18 + TypeScript – Frontend
- Vite – Build tooling
- Wagmi – Ethereum hooks & contract integration
- MetaMask – Wallet authentication
- BNB Testnet (or specify the network used)

---

## ✨ Core Features

- Wallet connection & authentication
- Smart contract read/write interaction
- On-chain vote submission
- Transaction status handling
- Modular frontend structure

---

## 📂 Project Structure

src/
 ├── ABI.json        # Smart contract ABI
 ├── wagmi.ts        # Web3 configuration
 ├── App.tsx         # Application root
 ├── Login.tsx       # Wallet connection logic
 ├── Vote.tsx        # Voting component

The contract ABI is isolated to maintain contract abstraction and simplify future updates.

---

## ⚙️ Local Development

Clone the repository:

git clone https://github.com/rafaelcosta-git/your-repo.git

Install dependencies:

npm install

Run the development server:

npm run dev

---

## 🔗 Smart Contract

Voting logic implemented in Solidity and deployed to a test network.

Contract Address:  
(add deployed contract address here)

---

## 🎯 Engineering Focus

This project was developed with emphasis on:

- Practical smart contract integration
- Frontend–blockchain state synchronization
- Clean code structure
- Web3 UX patterns
- Scalable application design

---

## 📈 Future Improvements

- Event-based vote tracking
- Contract validation improvements
- Gas optimization
- Multi-network support
- Production deployment pipeline

---

## 👨‍💻 Author

Rafael Costa  
Full Stack Developer | Web3 Builder  
Focused on building practical solutions with JavaScript, PHP, MySQL and Blockchain technologies.

---

## 📜 License

Educational and experimental project.
