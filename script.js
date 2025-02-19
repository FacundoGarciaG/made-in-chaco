const menu = document.querySelector("#menu-icon");
const navList = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "65px",
  duration: 2000,
  delay: 450,
  reset: true,
});

sr.reveal(".title", { delay: 2000, origin: "top" });
sr.reveal(".more", { delay: 2800, origin: "bottom" });
sr.reveal(".comment", { delay: 2500, origin: "left" });
sr.reveal(".icons", { delay: 2600, origin: "left" });
sr.reveal(".scroll-down", { delay: 1000, origin: "bottom" });
sr.reveal(".logo", { delay: 500, origin: "left" });
sr.reveal(".navlist", { delay: 500, origin: "rigth" });
