function openStoreSources() {
  const sideStore = 'sidestore://source?url=https://x1cofficial.github.io/SideStore/apps.json';
  const altStore = 'altstore://source?url=https://x1cofficial.github.io/SideStore/apps.json';
  window.location.href = sideStore;
  const frame = document.createElement('iframe');
  frame.style.display = 'none';
  frame.src = altStore;
  document.body.appendChild(frame);
  setTimeout(() => {
    if (document.body.contains(frame)) {
      document.body.removeChild(frame);
    }
  }, 1000);
}
