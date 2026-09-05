const actionButton = document.getElementById('actionButton');

const messages = [
  'You found a small JavaScript surprise!',
  'Keep customizing this page with your own content.',
  'Nice! This button reacts without reloading the page.',
  'One-page sites are fast and easy to build.',
  'A minimal website can still feel modern and polished.'
];

actionButton.addEventListener('click', () => {
  const index = Math.floor(Math.random() * messages.length);
  const message = messages[index];
  alert(message);
});
