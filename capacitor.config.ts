import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'sa.dealapp.deal',
  appName: 'deal',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
        "SplashScreen": {
            "launchShowDuration": 5000,
            "launchAutoHide": true,
            "backgroundColor": "#ffffffff",
            "androidSplashResourceName": "splash",
            "androidScaleType": "CENTER_CROP",
            "showSpinner": false,
            "androidSpinnerStyle": "large",
            "iosSpinnerStyle": "small",
            "spinnerColor": "#999999",
            "splashFullScreen": true,
            "splashImmersive": true,
            "layoutName": "launch_screen",
            "useDialog": false
        }
    }
};

export default config;
