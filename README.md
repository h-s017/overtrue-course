# H.Fugue Course App

## GitHub Pages 上傳方式

1. 解壓縮 ZIP。
2. 將本資料夾內所有檔案直接上傳到 GitHub repository 的根目錄。
3. 確認 `index.html` 在根目錄，不要包在第二層資料夾。
4. 到 Settings → Pages → Deploy from a branch → main / root。
5. 等待 GitHub Pages 網址產生。

## 送出配方表

目前 `organ.html` 內的配方表有「送出給 Hana 老師」按鈕。
請在 `config.js` 裡填入 Google Apps Script 或 Firebase endpoint：

```js
window.HFUGUE_CONFIG = {
  SUBMIT_ENDPOINT: '你的 Web App URL'
};
```

未設定時，送出按鈕會自動下載 JSON 備份。


Final update 2026-05-04:
- Updated introduction copy.
- Replaced HLA lifecycle image with corrected newborn scent text.
- Removed redundant original scent pyramid image.
- Changed visible KPIA香基 wording to 香基 where applicable.
- Updated service worker cache version.


2026-05-04 integrated final package:
- Replaced HLA lifecycle image with redesigned newborn/life stages infographic
- Added fragrance pyramid image (triangle layout, Middle label)
- Updated service worker cache version


2026-05-04 update:
- 體香露改為體香噴霧，濃度 1–3%。
- 調香台 Re. 敘述已刪除。
- 配方送出仍需在 config.js 設定 SUBMIT_ENDPOINT。


2026-05-04 update:
- Added Google Apps Script submit endpoint to config.js
- Removed visible Re./advisor suggestion section from Organ drawer
- Body Spray concentration updated to 1–3%


2026-05-04 unified formula update:
- 調香台與配方表合併為單一資料庫／單一配方表。
- 配方表原料選單依英文名稱 A-Z 排列。
- 用量可選 g 或滴，並自動計算香料總克數、香料總滴數、酒精克數、香水總克數與 rowPercent。
- AWARENESS 放入繪畫發想筆記欄備註；ETERNITY 放入音樂發想筆記欄備註。


2026-05-04 formula update:
- All KPIA labels renamed to 香基 throughout organ.html
- 酒精用量 renamed 香水容量
- Drop percentages use 原料濃度 × 滴數 weighted formula
- g percentages use g / total ingredient g
- Target ingredient grams calculated from perfume capacity and row percent
