import React from 'react';

const SmartAppBanner = () => {
  return (
    <>
      <div className="smart-app-banner"></div>
      <link rel="stylesheet" href="node_modules/smart-app-banner/dist/smart-app-banner.css" type="text/css" media="screen" />
      <script src="node_modules/smart-app-banner/dist/smart-app-banner.js"></script>
      <script type="text/javascript">
        {`
          new SmartBanner({
            daysHidden: 15,
            daysReminder: 90,
            appStoreLanguage: 'us',
            title: 'MyPage',
            author: 'MyCompany LLC',
            button: 'VIEW',
            store: {
              ios: 'https://apps.apple.com/us/developer/off-road-studios/id631326557',
              android: 'https://play.google.com/store/apps/developer?id=Off-Road+Studios&hl=en_US',
            },
            price: {
              ios: 'FREE',
              android: 'FREE',
            },
          });
        `}
      </script>
    </>
  );
};

export default SmartAppBanner;
