
// cursor 
const rounded = document.querySelector('.cursor-rounded');
const pointed = document.querySelector('.cursor-pointed');

const movecursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  rounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  pointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove',movecursor);

// cursor end


// hamburger
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  // hamburger end