document.addEventListener("DOMContentLoaded", function() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  const container = document.getElementById('content-container');
  const newElement = document.createElement('div');

  if (isIOS) {
    newElement.innerHTML = '<a href="https://altsource.by.lao.sb/browse/?source=https%3A%2F%2Fx1cOfficial.github.io%2FSideStore%2Fapps.json" style="display: inline-block;"><img src="https://x1cOfficial.github.io/SideStore/Assets/sidebadge.png" alt="Get on SideStore" style="width: 246px; height: 82px; vertical-align: middle; object-fit: contain;" /></a>';
  } else {
    newElement.innerHTML = '<a href="sidestore://source?url=https://x1cofficial.github.io/SideStore/apps.json" style="display: inline-block;"><img src="https://x1cOfficial.github.io/SideStore/Assets/sidebadge.png" alt="Get on SideStore" style="width: 246px; height: 82px; vertical-align: middle; object-fit: contain;" /></a>';
  }

  container.appendChild(newElement);
});
