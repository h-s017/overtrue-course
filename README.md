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
