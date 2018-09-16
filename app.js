const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();


client
  .labelDetection("html/images/images.jpeg")
  .then((results) => {
    const labels = results[0].labelAnnotations;
    console.log('Labels:');
    labels.forEach((label) => {
      console.log(label.description);
    });
  })
  .catch((err) => {
    console.error('Error:',err);
  })
