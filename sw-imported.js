/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http:polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http:polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http:polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http:polymer.github.io/PATENTS.txt
 */

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
