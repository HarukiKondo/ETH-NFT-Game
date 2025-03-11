// スマートコントラクトのアドレスを設定する。デプロイする度にセットし直す必要あり。
const CONTRACT_ADDRESS = "0x0bdCf3249b578eB42e80D749B138Cb9C18362EaE";

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
