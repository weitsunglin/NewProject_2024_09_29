package com.cocos.game;

import android.os.Bundle;
import com.cocos.service.SDKWrapper;
import com.cocos.lib.CocosActivity;
import android.util.Log;

public class AppActivity extends CocosActivity {

    private static AppActivity instance;  // Static reference to store activity instance
    private static final String TAG = "AppActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        SDKWrapper.shared().init(this);

        // Store the current instance of AppActivity
        instance = this;

        // Initialize the RewardedAdManager
        RewardedAdManager.init(this);
    }

    // Show the rewarded ad without passing the activity as a parameter
    public static void showRewardedAd() {
        Log.d(TAG, "showRewardedAd called from JavaScript");
        RewardedAdManager.showRewardedAd();
    }

    @Override
    protected void onResume() {
        super.onResume();
        SDKWrapper.shared().onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        SDKWrapper.shared().onPause();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (!isTaskRoot()) {
            return;
        }
        SDKWrapper.shared().onDestroy();
    }

    public static AppActivity getInstance() {
        return instance;
    }
}
