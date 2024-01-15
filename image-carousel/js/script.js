let slides = document.querySelectorAll(".slide");
let btns = document.querySelectorAll(".btn");

// manual slide navigation carousel

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manual(i);
  });
});

let manual = (i) => {
  slides.forEach((e) => {
    e.classList.remove("active");
  });
  btns.forEach((e) => {
    e.classList.remove("active");
  });

  slides[i].classList.add("active");
  btns[i].classList.add("active");
};

// autoplay slide navigation carousel
let repeat = function () {
  let i = 0;
  let repeater = () => {
    setTimeout(() => {
      slides.forEach((e) => {
        e.classList.remove("active");
      });
      btns.forEach((e) => {
        e.classList.remove("active");
      });
      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if(i >= slides.length){
        i=0;
      }
      repeater();
    }, 2000);
  };
  repeater();
};


repeat();