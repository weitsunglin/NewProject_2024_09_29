package com.cocos.game;

import android.os.Bundle;
import android.util.Log;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.rewarded.RewardItem;
import com.google.android.gms.ads.rewarded.RewardedAd;
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.AdError;
import com.google.android.gms.ads.LoadAdError;
import androidx.annotation.NonNull;
import com.cocos.service.SDKWrapper;
import com.cocos.lib.CocosActivity;

public class AppActivity extends CocosActivity {

    private static RewardedAd rewardedAd;
    private static AppActivity instance; // Static reference to store activity instance
    private static final String TAG = "AppActivity";
    private static final String AD_UNIT_ID = "ca-app-pub-8048384778879535/2927875304"; // Replace with your actual AdMob ID
    private static boolean isAdLoaded = false;  // Add a flag to check if the ad is loaded

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        SDKWrapper.shared().init(this);

        // Store the current instance of AppActivity
        instance = this;

        // Load the rewarded ad
        loadRewardedAd();
    }

    // Load Rewarded Ad
    private void loadRewardedAd() {
        AdRequest adRequest = new AdRequest.Builder().build();
        RewardedAd.load(this, AD_UNIT_ID, adRequest, new RewardedAdLoadCallback() {
            @Override
            public void onAdLoaded(@NonNull RewardedAd ad) {
                rewardedAd = ad;
                isAdLoaded = true;  // Set the flag to true when the ad is loaded
                Log.d(TAG, "Rewarded ad loaded successfully.");
                setupFullScreenCallback();
            }

            @Override
            public void onAdFailedToLoad(@NonNull LoadAdError loadAdError) {
                Log.d(TAG, "Failed to load rewarded ad: " + loadAdError.getMessage());
                rewardedAd = null;
                isAdLoaded = false;  // Set the flag to false if the ad fails to load
            }
        });
    }

    // Set full-screen callback for the ad
    private void setupFullScreenCallback() {
        if (rewardedAd != null) {
            rewardedAd.setFullScreenContentCallback(new FullScreenContentCallback() {
                @Override
                public void onAdShowedFullScreenContent() {
                    Log.d(TAG, "Ad showed full screen content.");
                    isAdLoaded = false;  // Reset the flag since the ad is no longer valid after being shown
                }

                @Override
                public void onAdFailedToShowFullScreenContent(AdError adError) {
                    Log.d(TAG, "Ad failed to show full screen content: " + adError.getMessage());
                    rewardedAd = null;
                    isAdLoaded = false;  // Reset the flag if the ad failed to show
                }

                @Override
                public void onAdDismissedFullScreenContent() {
                    Log.d(TAG, "Ad was dismissed.");
                    loadRewardedAd();  // Reload a new ad after the previous one is dismissed
                }
            });
        }
    }

    // Show the rewarded ad without passing the activity as a parameter
    public static void showRewardedAd() {
        Log.d(TAG, "showRewardedAd called from JavaScript");
        if (isAdLoaded && rewardedAd != null && instance != null) {
            // 確保在主 UI 線程中調用 show
            instance.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Log.d(TAG, "Showing rewarded ad.");
                    rewardedAd.show(instance, rewardItem -> {
                        int rewardAmount = rewardItem.getAmount();
                        String rewardType = rewardItem.getType();
                        Log.d(TAG, "User earned reward: " + rewardAmount + " " + rewardType);
                        grantRewardToUser(rewardAmount, rewardType);  // 發放獎勵
                    });
                }
            });
        } else {
            Log.d(TAG, "Rewarded ad is not loaded yet.");
            if (instance != null) {
                instance.loadRewardedAd();  // 如果廣告還沒加載，重新加載
            }
        }
    }


    // Grant reward to user
    private static void grantRewardToUser(int rewardAmount, String rewardType) {
        Log.d(TAG, "Grant reward to user: " + rewardAmount + " " + rewardType);
        // Implement your reward logic here (e.g., give coins or points to the user)
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
}