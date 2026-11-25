# Web3 Voting DApp

A decentralized on-chain voting application built with React, TypeScript, Vite, and Wagmi, connected to a Solidity smart contract deployed on **BNB Smart Chain Testnet**.

Users authenticate with MetaMask, inspect the active voting round (`option1`, `option2`, vote counts, and deadline), and submit votes directly on-chain.

---

## Architecture

- **Smart Contract Layer:** Voting state and `addVote` / `getCurrentVoting` logic in Solidity (`src/ABI.json`)
- **Blockchain Network:** BNB Smart Chain Testnet (`bscTestnet` configured in `src/wagmi.ts`)
- **Web3 Integration:** Wagmi + Viem + TanStack React Query for wallet connection and contract read/write calls
- **Frontend Layer:** React 18 + TypeScript + Vite

---

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Web3:** Wagmi, Viem, MetaMask
- **Network:** BNB Smart Chain Testnet (`bscTestnet`)
- **Language:** Solidity (Smart Contract)

---

## Smart Contract Details

- **Network:** BNB Smart Chain Testnet
- **Contract Address:** `0x5d91bD86CB6b39a9c4f7a61a2b167EbBd5728227`
- **Main ABI Functions:**
  - `getCurrentVoting()` — returns `option1`, `votes1`, `option2`, `votes2`, and `maxDate`
  - `addVote(uint256 choice)` — records a vote for option `1` or `2`
  - `addVoting(string option1, string option2, uint256 timeVotes)` — creates a new voting round (owner)
  - `votes(uint256, address)` — tracks votes per round and wallet address

---

## Project Structure

```text
src/
├── ABI.json        # Smart contract ABI
├── wagmi.ts        # Wagmi configuration (bscTestnet)
├── App.tsx         # Application root (Login / Vote switch)
├── Login.tsx       # MetaMask wallet connection
├── Vote.tsx        # On-chain voting UI & contract read/write
└── main.tsx        # React & Wagmi/React Query providers
```

---

## Local Development

```bash
git clone https://github.com/rafaelcosta-git/web3-voting-dapp.git
cd web3-voting-dapp
npm install
npm run dev
```

Make sure MetaMask is installed and switched to **BNB Smart Chain Testnet** before casting a vote.

---

## Author

**Rafael Costa**  
GitHub: [@rafaelcosta-git](https://github.com/rafaelcosta-git) · LinkedIn: [Rafael Costa](https://www.linkedin.com/in/rafael-costa-950a80321)
