self.addEventListener('push', function(event) {
  if (event.data) {
    const data = event.data.json();
    if (data.type === 'notification') {
      event.waitUntil(self.registration.showNotification(data.title, data.options));
    }
  }
});

self.addEventListener('notificationclick', function(event) {
  if (event.notification.data && event.notification.data.url) {
    clients.openWindow(event.notification.data.url);
  }
});
