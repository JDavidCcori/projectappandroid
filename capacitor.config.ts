import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.blogs',
  appName: 'blogs',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
