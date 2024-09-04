const CONTRACT_ADDRESS = "0xEC64896B0edc5766cb5115c69719989115FAF3B9";

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
