#  ETH-Account-Cracking-3.0 

written in Node JS , 25x faster than 2.0 version

**The content provided is for educational and informational purpose only**


# :inbox_tray: Install Geth Node

```diff
sudo apt update

sudo install git node npm golang-go gccgo-go -y

go install github.com/ethereum/go-ethereum/cmd/geth
```
## :test_tube: verify node

```diff
curl -X POST 127.0.0.1:3334  -H "Content-Type: application/json"  --data  ' { "jsonrpc": "2.0", "method": "eth_getBalance", "params": ["0x34a45419f5fb329aa948Fa3C50bd150Cae0D50c8", "latest"], "id": 1 } '

```

if you got similar to this :arrow_right: `{"jsonrpc":"2.0","id":1,"result":"0x80d3b41e43b0d1"}` then node is working fine.

# :robot: Run Brutforcing Bot 
```diff
nohup geth --http --http.port 3334 &

git clone https://github.com/fluxx03/ETH-Account-Cracking-3.0.git

cd ETH-Account-Cracking-3.0

npm install
```
### running for test

```diff
node main.js
```
### Running in Background
```dnf
nohup node main.js &
```



