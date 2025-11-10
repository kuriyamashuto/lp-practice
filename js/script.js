window.addEventListener("load", () => {
  const loader = document.getElementById("loading");
  console.log("Page fully loaded, fade out loader.");
  loader.classList.add("fadeout");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1500);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".skillsimg").forEach(img => {
    img.addEventListener("mouseenter", () => {
      img.classList.add("hovered");
    });
    img.addEventListener("mouseleave", () => {
      img.classList.remove("hovered");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".skillstext");
  const text = heading.textContent;
  heading.textContent = "";
  const chars = text.split("");
  chars.forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;
    heading.appendChild(span);
  });
  const spans = heading.querySelectorAll("span");
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.classList.add("visible");
    }, index * 150); 
  });
});