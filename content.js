// Fired when a message is sent from background script (by tabs.sendMessage).
chrome.runtime.onMessage.addListener(request => {
  if (request == "removeImage") {
    const selectedImages = document.querySelectorAll("img");
    selectedImages.forEach(image => {
      image.parentNode.removeChild(image);
    });
  }
});
