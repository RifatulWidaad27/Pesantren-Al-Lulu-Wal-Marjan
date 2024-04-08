const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const nameInput = document.getElementById("name");
const downloadBtn = document.getElementById("download-btn");

const image = new Image();
image.src = "Main.png";
image.onload = drawImage;

function drawImage() {
  // Clear the canvas before drawing (optional for some scenarios)
  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.font = "30px open sans";
  ctx.fillStyle = "#FFFFFF";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  // Get the actual text width for better centering
  const textWidth = ctx.measureText(nameInput.value).width;

  // Center the text horizontally using textWidth
  ctx.fillText(nameInput.value, canvas.width / 2 - textWidth / 2, 841.8);
}

nameInput.addEventListener("input", drawImage);

downloadBtn.addEventListener("click", download);

function download() {
  const imageData = canvas.toDataURL("image/png", 1.0); // Use high quality PNG
  const link = document.createElement("a");
  link.href = imageData;
  link.download = "Ied Greeting Card - " + nameInput.value;
  link.click();
}
