
const { ethers } = require("ethers"); // yarn add ethers
const Web3 = require('web3'); // yarn add web3
var wss = "http://173.212.207.122:3334"; // use specific wss for the chain you wish to check balance in
const web3 = new Web3(wss);
const axios = require('axios');
const fs = require('fs');
let success = 0;

const NODE ='http://127.0.0.1:3334';
var request = require('request');

function writedata(data) {

    fs.appendFileSync('Output.txt', data, (err) => {
      
        // In case of a error throw err.
        if (err) throw err;
    })
    
}

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
    .post(NODE, DATA, HEADER)
    .then((response) => {

        return parseInt(response.data.result,16)

    })
    .catch((e) => {
        console.error(e);
    })
}


async function f1() {
    var cout =0;
    while(!success) { 
        let createWallet = ethers.Wallet.createRandom(); // generates random wallet
        const getBalance = await getbal(createWallet.address) 
        // console.log(getBalance)

        if (getBalance > 1) { //print wallet details only if balance is greater than 0
            writedata(`👾 Address:${createWallet.address}`);
            writedata(`💬 Mnemonic:${createWallet.mnemonic.phrase}`);
            writedata(`🔑 Private Key:${createWallet.privateKey}`);
            writedata(`🤑 Balance: ${getBalance} SETH'\n`);
            success = 1;
        } else{
            console.log(cout);

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
