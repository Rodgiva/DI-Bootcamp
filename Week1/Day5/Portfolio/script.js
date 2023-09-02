let contactFilter = document.getElementsByClassName("contact-filter")[0];

function openContact() {
  contactFilter.style.visibility =
    "visible";
  document.body.style.overflow = "hidden";

  document.body.addEventListener("click", (e) => {
    console.log(e.target.classList.value);
    if (
      e.target.classList.value == "contact-filter" &&
      e.target.classList.value != ""
    ) {
        contactFilter.style.visibility =
        "hidden";
      document.body.style.overflow = "visible";
    }
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const bar = entry.target.querySelector(".bar-value");

    if (entry.isIntersecting) {
      bar.classList.add("emergenceBar");
      return;
    }
    // bar.classList.remove("emergenceBar");
  });
});

observer.observe(document.querySelector(".css"));
observer.observe(document.querySelector(".js"));
observer.observe(document.querySelector(".php"));
observer.observe(document.querySelector(".sql"));
observer.observe(document.querySelector(".csharp"));


const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const xp = entry.target.querySelector(".xp-content");
  
      if (entry.isIntersecting) {
        xp.classList.add("emergence");
        return;
      }
  
    //   xp.classList.remove("emergence");
    });
  });

observer2.observe(document.querySelector(".xp1"));
observer2.observe(document.querySelector(".xp2"));
observer2.observe(document.querySelector(".xp3"));
observer2.observe(document.querySelector(".xp4"));
observer2.observe(document.querySelector(".xp5"));
