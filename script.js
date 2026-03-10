
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });




  function toggleDetails(btn) {
  const current = btn.nextElementSibling;
  const isOpen = current.classList.contains("show");

  document.querySelectorAll(".hidden-details").forEach(box => {
    box.classList.remove("show");
  });

  if (!isOpen) {
    current.classList.add("show");
  }
}





function search() {
  let input = document.getElementById("searchBox").value
                .toLowerCase()
                .trim();

  let items = document.querySelectorAll(".listing-card");

  items.forEach(list => {
    let text = list.textContent.toLowerCase();

    if (text.includes(input)) {
      list.style.display = "";
    } else {
      list.style.display = "none";
    }
  });
}




      
const navBar = () => {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger")


    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active")

        hamburger.classList.toggle("toggle")
    })
}


  navBar()






