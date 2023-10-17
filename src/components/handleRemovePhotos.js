const handleRemovePhotos = () => {
  const photoElements = document.querySelectorAll('.photo');
  photoElements.forEach((element) => {
    element.remove();
  });
};
