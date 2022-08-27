# arsaga-company-reproduction
copy-coding

## Getting Started
### ローカルで実行
- ``` docker build ./ -t [イメージ名] ```
- ``` docker run -d -it --name [コンテナ名] -p [ポート]:3000 [イメージ名] ```
- ``` docker exec -it [コンテナ名] bash ```
### コンテナ内で実行
- ``` cd front ```
- ``` npm start ```
- もしnpm startが実行できなければ ``` npm install ```
### ブラウザで実行
- URLにアクセス ``` [アドレス] ```
- もし80ポート意外を指定している場合は ``` [アドレス]:[ポート] ```
