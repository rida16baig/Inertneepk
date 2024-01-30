let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.35,
};


let callback = (enteries, observer) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.className === "image") {
      let imgURL = entry.target.getAttribute("data-img");
      if (imgURL) {
        entry.target.src = imgURL;
        observer.unobserve(entry.target);
      }
    }
  });
};

let observer = new IntersectionObserver(callback, options);

observer.observe(document.getElementById("img1"));
observer.observe(document.getElementById("img2"));
observer.observe(document.getElementById("img3"));
observer.observe(document.getElementById("img4"));
observer.observe(document.getElementById("img5"));
observer.observe(document.getElementById("img6"));
observer.observe(document.getElementById("img7"));
observer.observe(document.getElementById("img8"));
observer.observe(document.getElementById("img9"));
