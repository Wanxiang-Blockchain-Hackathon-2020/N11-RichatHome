export default {
    "AgentBuilder": {
        "abi": [{
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "internalType": "bytes32",
                "name": "taskId",
                "type": "bytes32"
            }, {
                "indexed": true,
                "internalType": "address",
                "name": "agentTaskAddr",
                "type": "address"
            }, {
                "indexed": true,
                "internalType": "address",
                "name": "tknAddr",
                "type": "address"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "tknAmount",
                "type": "uint256"
            }],
            "name": "Create",
            "type": "event"
        }, {
            "constant": true,
            "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "name": "agentTasks",
            "outputs": [{
                "internalType": "contract AgentTask",
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "internalType": "bytes32",
                "name": "_id",
                "type": "bytes32"
            }, {
                "internalType": "address",
                "name": "_tknAddr",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "_tknAmnt",
                "type": "uint256"
            }],
            "name": "createAgentTask",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "internalType": "bytes32",
                "name": "_id",
                "type": "bytes32"
            }, {
                "internalType": "contract AgentTask",
                "name": "_at",
                "type": "address"
            }, {
                "internalType": "uint16",
                "name": "_ver",
                "type": "uint16"
            }],
            "name": "registerAts",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "internalType": "bytes32",
                "name": "_id",
                "type": "bytes32"
            }],
            "name": "getAgentTaskInfo",
            "outputs": [{
                "internalType": "contract AgentTask",
                "name": "",
                "type": "address"
            }, {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "getDeployedAgentTaskContracts",
            "outputs": [{
                "internalType": "contract AgentTask[]",
                "name": "",
                "type": "address[]"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }],
        "bytecode": "0x608060405234801561001057600080fd5b50611a66806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632590053c1461005c57806334c16ea8146100d9578063be84283814610138578063d5624523146101ac578063fe1af6431461021a575b600080fd5b6100886004803603602081101561007257600080fd5b8101908080359060200190929190505050610272565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018261ffff1661ffff1681526020019250505060405180910390f35b6100e16102d8565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610124578082015181840152602081019050610109565b505050509050019250505060405180910390f35b6101926004803603606081101561014e57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803561ffff169060200190929190505050610366565b604051808215151515815260200191505060405180910390f35b6101d8600480360360208110156101c257600080fd5b81019080803590602001909291905050506106cf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102706004803603606081101561023057600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061070b565b005b60008060008084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008085815260200190815260200160002060010160149054906101000a900461ffff1691509150915091565b6060600180548060200260200160405190810160405280929190818152602001828054801561035c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610312575b5050505050905090565b600060018261ffff1610158015610383575061ffff8261ffff1611155b6103f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f496e76616c69642076657273696f6e2070726f7669646564210000000000000081525060200191505060405180910390fd5b6103fd610892565b6000808681526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900461ffff1661ffff1661ffff16815250509050600073ffffffffffffffffffffffffffffffffffffffff16816020015173ffffffffffffffffffffffffffffffffffffffff1614156105735760405180606001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018461ffff1681525090506105fc565b3373ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff16146105af57600080fd5b82816040019061ffff16908161ffff168152505083816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505b8060008087815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548161ffff021916908361ffff16021790555090505060019150509392505050565b600181815481106106dc57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60003384848460405161071d906108e3565b808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050604051809103906000f0801580156107b0573d6000803e3d6000fd5b50905060018190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061082584826001610366565b508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16857fb82b382b45ad593e404ed6362c02ddef1bcff582c80a0148fd40daa10e4b6a3b856040518082815260200191505060405180910390a450505050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600061ffff1681525090565b611141806108f18339019056fe608060405234801561001057600080fd5b506040516111413803806111418339818101604052608081101561003357600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610128576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806111196028913960400191505060405180910390fd5b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3306003546040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561021457600080fd5b505af1158015610228573d6000803e3d6000fd5b505050506040513d602081101561023e57600080fd5b810190808051906020019092919050505061025857600080fd5b836000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260018190555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060038190555050505050610e1f806102fa6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80639832e41b1161008c578063ac301bc511610066578063ac301bc5146102cb578063cafd2962146102f9578063f2fde38b14610347578063fd66091e1461038b576100ea565b80639832e41b146102155780639d76ea5814610233578063a9059cbb1461027d576100ea565b806341c0e1b5116100c857806341c0e1b514610175578063679ce4fd1461017f57806369522a941461019d5780638da5cb5b146101cb576100ea565b80631a39d8ef146100ef5780631bbc4b831461010d5780633322b23d14610157575b600080fd5b6100f76103e3565b6040518082815260200191505060405180910390f35b6101156103e9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61015f61040f565b6040518082815260200191505060405180910390f35b61017d610415565b005b6101876105af565b6040518082815260200191505060405180910390f35b6101c9600480360360208110156101b357600080fd5b81019080803590602001909291905050506105f6565b005b6101d3610659565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61021d61067e565b6040518082815260200191505060405180910390f35b61023b61075f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102c96004803603604081101561029357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610785565b005b6102f7600480360360208110156102e157600080fd5b810190808035906020019092919050505061093d565b005b6103456004803603604081101561030f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b5a565b005b6103896004803603602081101561035d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d36565b005b6103cd600480360360208110156103a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dd2565b6040518082815260200191505060405180910390f35b60035481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461046e57600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd30336104b661067e565b6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561055257600080fd5b505af1158015610566573d6000803e3d6000fd5b505050506040513d602081101561057c57600080fd5b810190808051906020019092919050505061059657600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16ff5b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461064f57600080fd5b8060038190555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561071f57600080fd5b505afa158015610733573d6000803e3d6000fd5b505050506040513d602081101561074957600080fd5b8101908080519060200190929190505050905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481111561083a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f496e73756666696369656e742062616c616e63652e000000000000000000000081525060200191505060405180910390fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811180156109915750808211155b61099a57600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3033856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610a7757600080fd5b505af1158015610a8b573d6000803e3d6000fd5b505050506040513d6020811015610aa157600080fd5b8101908080519060200190929190505050610abb57600080fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff167f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d4836040518082815260200191505060405180910390a25050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bb357600080fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b383836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610ca057600080fd5b505af1158015610cb4573d6000803e3d6000fd5b505050506040513d6020811015610cca57600080fd5b8101908080519060200190929190505050610ce457600080fd5b8173ffffffffffffffffffffffffffffffffffffffff167f0a88bde4e2a211a37310fd5df31718503337f2b3273d2fd054510831d9e0c937826040518082815260200191505060405180910390a25050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d8f57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6005602052806000526040600020600091509050548156fea265627a7a723158204b876a84211ff4de5b5969a6cffb027fcf79004896993a19ba73f2787417026764736f6c63430005100032546f6b656e20616464726573732063616e6e6f7420626520616e20656d7074792061646472657373a265627a7a7231582082bfb04f192b0a4bff2560363d18158520e1075aadbc6d47755b026915442bbe64736f6c63430005100032"
    },
    "AgentTask": {
        "abi": [{
            "inputs": [{
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            }, {
                "internalType": "bytes32",
                "name": "_taskId",
                "type": "bytes32"
            }, {
                "internalType": "address",
                "name": "_tknAddr",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "_tknAmnt",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "recvr",
                "type": "address"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }],
            "name": "Allowcate",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }],
            "name": "Claim",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            }, {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            }, {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }],
            "name": "Transfer",
            "type": "event"
        }, {
            "constant": true,
            "inputs": [],
            "name": "ERC20Interface",
            "outputs": [{
                "internalType": "contract ERC20",
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "name": "agents",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "taskId",
            "outputs": [{
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "tokenAddress",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "totalAmount",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "internalType": "address",
                "name": "_recvr",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "_amnt",
                "type": "uint256"
            }],
            "name": "allowcateCredits",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "internalType": "uint256",
                "name": "_amnt",
                "type": "uint256"
            }],
            "name": "reallowcateTotalAmountOfCredit",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "internalType": "address",
                "name": "_recvr",
                "type": "address"
            }, {
                "internalType": "uint256",
                "name": "_amnt",
                "type": "uint256"
            }],
            "name": "transfer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "internalType": "uint256",
                "name": "_amnt",
                "type": "uint256"
            }],
            "name": "claimCredits",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "getMyAvailableCredits",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "getTaskAvailableBalance",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "kill",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }],
        "bytecode": "0x608060405234801561001057600080fd5b506040516111413803806111418339818101604052608081101561003357600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610128576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806111196028913960400191505060405180910390fd5b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3306003546040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561021457600080fd5b505af1158015610228573d6000803e3d6000fd5b505050506040513d602081101561023e57600080fd5b810190808051906020019092919050505061025857600080fd5b836000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260018190555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060038190555050505050610e1f806102fa6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80639832e41b1161008c578063ac301bc511610066578063ac301bc5146102cb578063cafd2962146102f9578063f2fde38b14610347578063fd66091e1461038b576100ea565b80639832e41b146102155780639d76ea5814610233578063a9059cbb1461027d576100ea565b806341c0e1b5116100c857806341c0e1b514610175578063679ce4fd1461017f57806369522a941461019d5780638da5cb5b146101cb576100ea565b80631a39d8ef146100ef5780631bbc4b831461010d5780633322b23d14610157575b600080fd5b6100f76103e3565b6040518082815260200191505060405180910390f35b6101156103e9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61015f61040f565b6040518082815260200191505060405180910390f35b61017d610415565b005b6101876105af565b6040518082815260200191505060405180910390f35b6101c9600480360360208110156101b357600080fd5b81019080803590602001909291905050506105f6565b005b6101d3610659565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61021d61067e565b6040518082815260200191505060405180910390f35b61023b61075f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102c96004803603604081101561029357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610785565b005b6102f7600480360360208110156102e157600080fd5b810190808035906020019092919050505061093d565b005b6103456004803603604081101561030f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b5a565b005b6103896004803603602081101561035d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d36565b005b6103cd600480360360208110156103a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dd2565b6040518082815260200191505060405180910390f35b60035481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461046e57600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd30336104b661067e565b6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561055257600080fd5b505af1158015610566573d6000803e3d6000fd5b505050506040513d602081101561057c57600080fd5b810190808051906020019092919050505061059657600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16ff5b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461064f57600080fd5b8060038190555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561071f57600080fd5b505afa158015610733573d6000803e3d6000fd5b505050506040513d602081101561074957600080fd5b8101908080519060200190929190505050905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481111561083a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f496e73756666696369656e742062616c616e63652e000000000000000000000081525060200191505060405180910390fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811180156109915750808211155b61099a57600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3033856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610a7757600080fd5b505af1158015610a8b573d6000803e3d6000fd5b505050506040513d6020811015610aa157600080fd5b8101908080519060200190929190505050610abb57600080fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff167f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d4836040518082815260200191505060405180910390a25050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bb357600080fd5b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b383836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610ca057600080fd5b505af1158015610cb4573d6000803e3d6000fd5b505050506040513d6020811015610cca57600080fd5b8101908080519060200190929190505050610ce457600080fd5b8173ffffffffffffffffffffffffffffffffffffffff167f0a88bde4e2a211a37310fd5df31718503337f2b3273d2fd054510831d9e0c937826040518082815260200191505060405180910390a25050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d8f57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6005602052806000526040600020600091509050548156fea265627a7a723158204b876a84211ff4de5b5969a6cffb027fcf79004896993a19ba73f2787417026764736f6c63430005100032546f6b656e20616464726573732063616e6e6f7420626520616e20656d7074792061646472657373"
    }
};