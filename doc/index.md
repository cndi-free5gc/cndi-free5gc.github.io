# cndi-free5gc

![cndi-free5gc](image/cndi-main.png)

## 課程簡介

本課程以培養 5G 行動通訊人才為目標。核心網路在 5G 通訊網路中扮演著不可或缺的角色，開發網路元件需要具備豐富的領域知識（SDN / Network Programming / OS...）。本課程除了**涵蓋前面提到的知識**以外，更會以淺入深出帶領學生體驗核心網路的開發與知識。

本課程將以 [free5GC](https://free5gc.org) 開源軟體為主體，此軟體為陳志成教授領導開發的核心網路開源軟體，是全世界第一個開源的 5G 核心網路專案，並於 2024 年 9 月 16 日加入全球開源軟體領導組織 — Linux 基金會，為 5G 網路的研究與發展帶來強大的平台與資源

## 課程目標

1. 了解什麼是 5G
2. 成為 5G 開源專案的貢獻者，包含 5G Core / 5G RAN...
3. 成為 free5GC 的[貢獻者](https://github.com/free5gc/governance/blob/main/CONTRIBUTORS.md)

## 課程大綱 & 進度

<div class="cyber-table-wrapper">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>週</th>
        <th>日期</th>
        <th>主題</th>
        <th>事件</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>2026-09-07</td>
        <td>Syllabus</td>
        <td>PT1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2026-09-14</td>
        <td>Github, git and dev tool introduction</td>
        <td>FPJ</td>
      </tr>
      <tr>
        <td>3</td>
        <td>2026-09-21</td>
        <td>4G to 5G</td>
        <td><strong>PT1 DDL</strong> &amp; PJ1</td>
      </tr>
      <tr>
        <td>4</td>
        <td>2026-09-28</td>
        <td><mark>教師節放假</mark></td>
        <td></td>
      </tr>
      <tr>
        <td>5</td>
        <td>2026-10-05</td>
        <td>5G Architecture</td>
        <td></td>
      </tr>
      <tr>
        <td>6</td>
        <td>2026-10-12</td>
        <td>5GC Network Functions AMF/SMF/UPF</td>
        <td><strong>PJ1 DDL</strong> &amp; PT2</td>
      </tr>
      <tr>
        <td>7</td>
        <td>2026-10-19</td>
        <td>5GC Network Functions Other NFs</td>
        <td>PJ2</td>
      </tr>
      <tr>
        <td>8</td>
        <td>2026-10-26</td>
        <td><mark>光復節放假</mark></td>
        <td><strong>PT2 DDL</strong></td>
      </tr>
      <tr>
        <td>9</td>
        <td>2026-11-02</td>
        <td>5GC Deployment - free5GC Compose</td>
        <td>Midterm &amp; PT3</td>
      </tr>
      <tr>
        <td>10</td>
        <td>2026-11-09</td>
        <td>5GC Deployment - free5GC Helm</td>
        <td><strong>PJ2 DDL</strong></td>
      </tr>
      <tr>
        <td>11</td>
        <td>2026-11-16</td>
        <td>5G RAN/UE - free-ran-ue</td>
        <td><strong>PT3 DDL</strong> &amp; PJ3</td>
      </tr>
      <tr>
        <td>12</td>
        <td>2026-11-23</td>
        <td>5G RAN/UE - Concurrent Programming</td>
        <td></td>
      </tr>
      <tr>
        <td>13</td>
        <td>2026-11-30</td>
        <td>5G RAN/Ue - Unit / Integration Test</td>
        <td><strong>FPJP DDL</strong></td>
      </tr>
      <tr>
        <td>14</td>
        <td>2026-12-07</td>
        <td>Final Project Discussion</td>
        <td><strong>PJ3 DDL</strong></td>
      </tr>
      <tr>
        <td>15</td>
        <td>2026-12-14</td>
        <td>Final Project Demo</td>
        <td><strong>FPJ DDL</strong></td>
      </tr>
      <tr>
        <td>16</td>
        <td>2026-12-21</td>
        <td>Final Project Demo</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>

> [!Note]
>
> - PT：Pratice
> - PJ：Project
> - FP：Final Project
> - FPJP：Final Project Proposal
> - DDL：Deadline

## 參考教材

1. [5G 核心網輕鬆學：free5GC 與 RAN/UE 模擬器](https://free-ran-ue.github.io/doc-5g-core-book/zh/)
2. [5G Mobile Core Network: Design, Deployment, Automation, and Testing Strategies](https://www.tenlong.com.tw/products/9781484264720)
3. [EN 帶你入門 5G 核心網路](https://www.books.com.tw/products/0010970849?srsltid=AfmBOooPp8AyGCq4LX8M9ByPcjcSVHvmUsl8Q_N4xIW7C4j_dphDs7Y4)

> [!Note]
>
> - 參考教材 1 可以直接在網頁看，開放抖內（也算是貢獻者之一？）
> - 參考教材 2 可以在交大圖書館借閱、或是透過圖書館系統下載電子版，不需要購買。
> - 參考教材 3 可以在交大圖書館借閱，不需要購買。

## 背景知識

- OS
- Network/Socket Programming
- Concurrent Programming
- Golang

## 評分 & 作業

- （15%）Project 1 - free5GC CTF, `2026-09-21 ~ 2026-10-12`
- （15%）Project 2 - Network Service Function, `2026-10-19 ~ 2026-11-09`
- （20%）Project 3 - NR Dual Connection, `2026-11-16 ~ 2026-12-07`
- （40%）Final Project 4 - 5Gix

    - (10%) Proposal - Final Project Plan, `2026-09-14 ~ 2026-11-30`
    - (30%) Presentation, `2026-09-14 ~ 2026-12-14`

- （10%）Participation - Midterm & Practices

    - Midterm 必須參加，不開放補考或是提前考
    - Practice 不是 1 個 1% 計算，會是 Participation 調整依據

        - Practice 1, Installation, `2026-09-07 ~ 2026-09-21`
        - Practice 2, NF Writing, `2026-10-12 ~ 2026-10-26`
        - Practice 3, ULCL & Traffic Influence, `2026-11-02 ~ 2026-11-16`

## 注意事項

- 作業基本上都是 Go 語言開發，請大家開始自學！有問題先問 AI 再來找助教或是找我，但我不一定有時間回
- 完全不點名，要來不來都行
- 作業有問題可以問助教，但不是助教幫你寫，也不是幫你 debug
- 真的有貢獻 PR 到 5G 開源專案並被 Merged 的可以加分，但不是 1:1
- **嚴禁抄襲**，如果發現抄襲，抄的人與被抄的人學期成績都會有**嚴重**的懲處
- **嚴禁缺繳**，如果有缺繳，直接當掉（敷衍或是空白視同缺繳）

    - Midterm / Practice 不適用此規則

- 補繳規則：

    - Practice：不接受任何理由遲交
    - Project：*70%/week

        - 2個禮拜就是 70%*70%=49%
        - 遲交1秒也是遲交，不接受理由（網路卡住、重新上傳但來不及、我有 commit 記錄、我在飛機上飛機誤點、我的時區不一樣）

    - Final Project（含 Proposal）：不接受任何理由遲交

- Email 統一用 e3 站內信，其他不保證回
