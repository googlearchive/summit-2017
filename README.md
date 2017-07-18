# summit-2017

PWA for Polymer Summit 2017.

## Setup

```
bower i
polymer build
firebase serve
```

NOTE: When subscribing to push notifications, the [PushSubscription](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription) object is POST'ed to the production database, meaning you will be subscribed even when developing locally (you can always unsubscribe by clicking the button again). To prevent this, modify/remove the URL in [elements/push-notifications.html](https://github.com/Polymer/summit-2017/blob/master/elements/push-notifications.html).
