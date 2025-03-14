import { ethers } from "hardhat"
import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre
    const { deployer } = await getNamedAccounts()
    console.log("deployer", deployer)
    const { deploy } = deployments

   
    // tx hash 
    console.log("deploying VerifyingPaymaster")
    const tx = await deploy("VerifyingPaymaster", {
        from: deployer,
        args: ["0x0000000071727De22E5E9d8BAf0edAc6f37da032", "0x93655B253C964C6C7B1E54978b868B63Bd7D1A4A"],
        log: true
    })

    console.log("waiting for tx to be mined")
    // wait for tx to be mined
    
    console.log(tx.receipt?.transactionHash)

    // if (paymaster.newlyDeployed) {
    //     console.log(`Staking gas ...`)
    //     await entryPoint.depositTo(paymaster.address, { value: ethers.utils.parseEther("10") })
    // }
}

deploy.tags = ["VerifyingPaymaster", "paymaster"]
export default deploy
