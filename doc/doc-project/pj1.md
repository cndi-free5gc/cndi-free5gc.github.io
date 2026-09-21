# Project 1 - free5GC CTF
**Deadline：2026/10/12**

[TOC]

## 作業描述

歡迎來到 free5GC World！
你的角色是負責與客戶對接的 FAE， 當你的客戶放火亂搞系統的時候，請立刻出動解決吧！

## 作業說明

本次作業讓大家扮演 FAE 的角色，透過 CTF 的方式重現 FAE 的解題日常。你必須想方設法重現題目所描述的情境，當情境出發點成功，就能在 5GC 的日誌中獲取 Flag。

> [!Tip]
> - Flag 的格式固定為 `You got a Flag free5GC_CTF{XXX}`
> - Flag 出現的時候不一定是 Error 喔！

> [!Note]
> ### CTF 是個啥？
> 奪旗（英語：Capture the flag，簡稱「CTF」）在電腦安全中是一種活動，當中會將「旗子」秘密地埋藏於有目的的易受攻擊的程式或網站。參賽者從其他參賽者（攻／防式奪旗）或主辦方（危難式挑戰）偷去旗子。奪旗活動衍生出數種變體，當中包括於硬體裝置內隱藏旗子。相關比賽可透過線上或實體形式進行，亦可分為進階和入門兩種層級。此遊戲乃基於同名傳統戶外運動而設計。
> -- [wikipedia](https://zh.wikipedia.org/zh-tw/%E5%A5%AA%E6%97%97_(%E7%B6%B2%E8%B7%AF%E5%AE%89%E5%85%A8))

## 作業目標

- 培養大家對於除錯的能力
- 激發大家對於 5G 的興趣

## 作業小提醒

- 所有題目使用同一份 [executable file](https://gist.github.com/Alonza0314/2dccb6eee64a3030fb251ee6372abc7e)，該檔案是我們修改過後的 free5GC 應用：
    - 包含所有需要的網路元件功能
    - 不依賴 gtp5g
    - 不支援 data plane 封包轉送
    - 在特定場景下會使用 log 輸出 Flag。
    - 執行 executable file 之前請確保系統已安裝 Docker。
    - Executable file 啟動時會將 subscription data 寫入 database（它會啟動臨時的 MongoDB Container），database 的資料請參考：[data](https://github.com/free5gc/free5gc/blob/main/test/consumerTestdata/UDR/TestRegistrationProcedure/RegistrationProcedure.go#L22)
- 請使用以下工具解題：
    - [free-ran-ue](https://github.com/free-ran-ue/free-ran-ue)
        - 因為沒有本次作業沒有包含 data plane，所以直接在跟核網同一台機器上面跑就好
    - 改寫 `free5gc/test` 下的測試檔案，需要把 MongoDB 與啟動 NF 的 init 程式都註解掉再加上一點點🤏改動
- 在某些情況下，你可能需要修改 database 的資料，你可以選擇使用
    - `docker exec -it <container_id> mongosh`
    - 或是查看 mongodb container expose 的 port，然後使用 webconsole 連入：
        ```bash
        CONTAINER ID   IMAGE                            COMMAND                   CREATED          STATUS          PORTS                                             NAMES
        c6372a5816c0   mongo:6.0.3                      "docker-entrypoint.s…"   13 seconds ago   Up 13 seconds   0.0.0.0:34099->27017/tcp, [::]:34099->27017/tcp   quirky_ptolemy
        ```
    - 更改位置為：`webconsole/config/webuicfg.yaml`
        ```yaml
        url: mongodb://localhost:<這裡> # a valid URL of the mongodb
        ```
        
    > [!Warning]
    > - 請注意每一次執行核網的時候，DB 容器的暴露 port 都會不一樣，請每一次打都要確認並在 `webcfg.yaml` 做修改
    > - 每一次打 flag 的時候都需要建立 UE，預設的 UE 只有 test.sh 可以使用

### 取得額外的通關提示

為了避免同學無法解出難度較高的題目，可以來信給助教用部分的扣分換取提示：
- 題目二~五各有兩個提示，每個題目的提示一需要 -3 分，提示二需要 -5 分
- 助教會在盡量來信當日的 23:59 前回信給予提示，所以不建議同學拖到最後才開始解題
- 為了方便統計，請大家使用“**e3站內信**”，其它方式不回复哦

### 繳交方式

- 從 E3 送出你的答案，請將答案彙整成**一份 PDF**，PDF 內需包含：
    - Flag
    - WriteUp 
        - 敘述流程
            - 做了什麼改動？為什麼要做這個改動？
            - 對AI下了什麼指令？
        - 核網截圖
        - pcap截圖（有的話）
- 如果內容太亂看不懂的話視同 0 分

## Challenges

### 🌟 #1 Registration Accept (10 pt)

終於完成客戶端核心網路的安裝了，讓我們使用 UE/RAN 模擬器簡單驗證是否能透過核網順利上線吧！

### 🌟🌟🌟 #2 PDU Session Establishment Reject with cause `Insufficient resources for specific slice and DNN` (20 pt)

某天你在下班前收到了客戶開的 ticket，ticket 中沒有問題的明確描述，只知道他的 UE 突然無法建立 PDU Session。
當你透過 ssh 連過去救火卻發現客戶偷偷用了 mongosh 命令亂搞，即便我們的產品使用手冊中明確的表達「所有資料更動應該透過 OAM 系統進行操作」...🔥🔥🔥

> [!Info]
> Cause #67 - Insufficient resources for specific slice and DNN
>
> This 5GSM cause is by the network to indicate that the requested service cannot be provided due to insufficient resources for specific slice and DNN or maximum group data rate on a 5G VN group identified by a specific slice and DNN has been exceeded.
>
> -- [https://www.tech-invite.com/3m24/toc/tinv-3gpp-24-501_zzs.html](https://www.tech-invite.com/3m24/toc/tinv-3gpp-24-501_zzs.html)


All in One 5GC 的 SMF Config 如下：

```go
	smf_factory.SmfConfig = &smf_factory.Config{
		Info: &smf_factory.Info{
			Version:     "1.0.7",
			Description: "SMF initial single test configuration",
		},
		Configuration: &smf_factory.Configuration{
			SmfName: "SMF",
			Sbi: &smf_factory.Sbi{
				Scheme:       "http",
				RegisterIPv4: "127.0.0.2",
				BindingIPv4:  "127.0.0.2",
				Port:         8000,
				Tls: &smf_factory.Tls{
					Pem: "cert/smf.pem",
					Key: "cert/smf.key",
				},
			},
			ServiceNameList: []string{
				"nsmf-pdusession",
				"nsmf-event-exposure",
				"nsmf-oam",
			},
			SNssaiInfo: []*smf_factory.SnssaiInfoItem{{
				SNssai: &models.Snssai{
					Sst: 1,
					Sd:  "fedcba",
				},
				DnnInfos: []*smf_factory.SnssaiDnnInfoItem{{
					Dnn: "internet",
					DNS: &smf_factory.DNS{
						IPv4Addr: "8.8.8.8",
						IPv6Addr: "2001:4860:4860::8888",
					},
				}},
			}, {
				SNssai: &models.Snssai{
					Sst: 1,
					Sd:  "010203",
				},
				DnnInfos: []*smf_factory.SnssaiDnnInfoItem{{
					Dnn: "internet",
					DNS: &smf_factory.DNS{
						IPv4Addr: "8.8.8.8",
						IPv6Addr: "2001:4860:4860::8888",
					},
				}},
			}, {
				SNssai: &models.Snssai{
					Sst: 1,
					Sd:  "112233",
				},
				DnnInfos: []*smf_factory.SnssaiDnnInfoItem{
					{
						Dnn: "internet",
						DNS: &smf_factory.DNS{
							IPv4Addr: "8.8.8.8",
							IPv6Addr: "2001:4860:4860::8888",
						},
					},
					{
						Dnn: "internet2",
						DNS: &smf_factory.DNS{
							IPv4Addr: "8.8.8.8",
							IPv6Addr: "2001:4860:4860::8888",
						},
					},
				},
			}},
			PFCP: &smf_factory.PFCP{
				NodeID:       "127.0.0.113",
				ExternalAddr: "127.0.0.113",
				ListenAddr:   "127.0.0.113",
			},
			Locality: "area1",
			UserPlaneInformation: smf_factory.UserPlaneInformation{
				UPNodes: map[string]*smf_factory.UPNode{
					"gNB1": {
						Type: "AN",
						ANIP: "192.188.2.3",
					},
					"UPF": {
						Type:   "UPF",
						NodeID: "127.0.0.111",
						Addr:   "127.0.0.111",
						SNssaiInfos: []*smf_factory.SnssaiUpfInfoItem{{
							SNssai: &models.Snssai{
								Sst: 1,
								Sd:  "fedcba",
							},
							DnnUpfInfoList: []*smf_factory.DnnUpfInfoItem{{
								Dnn:      "internet",
								DnaiList: dnaiList,
								Pools: []*smf_factory.UEIPPool{{
									Cidr: "10.60.0.0/24",
								}},
								StaticPools: []*smf_factory.UEIPPool{{
									Cidr: "10.60.1.0/24",
								}},
							}},
						}, {
							SNssai: &models.Snssai{
								Sst: 1,
								Sd:  "010203",
							},
							DnnUpfInfoList: []*smf_factory.DnnUpfInfoItem{{
								Dnn:      "internet",
								Pools: []*smf_factory.UEIPPool{{
									Cidr: "10.62.0.0/24",
								}},
								StaticPools: []*smf_factory.UEIPPool{{
									Cidr: "10.62.1.0/24",
								}},
							}},
						}, {
							SNssai: &models.Snssai{
								Sst: 1,
								Sd:  "112233",
							},
							DnnUpfInfoList: []*smf_factory.DnnUpfInfoItem{{
								Dnn: "internet",
								Pools: []*smf_factory.UEIPPool{{
									Cidr: "10.61.0.0/24",
								}},
								StaticPools: []*smf_factory.UEIPPool{{
									Cidr: "10.61.1.0/24",
								}},
							}},
						}},
						InterfaceUpfInfoList: []*smf_factory.InterfaceUpfInfoItem{{
							InterfaceType: "N3",
							Endpoints: []string{
								"127.0.0.102",
							},
							NetworkInstances: []string{
								"internet",
							},
						}},
					},
				},
				Links: []*smf_factory.UPLink{{
					A: "gNB1",
					B: "UPF",
				}},
			},
			T3591: &smf_factory.TimerValue{
				Enable:        true,
				ExpireTime:    5 * time.Second,
				MaxRetryTimes: 2,
			},
			T3592: &smf_factory.TimerValue{
				Enable:        true,
				ExpireTime:    5 * time.Second,
				MaxRetryTimes: 2,
			},
			NrfUri:       "http://127.0.0.10:8000",
			NrfCertPem:   "../cert/nrf.pem",
			UrrPeriod:    30,
			UrrThreshold: 10000,
			PLMNList: []smf_factory.PlmnID{
				{
					Mcc: "208",
					Mnc: "93",
				},
			},
		},
		Logger: &smf_factory.Logger{
			Enable:       true,
			Level:        "info",
			ReportCaller: false,
		},
	}
```

### 🌟🌟 #3 MAC Verification Failure (20 pt)

這一天，你又收到了用戶發來的 ticket，用戶表示他已經理解不可以隨便更改 MongoDB 的資料，可是現在卻連一開始的**驗證**以及**安全模式建立階段**都過不了。


### 🌟🌟🌟🌟 #4 AMF: NGAP ID not found (25 pt)

陽光明媚的午後，你又双收到了用戶的 ticket，這一次用戶清楚的說明 UE 的驗證資料沒問題，卻在建立 PDU session 的過程核網發生找不到 UENgapID 的問題。

你仔細檢查了用戶的 UE 設定，確認 UE 的設定都沒問題，看起來似乎問題不是出現在 UE 上面...



### 🌟🌟🌟🌟 #5 UE Unexpected Release (25 pt)

中秋節前夕，你滿心歡喜的想著終於可以放假了，卻又双叒收到了用戶的來信，客戶回報說他們的 UE 完成註冊後，發現 5GC（核網）會馬上釋放剛建立的 UE context，你能找出原因嗎？
