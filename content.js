function hello() {
  alert("Hello");
}
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {
  if (request == "removeImage") {
    var removeImages = document.querySelectorAll("img");
    for (var i = 0; i < removeImages.length; i++) {
      let imgTag = removeImages[i];
      // console.log( imgTag.parentNode.parentNode.parentNode);

      if (imgTag.parentNode.parentNode.nodeName == "DIV") {
        imgTag.parentNode.parentNode.parentNode.removeChild(
          imgTag.parentNode.parentNode
        );
      } else {
        imgTag.parentNode.parentNode.removeChild(imgTag.parentNode);
        imgTag.parentNode.removeChild(imgTag);
      }
    }
  }
}

// var removeImages = document.querySelectorAll("img");

// for (var i = 0; i < removeImages.length; i++) {
//   var imgTag = removeImages[i];
//   if (removeImages[i].parentNode.nodeName == "A") {
//     console.log("Remove A tag");
//     // imgTag.previousSibling.parentNode.removeChild(imgTag.previousSibling);
//     //.removeChild(imgTag.previousSibling);
//     //imgTag.nextSibling.parentNode.removeChild(imgTag.nextSibling);
//     //console.log(imgTag.nextSibling);

//     // imgTag.parentNode.parentNode(imgTag.parentNode);
//     imgTag.parentNode.removeChild(imgTag);

//     //imgTag.parentNode.parentNode.removeChild(imgTag.parentNode);
//     //console.log(imgTag.parentNode.parentNode);
//     // imgTag.parentNode.parentNode.parentNode.removeChild(
//     //  imgTag.parentNode.parentNode
//     // );
//     //console.log(imgTag.parentNode.parentNode.parentNode);
//     //console.log(imgTag.previousSibling.parentNode);
//   } else {
//     // imgTag.parentNode.removeChild(imgTag);
//     console.log("remove img tag");
//   }
//   // console.log(removeImages[i].parentNode.nodeName);
//   // console.log(imgTag.parentElement);
//   // //console.log(removeImages[i]);

//   // //imgTag.parentNode.removeChild(imgTag);
// }
