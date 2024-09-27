require("@nomicfoundation/hardhat-toolbox");
const {
	TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD,
} = require("hardhat/builtin-tasks/task-names");
const path = require("path");

/**
 * カスタムコンパイラーを動かすための設定
 */
subtask(TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD, async (args, hre, runSuper) => {
	if (args.solcVersion === "0.8.24") {
		const compilerPath = path.join(
			__dirname,
			"compiler",
			"soljson-v0.8.24+commit.e11b9ed9.js"
		);

		return {
			compilerPath,
			isSolcJs: true, // if you are using a native compiler, set this to false
			version: args.solcVersion,
			// This is used as extra information in the build-info files,
			// but other than that is not important
			longVersion: "0.8.24+commit.e11b9ed9",
		};
	}

	return runSuper();
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.24",
};
