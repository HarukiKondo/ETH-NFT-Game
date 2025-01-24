const CONTRACT_ADDRESS = "0x2B0B35C0FB6779B79570BD01D15Cb6E1e9117114";

/**
 * NFT キャラクター の属性をフォーマットしてオブジェクトとして返します。
 * @param {*} characterData
 * @returns
 */
const transformCharacterData = (characterData) => {
	return {
		name: characterData.name,
		imageURI: characterData.imageURI,
		hp: characterData.hp.toNumber(),
		maxHp: characterData.maxHp.toNumber(),
		attackDamage: characterData.attackDamage.toNumber(),
	};
};

// 変数を constants.js 以外の場所でも使えるようにします。
export { CONTRACT_ADDRESS, transformCharacterData };
