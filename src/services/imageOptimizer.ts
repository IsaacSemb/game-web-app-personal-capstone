const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const croppedImage = url.slice(0, index) + "crop/600/400/" + url.slice(index);

  console.log(croppedImage);

  return croppedImage;
};

export default getCroppedImageUrl;
