const headerComponent = (el) => {
  const header = document.createElement("header");
  header.classList.add("header-component");
  header.innerHTML = `
    <div class="header-component__container">
    <a href="./index.html" class="header-component__logo">
    <img src="img/LogoRectangular.png" alt="Logo"></a>
      <nav class="header-component-nav">
        <ul>
          <li><a href="./portafolio.html">Portafolio</a></li>
          <li><a href="./knowledge.html">Conocimientos</a></li>
          <li><a href="./contact.html">Contacto</a></li>
        </ul>
      </nav>
      <div class="menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    `

  el.appendChild(header);

  const menu = document.querySelector(".menu");
  menu.addEventListener("click", () => {
    document.querySelector(".header-component-nav").classList.toggle("active");
    menu.classList.toggle("active");
  });
};
const logoImage = document.querySelector('.header-component__logo img');
logoImage.width = 200;
