let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 
  52, 1001, 1002, 1003, 1004, 1005, 1006, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1018, 1019, 1020, 1021];

  Array.prototype.shuffle = function () {
    let input = this;
  
    for (let i = input.length - 1; i >= 0; i--) {
  
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let itemAtIndex = input[randomIndex];
  
      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    return input;
  }

  function replaceImage() {
    arr.shuffle();
    let random = arr[1];
    if(random > 1000) {
      fileType = 'gif';
    } else {
      fileType = 'jpg';
    }
    document.getElementById("left").src = "images/" + random + "_left." + fileType +"";
    document.getElementById("right").src = "images/" + random + "_right." + fileType +"";
    left.classList.add("-translate-x-10");
    right.classList.add("translate-x-10");
    setTimeout(function () {
      left.classList.remove("-translate-x-10");
      right.classList.remove("translate-x-10");
    }, 140);
  }
  
  function downloadRight(){
    const a  = document.createElement('a');
    a.setAttribute('download', "");
    a.href = document.getElementById("right").src
    a.click()
  }

  function downloadLeft(){
    const a  = document.createElement('a');
    a.setAttribute('download', "");
    a.href = document.getElementById("left").src
    a.click()
  }

  window.addEventListener("load", ()=>{replaceImage()})
