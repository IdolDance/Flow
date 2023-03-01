import { ethers } from "hardhat";
async function deployContract2(add) {

 console.log("incodming      Contract Address:",add);
  const debugMarketPlaceV2 = await ethers.getContractFactory("debugMarketPlaceV2");
   // deploy the contract
     const deployeddebugMarketPlaceV2 = await debugMarketPlaceV2.deploy(add);
     await deployeddebugMarketPlaceV2.deployed();
        // print the address of the deployed contract
     console.log("Verify Contract Address:", deployeddebugMarketPlaceV2.address);
         console.log("Sleeping.....");
     // Wait for etherscan to notice that the contract has been deployed
     await sleep(10000);
       // Verify the contract after deploying   
     await hre.run("verify:verify", {
       address: deployeddebugMarketPlaceV2.address,
       constructorArguments: [add],
     });
  
     console.log(` deployeddebugMarketPlaceV2 deployed to ${deployeddebugMarketPlaceV2.address}`);

}
async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
 
  // const lockedAmount = ethers.utils.parseEther("1");

  const LegendsofKrumpV2 = await ethers.getContractFactory("LegendsofKrumpV2");
 
  // deploy the contract
     const deployedVerifyContract = await LegendsofKrumpV2.deploy();
     await deployedVerifyContract.deployed();
      // print the address of the deployed contract
     console.log(" Contract Address 'LegendsofKrumpV2' :", deployedVerifyContract.address); 

    //deployContract2(deployedVerifyContract.address);  

   
  
   
     console.log("Sleeping.....");
     // Wait for etherscan to notice that the contract has been deployed
     await sleep(10000);
   
     // Verify the contract after deploying
     await hre.run("verify:verify", {
       address: deployedVerifyContract.address,
       constructorArguments: [],
     });
  
 
  console.log(` LegendsofKrumpV2 deployed to ${deployedVerifyContract.address}`);


}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

async function verify (contractAddress:any, args:any) {
  console.log("verifying contract..")
  try{
    // await run("verify:verify", {
    //   address: contractAddress,
    //   constructorArguments: args,
    // })

  } catch (e:any) {
    if(e.message.toLowerCase().includes("already verified")){
      console.log("Already Verified!")
    }else{
      console.log(e)
    }
  }
}