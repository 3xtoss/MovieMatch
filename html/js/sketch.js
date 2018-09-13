var img;
var img_upload;

function setup() {
  //createCanvas(200,200);
  //background(0);
  img = select('#dragInside');
  img.dragOver(highlight);
  //img.dragOut(unhighlight);
  img.dragLeave(unhighlight);
  img.drop(gotFile, unhighlight);
  //console.log(img);
}

function gotFile(file) {
  createP(file.name);
  createP(file.type);
  createP(file.size);
  img_upload = createImg(file.data);
  img_upload.size(100,100);
}
function printSomething() {
  document.write("hello");
}
function highlight() {
  img.style('background-color','#ccc');
}
function unhighlight() {
  img.style('background-color','#FFF');
}
