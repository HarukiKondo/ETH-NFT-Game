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
    export NODE_OPTIONS=--openssl-legacy-provider
    ```

    ```bash
    yarn client start
    ```

  - ビルド

    ```bash
    yarn client build
    ```

- スマートコントラクト

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
