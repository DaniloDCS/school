self.addEventListener('push', event => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.message,
    icon: "/public/images/stuudy-transparent.png"
  });
});