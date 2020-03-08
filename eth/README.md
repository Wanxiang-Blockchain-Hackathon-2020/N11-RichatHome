# Ethereum Smart Contracts for Rich At Home Project

## Pre-requisite

### Check Solc Version

`solc --version`
> should be >=0.5.0 and <0.5.1

### To Install Truffle

`npm install -g truffle`

> For development environment, you should run a Etherum client ([ganache-cli](https://www.trufflesuite.com/ganache), geth or parity) locally


## Build

`truffle compile`

## Deploy

`truffle migrate`

## Contracts Interactions Flow

```
    Agent Contracts
    ├── contracts
    │   ├── AgentBuilder.sol
    │   ├── Owned.sol
    │   ├── AgentTask.sol
    │   ├── Migrations.sol
    ├── migrations  
       ...
    └── truffle-config.js
```

![contracts diagram](https://github.com/Wanxiang-Blockchain-Hackathon-2020/N11-RichatHome/blob/master/docs/images/contracts-diagram.png)
![activity diagram](https://github.com/Wanxiang-Blockchain-Hackathon-2020/N11-RichatHome/blob/master/docs/images/activity-diagram.png)
