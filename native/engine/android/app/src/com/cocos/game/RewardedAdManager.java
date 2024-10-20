package com.cocos.game;

import android.util.Log;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.rewarded.RewardItem;
import com.google.android.gms.ads.rewarded.RewardedAd;
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.AdError;
import com.google.android.gms.ads.LoadAdError;
import androidx.annotation.NonNull;

public class RewardedAdManager {

    private static RewardedAd rewardedAd;
    private static boolean isAdLoaded = false;
    private static final String TAG = "RewardedAdManager";
    private static final String AD_UNIT_ID = "ca-app-pub-8048384778879535/2927875304"; // Replace with your actual AdMob ID

    // Initialize the rewarded ad manager
    public static void init(AppActivity activity) {
        loadRewardedAd(activity);
    }

    // Load the rewarded ad
    private static void loadRewardedAd(AppActivity activity) {
        AdRequest adRequest = new AdRequest.Builder().build();
        RewardedAd.load(activity, AD_UNIT_ID, adRequest, new RewardedAdLoadCallback() {
            @Override
            public void onAdLoaded(@NonNull RewardedAd ad) {
                rewardedAd = ad;
                isAdLoaded = true;  // Set the flag to true when the ad is loaded
                Log.d(TAG, "Rewarded ad loaded successfully.");
                setupFullScreenCallback(activity);
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
    private static void setupFullScreenCallback(AppActivity activity) {
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
                    loadRewardedAd(activity);  // Reload a new ad after the previous one is dismissed
                }
            });
        }
    }

    // Show the rewarded ad
    public static void showRewardedAd() {
        if (isAdLoaded && rewardedAd != null && AppActivity.getInstance() != null) {
            // Ensure it's called on the UI thread
            AppActivity.getInstance().runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Log.d(TAG, "Showing rewarded ad.");
                    rewardedAd.show(AppActivity.getInstance(), rewardItem -> {
                        int rewardAmount = rewardItem.getAmount();
                        String rewardType = rewardItem.getType();
                        Log.d(TAG, "User earned reward: " + rewardAmount + " " + rewardType);
                        grantRewardToUser(rewardAmount, rewardType);  // Grant the reward
                    });
                }
            });
        } else {
            Log.d(TAG, "Rewarded ad is not loaded yet.");
            if (AppActivity.getInstance() != null) {
                loadRewardedAd(AppActivity.getInstance());  // Reload the ad if it's not loaded yet
            }
        }
    }

    // Grant reward to user
    private static void grantRewardToUser(int rewardAmount, String rewardType) {
        Log.d(TAG, "Grant reward to user: " + rewardAmount + " " + rewardType);
        // Implement your reward logic here (e.g., give coins or points to the user)
    }
}
