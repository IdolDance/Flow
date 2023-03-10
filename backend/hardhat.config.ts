import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// const HardhatUserConfig = require("hardhat/config");
// const HardhatUserConfig = require("hardhat/config");
require("dotenv").config({ path: ".env" });

const POLY_ALCHEMY_API_KEY_URL = process.env.POLY_ALCHEMY_API_KEY_URL;
const GOERLI_ALCHEMY_API_KEY_URL = process.env.GOERLI_ALCHEMY_API_KEY_URL;

let PRIVATE_KEY:string = "0xe62c67b5957d55905f510f374e16465d480287b5f87364f7f30330699e927648";
///LEARNWEB3DEVACCT_2
//process.env.MUMBAI_PRIVATE_KEY;
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;
console.log(`POLY_ALCHEMY_API_KEY_URL -- ${POLY_ALCHEMY_API_KEY_URL}`)
console.log(`PRIVATE_KEY -- ${PRIVATE_KEY}`)
let learnweb3_pk:any = process.env.LEARNWEB3DEVACCT_2
console.log(`learnweb3_pk -- ${learnweb3_pk}`)
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: POLY_ALCHEMY_API_KEY_URL,
      accounts: [PRIVATE_KEY],
    },
    goerli: {
      url: GOERLI_ALCHEMY_API_KEY_URL,
      accounts: [learnweb3_pk],
    },
    localhost: {
      chainId: 31337,
      url: 'http://127.0.0.1:8545',
      accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'],

    },
  },
  etherscan: {
    apiKey: {
      //goerli: POLYGONSCAN_KEY,
      "mumbai":POLYGONSCAN_KEY,
      "goerli":"1WZTZZJKC17CFZ78JIWJ42FXM9JKFQIGNF",
    },
  },    
};

export default config;
