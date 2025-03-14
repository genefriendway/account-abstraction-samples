import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || "https://babel-api.mainnet.iotex.io"
const TESTNET_RPC_URL = process.env.TESTNET_RPC_URL || "https://babel-api.testnet.iotex.io"

const PRIVATE_KEY = process.env.PRIVATE_KEY
// optional
const MNEMONIC = process.env.MNEMONIC || "Your mnemonic"
const FORKING_BLOCK_NUMBER = process.env.FORKING_BLOCK_NUMBER

const accounts = PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : []
// const accounts = {
//     mnemonic: MNEMONIC,
// }



const config: HardhatUserConfig = {
  networks: {
    life: {
        url: "https://testnet-lifeaiv1-c648f.avax-test.network/ext/bc/62fkxYTWbGBfXoHNXcGJbq2dTXba2uoCFySzdHy87iovJj2F4/rpc?token=25e957a027b09bb006da7e9fc981100ce25f333cd998a76eb36a842fcb5ba63a",
        accounts: accounts,
        chainId: 59409
    }
},

  namedAccounts: {
    deployer: {
      default: 0,
      life: 0
    }
  },

  solidity: {
    
    compilers: [
      {
        version: '0.8.24',
        settings: {
          evmVersion: 'cancun',
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 1000000
          }
        }
      }
    ]
  }
}

export default config
