# creator 串接 google admob 流程
1. 下載cocos creator & android studio 下載sdk 跟 ndk
2. cocos creator 3.8.3 設定sdk   &  ndk  21.4.7075529
3. cocos creator 輸出  android project
4. android studio 開啟 android project
5. android studio build apk
6. 安裝 GRADLE 套件: com.google.android.gms:play-services-ads:21.4.0
7. google admob 建立 廣告應用程式
8. 將廣告應用程式的appId設定在專案中(AndroidManifest & JAVA檔案都要)


# 常用目錄
1.  https://github.com/weitsunglin/NewProject_2024_09_29/tree/master/native/engine/android/app/src/com/cocos/game → android java檔
2. https://github.com/weitsunglin/NewProject_2024_09_29/blob/master/native/engine/android/app/AndroidManifest.xml → android 權限檔案
3. https://github.com/weitsunglin/NewProject_2024_09_29/blob/master/native/engine/android/app/build.gradle → android studio套件組態檔
4. https://github.com/weitsunglin/NewProject_2024_09_29/tree/master/assets/scripts → 遊戲層腳本


# app-ads處理流程
1. 網站目錄存app-ads.txt
2. 上架app到google play
3. google play 設定網站地址，不用帶檔案名稱
4. admob 添加商店地址
5. admob的app-ads.txt就會通過拉

# demo 
<p align="center">
  <img src="https://github.com/weitsunglin/NewProject_2024_09_29/blob/master/demo_1.png" alt="demo1" width="45%" />
  <img src="https://github.com/weitsunglin/NewProject_2024_09_29/blob/master/demo_2.png" alt="demo2" width="45%" />
</p>
