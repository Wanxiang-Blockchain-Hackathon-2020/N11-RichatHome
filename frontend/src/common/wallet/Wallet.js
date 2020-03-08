import newProjectContract from './newproject.contract'

const unit = 1000000000000000000
const desiredNetwork = '3'

class Wallet {

    constructor() {
        this.status = 'none'
        this.selectedAddress = ''
        this.selectedBalance = 0
    }

    get address() {
        return this.selectedAddress
    }

    get balance() {
        return this.selectedBalance
    }

    init() {

        return new Promise((resolve, reject) => {
            if (typeof window.ethereum === 'undefined') {
                alert('Looks like you need a Dapp browser to get started.Consider installing MetaMask!');
                resolve(false)
            } else {

                if (this.status === 'done') {
                    resolve(this)
                }
                this.status === 'loading'
                // In the case the user has MetaMask installed, you can easil
                // ask them to sign in and reveal their accounts:
                ethereum.enable()
                    // Remember to handle the case they reject the request:
                    .catch((reason) => {
                        if (reason === 'User rejected provider access') {
                            // The user didn't want to sign in!
                        } else {
                            // This shouldn't happen, so you might want to log this...
                            alert('There was an issue signing you in.')
                        }
                    })
                    // In the case they approve the log-in request, you'll receive their accounts:
                    .then((accounts) => {
                        // You also should verify the user is on the correct network:
                        if (ethereum.networkVersion !== desiredNetwork) {
                            console.log(ethereum, accounts)
                            console.error('This application requires the main network, please switch it in your MetaMask UI.');
                            // We plan to provide an API to make this request in the near future.
                            // https://github.com/MetaMask/metamask-extension/issues/3663
                            resolve(false)
                        } else {
                            // Once you have a reference to user accounts,
                            // you can suggest transactions and signatures:
                            window.web3 = new Web3(ethereum);
                            const account = accounts[0];
                            const selectedAddress = ethereum.selectedAddress;
                            this.selectedAddress = selectedAddress
                            web3.eth.getBalance(selectedAddress, (err, data) => {
                                this.selectedBalance = (data / unit).toFixed(4);
                                this.status = 'done'
                                resolve(this)
                            });
                            // web3.eth.sign(this.selectedAddress,'kk',(err,result)=>{
                            //  console.log("result====="+result);
                            // });
                            // this.sendEtherFrom(account, (err, transaction) => {
                            //     if (err) {
                            //         return alert(`Sorry you weren't able to contribute!`)
                            //     }
                            //     console.log("==============" + JSON.stringify(transaction));
                            //     alert('Thanks for your successful contribution!')
                            // })
                        }
                    })
            }
        })

    }

    //var arr = ["AgentBuilder", "AgentTask", "ERC20", "Migrations", "Owned"];
    getContractObj(name) {
        return newProjectContract[name];
    }

    depoyContract(abi, byteCode, account) {

        return new Promise((resolve, reject) => {
            window.web3 = new Web3(ethereum);
            var calcContract = web3.eth.contract(abi);
            var myContractReturned = calcContract.new({
                data: byteCode,
                from: account
            }, (err, myContract) => {

                if (!err) {
                    // 注意：这个回调会触发两次
                    //一次是合约的交易哈希属性完成
                    //另一次是在某个地址上完成部署

                    // 通过判断是否有地址，来确认是第一次调用，还是第二次调用。

                    if (myContract.address) {
                        console.log("contract deploy transaction hash: " + myContract.transactionHash) //部署合约的交易哈希值
                        console.log("contract deploy address: " + myContract.address)
                        // 合约发布成功后，才能调用后续的方法
                        resolve(myContract.address);
                    }
                }
            });
        });
    }
}

export default new Wallet()