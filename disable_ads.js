function attempt_set_vungle_disabled()
{
    try
    {
        let vungleClass = Java.use("com.vungle.warren.Vungle");
        let adConfigClass = Java.use("com.vungle.warren.AdConfig");

        let adConfig = adConfigClass.$new();
        adConfig.setEnabled(false);

        vungleClass.setMinSpaceForAd(999999999);
        vungleClass.setGlobalAdConfig(adConfig);
    }
    catch(e)
    {
        console.log('attempt_set_vungle_disabled failed: ', e);
    }
}

function attempt_disable_google_mobile_ads()
{
    try
    {
        let MobileAds = Java.use('com.google.android.gms.ads.MobileAds');
        MobileAds.initialize.implementation = function() {};
    }
    catch(e)
    {
        console.log('attempt_set_vungle_disabled failed: ', e);
    }
}

function attempt_disable_facebook_ads()
{
    try
    {
        let FacebookAds = Java.use('com.facebook.ads.AudienceNetworkAds');
        FacebookAds.initialize.implementation = function() {};
    }
    catch(e)
    {
        console.log('attempt_set_vungle_disabled failed: ', e);
    }
}

function attempt_disable_unity_ads()
{
    try
    {
        let UnityAds = Java.use("com.unity3d.ads.UnityAds");

        UnityAds.isInitialized.implementation = function () {
            return true;
        };
    }
    catch(e)
    {
        console.log('attempt_disable_unity_ads failed:', e);
    }
}

function attempt_disable_ads()
{
    attempt_disable_unity_ads();
    attempt_set_vungle_disabled();
    attempt_disable_facebook_ads();
    attempt_disable_google_mobile_ads();
}
