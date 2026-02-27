const parentContainer = document.currentScript.parentElement;
const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};
const newElement = document.createElement('div');
if (isIOS()) {
  newElement.innerHTML = '<script src="addsource.js"></script><a href="javascript:void(0)" style="display: inline-block;onclick="openStoreSources(); return false;">"><img src="https://x1cOfficial.github.io/SideStore/Assets/sidebadge.png" alt="Get on SideStore" style="width: 246px; height: 82px; vertical-align: middle; object-fit: contain;" /></a>';
  newElement.style.color = 'blue';
} else {
  newElement.innerHTML = '<a href="https://altsource.by.lao.sb/browse/?source=https%3A%2F%2Fx1cOfficial.github.io%2FSideStore%2Fapps.json" style="display: inline-block;"><img src="https://x1cOfficial.github.io/SideStore/Assets/sidebadge.png" alt="Get on SideStore" style="width: 246px; height: 82px; vertical-align: middle; object-fit: contain;" /></a>';
  newElement.style.color = 'green';
}
parentContainer.appendChild(newElement);
