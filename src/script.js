const fileInput = document.querySelector("input");
const downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", (event) => {
  event.preventDefault();
  fetchFile(fileInput.value);
});

function fetchFile(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let tempUrl = URL.createObjectURL(file);
      let aTag = document.createElement("a");
      aTag.href = tempUrl;
      aTag.download = "filename";
      document.body.appendChild(aTag);
      console.log(tempUrl);
      aTag.click();
      aTag.remove();
    });
}
