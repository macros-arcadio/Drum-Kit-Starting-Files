function handleClick() {
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
}

for (var i = 0; i < 8; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {
    console.log(this);
    this.style.color="red";

  });
}


/*

  this.style.background - image: url("images/crash.png");
});*/
