import noImage from "../assets/no_image_placeholder.png";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const croppedImage = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return croppedImage;
};

export default getCroppedImageUrl;
