import Web3 from 'web3';
import prismSale from './prismSale.json'

const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:7545");

const contractAddress = "0x311b4d9A0bb397bad3d564aCFC170D9317AFbAfA"
const contract = new web3.eth.Contract(prismSale.abi, contractAddress)

const sharedMessage = "This is to confirm your account when downloading the limited edition album"

export { web3, contract, contractAddress, sharedMessage }