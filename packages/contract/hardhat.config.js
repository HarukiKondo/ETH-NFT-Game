require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, ALCHEMY_API_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.17",
	networks: {
		sepolia: {
			url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
			accounts: [PRIVATE_KEY],
		},
	},
};
