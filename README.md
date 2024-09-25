# Create your first NFT game.

section １*lesson-3*スマートコントラクトを作ろう からスタートできる状態にしています。

## 動かし方

- セットアップ

  ```bash
  yarn
  ```

- フロントエンド

  - 起動

    下記のコマンドを順番に実行する。

    ```bash
    yarn client start
    ```

  - ビルド

    ```bash
    yarn client build
    ```

- スマートコントラクト

  - セットアップ

    `packages/contract/.env` ファイルを作成し、以下の値を設定する。

    ```txt
    PRIVATE_KEY=""
    ALCHEMY_API_KEY=""
    ```

  - コンパイル

    ```bash
    yarn contract compile
    ```

  - テスト

    ```bash
    yarn contract test
    ```

  - クリーン

    ```bash
    yarn contract clean
    ```

  - ローカルノード立ちあげ

    ```bash
    yarn contract local
    ```

  - テスト用のスクリプト実行

    ```bash
    yarn contract run:script
    ```

  - Sepolia ネットワークへスマートコントラクトをデプロイする。

    ```bash
    yarn contract deploy
    ```

    [EtherScan - 0x1b8a77c342215a3B6dA58f380360bBa1446b11E7](https://sepolia.etherscan.io/address/0x1b8a77c342215a3B6dA58f380360bBa1446b11E7)

    [OpenSea - 0x1b8a77c342215a3B6dA58f380360bBa1446b11E7](https://testnets.opensea.io/ja/collection/onepiece-97)

    [Gemcase - 0x1b8a77c342215a3B6dA58f380360bBa1446b11E7](https://gemcase.vercel.app/view/evm/sepolia/0x1b8a77c342215a3b6da58f380360bba1446b11e7/1s)

### 参考文献

1. [Qita - yarn で Error: self signed certificate in certificate chain と認証エラーが発生したら](https://qiita.com/naru0504/items/06b687d6a174286756da)
2. [SetUp Custom hardhat Compiler](https://hardhat.org/hardhat-runner/docs/other-guides/using-custom-solc)
