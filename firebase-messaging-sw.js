importScripts('httpswww.gstatic.comfirebasejs10.xfirebase-app-compat.js');
importScripts('httpswww.gstatic.comfirebasejs10.xfirebase-messaging-compat.js');

 再次貼上相同的 Config
firebase.initializeApp({
    apiKey ...,
     ... 相同的內容 ... 
});

const messaging = firebase.messaging();

 當 APP 在背景時收到訊息的處理
messaging.onBackgroundMessage((payload) = {
  console.log('收到背景訊息 ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body payload.notification.body,
    icon 'firebase-logo.png'  這裡可以換成你的圖示
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});