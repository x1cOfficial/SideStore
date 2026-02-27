const parentContainer = document.currentScript.parentElement;
const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};
const newElement = document.createElement('div');
if (isIOS()) {
  newElement.innerHTML = '<a href="sidestore://source?url=https://x1cofficial.github.io/SideStore/apps.json" style="display: inline-block;"><img src="https://x1cOfficial.github.io/SideStore/Assets/sidebadge.png" alt="Get on SideStore" style="width: 246px; height: 82px; vertical-align: middle; object-fit: contain;" /></a><a href="altstore://source?url=https://x1cofficial.github.io/SideStore/apps.json" style="display: inline-block;"><img src="https://x1cOfficial.github.io/SideStore/Assets/altbadge.png" alt="Get on AltStore" style="width: 246px; height: 82px; vertical-align: middle; object-fit: contain;" /></a>';
} else {
  newElement.innerHTML = '<a href="https://altsource.by.lao.sb/browse/?source=https%3A%2F%2Fx1cOfficial.github.io%2FSideStore%2Fapps.json" style="display: inline-block;"><img src="https://x1cOfficial.github.io/SideStore/Assets/sidebadge.png" alt="Get on SideStore" style="width: 246px; height: 82px; vertical-align: middle; object-fit: contain;" /></a><a href="https://altsource.by.lao.sb/browse/?source=https%3A%2F%2Fx1cOfficial.github.io%2FSideStore%2Fapps.json" style="display: inline-block;"><img src="https://x1cOfficial.github.io/SideStore/Assets/altbadge.png" alt="Get on AltStore" style="width: 246px; height: 82px; vertical-align: middle; object-fit: contain;" /></a>';
}
parentContainer.appendChild(newElement);
