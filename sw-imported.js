self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    if (data.type === 'notification') {
      event.waitUntil(self.registration.showNotification(data.title, data.options));
    }
  }
});

self.addEventListener('notificationclick', (event) => {
  const data = event.notification.data;
  clients.openWindow(data && data.url || 'https://summit.polymer-project.org');
});

self.addEventListener('pushsubscriptionchange', (event) => {  
  event.waitUntil(
    self.registration.pushManager.subscribe(event.oldSubscription.options)
    .then((subscription) => {
      return fetch('https://polymer-summit-2017.firebaseio.com/subscriptions.json', {
        method: 'POST',
        body: JSON.stringify(subscription)
      });
    })
  );  
});
