const { ethers } = require("hardhat");

async function main() {
  const Medium = await ethers.getContractFactory("Medium");
  const mediumContract = await Medium.deploy(
    "Medium",
    "MED",
    "1000000000000000000"
  );
  await mediumContract.deployed();
  console.log("deployes to:", mediumContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
