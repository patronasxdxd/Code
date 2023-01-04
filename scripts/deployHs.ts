import { ethers } from 'hardhat';
import {Hearthstone} from '../contracts/Hearthstone.sol'

async function main(){


    const [admin,secondPLayer] = await ethers.getSigners();



    const Contract2 = await ethers.getContractFactory("Characters");
    const contractHead2 = await Contract2.deploy();
    await contractHead2.deployed();

    console.log("characters deployed to:", contractHead2.address);

    
    const Contract = await ethers.getContractFactory("Hearthstone");
    const contractHead = await Contract.deploy(contractHead2.address);
    await contractHead.deployed();

    console.log("Hearthstone deployed to:", contractHead.address);


  


  const contract = (await ethers.getContractAt(
    "Hearthstone",
    contractHead.address
  )) as Hearthstone;


  await contract.createGame()

  await contract.playMinion(1);
  console.log(await contract.getBoard());


//   console.log(await contract.getXd());
  console.log("card 1: "  + await contract.showcard(0));
  console.log("card 2: " + await contract.showcard(1));
  console.log("card 3: " + await contract.showcard(2));

  console.log("hand size" + await contract.handSize());
  
  console.log("player health: "+  await contract.getHealthPlayer());

  // first param is your minion second target 
  await contract.attack(0,8);

  console.log("player health: "+  await contract.getHealthBot());





}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  });
