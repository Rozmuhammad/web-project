function toggleBlock() {
    var block = document.getElementById("myBlock");
            if (block.style.opacity === "0") {
                block.style.display = "block";
                setTimeout(function () {
                    block.style.opacity = "1";
                }, 10);
            } else {
                block.style.opacity = "0";
                setTimeout(function () {
                    block.style.display = "none";
                }, 300);
            }
  }