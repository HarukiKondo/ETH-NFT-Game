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

### 参考文献

1. [Qita - yarn で Error: self signed certificate in certificate chain と認証エラーが発生したら](https://qiita.com/naru0504/items/06b687d6a174286756da)
