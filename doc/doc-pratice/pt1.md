# Practice 1 - Installation

**Deadline：2026/09/21**

## Description

本次練習有三個小部分需要做

1. 開一台 VM 安裝 free5GC
2. 再開一台 VM 安裝 free-ran-ue 或是使用 namespace 的方式安裝在同一台 VM
3. 在 free5GC 那台 VM 上使用 frush 模擬 RAN/UE

（如果可以的話幫忙在 free5GC 與 free-ran-ue 的 github 上給個小星星🌟吧！）

## free5GC 安裝

- [https://free5gc.org/guide/quick-setup/](https://free5gc.org/guide/quick-setup/)
    - 建議同時安裝 docker（-d），後續會用到
    - VM 使用的時候建議在每個步驟打 snapshot，empty 環境也要打一個以免不熟悉安裝導致環境壞掉

## free-ran-ue

- 第二台 VM
    - [https://free-ran-ue.github.io/doc-user-guide/02-free-ran-ue/](https://free-ran-ue.github.io/doc-user-guide/02-free-ran-ue/)

        > [!Note]
        > 你可以對 AI 這樣說：
        > free5GC 已經在另外一台 VM 部署完成，對外 IP 是 x.x.x.x，現在我這台 VM 需要同時部署 RAN(gNB) 以及 UE，gNB 的 N2/N3 使用這台 VM 的 IP 與 free5GC 對接，UE 與 RAN（gNB）之間使用本地 127.0.0.1 對接，請你幫我修改 `config/gnb.yaml` 與 `config/ue.yaml`

- 同一台 VM
    - [https://free-ran-ue.github.io/doc-user-guide/03-namespace-free-ran-ue/](https://free-ran-ue.github.io/doc-user-guide/03-namespace-free-ran-ue/)

## frush

- [https://free-ran-ue.github.io/doc-user-guide/13-frush/](https://free-ran-ue.github.io/doc-user-guide/13-frush/)

## E3 繳交

1. free-ran-ue 截圖
    - gNB 啟動成功
    - UE 啟動成功
    - 在 UE 的機器使用 `ifconfig` 或是 `ip a` 有出現 ueTun0
    - ping 成功
        - `ping -I ueTun0 1.1.1.1 -c 5`
2. frush 以下截圖
    - add
    - gnb
    - status
    - reg
    - ping
    - exit

直接丟 e3 就好，不需要包成壓縮檔
