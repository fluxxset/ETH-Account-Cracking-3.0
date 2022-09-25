
const { ethers } = require("ethers"); // yarn add ethers
const Web3 = require('web3'); // yarn add web3
var wss = "http://173.212.207.122:3334"; // use specific wss for the chain you wish to check balance in
const web3 = new Web3(wss);
const axios = require('axios');

let success = 0;


var request = require('request');


function getbal(addr) {
    const DATA = {
        jsonrpc: '2.0',
        method:"eth_getBalance",
        params:[addr, "latest"],
        id: 1,
    }
    const HEADER = {
    headers: { Accept: 'application/json' },
    }
    return axios
    .post('http://127.0.0.1:3334', DATA, HEADER)
    .then((response) => {
//        console.log(parseInt(response.data.result,16));
        return parseInt(response.data.result,16)
        if (response.status === 201) {
//        console.log('Req body:', response.data)
 //       console.log('Req header :', response.headers)
        }
    })
    .catch((e) => {
        console.error(e)
    })
}


async function f1() {
    var cout =0;
    while(!success) { 
        let createWallet = ethers.Wallet.createRandom(); // generates random wallet
        // const getBalance = await web3.eth.getBalance(createWallet.address) // uses web3 to check balance of generated address
        const getBalance = await getbal(createWallet.address)  // uses web3 to check balance of generated address
        console.log(getBalance)
        // const ethBalance = web3.utils.fromWei(getBalance, 'ether') // converts wei to decimals
        // console.log('🔍 Checking Wallet:', createWallet.address)
        if (getBalance > 1) { //print wallet details only if balance is greater than 0
            console.log('👾 Address:', createWallet.address)
            console.log('💬 Mnemonic:', createWallet.mnemonic.phrase)
            console.log('🔑 Private Key:', createWallet.privateKey)
            console.log('🤑 Balance:',getBalance, 'BNB')
            success = 1;
        } else{
  //          console.log('🤑 Balance:',getBalance, 'BNB')
            console.log(cout)

        }
        cout = cout +1
    }
}

f1();




// curl -X POST 127.0.0.1:3334 \
// -H "Content-Type: application/json" \
// --data \
// '
// {
//   "jsonrpc": "2.0",
//   "method": "eth_getBalance",
//   "params": ["0x34a45419f5fb329aa948Fa3C50bd150Cae0D50c8", "latest"],
//   "id": 1
// }
// ' 
