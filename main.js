var modal = document.getElementById('modal');

var img = document.getElementById('mule');
var modalImg = document.getElementById('img01');
img.onclick = function () {
  // modal.style.display = "block";
  modalImg.src = this.src;
  // captionText.innerhtml = this.alt;
}