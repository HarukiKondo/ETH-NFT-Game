/**
 * 検証用のスクリプト
 */
const main = async () => {
  // NFTコントラクトをデプロイする。
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy();
  const nftGame = await gameContract.deployed();

  console.log("Contract deployed to:", nftGame.address);
};


const runMain = async () => {
  try {
    // main()メソッドの呼び出し
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
runMain();