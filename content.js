const newProfilePictureURL =
  "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png";


function replaceProfilePictures() {
  const profilePictures = document.querySelectorAll(
    "img.feed-shared-actor__avatar-image, img.ivm-view-attr__img--centered"
  );

  profilePictures.forEach((img) => {
    img.src = newProfilePictureURL;
    img.srcset = ""; 
  });
}

replaceProfilePictures();
setInterval(replaceProfilePictures, 2000);
