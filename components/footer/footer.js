const footerComponent = (el) => {
    const footer = document.createElement("footer");
    footer.classList.add("footer-component");
    footer.innerHTML = `
    <div class="footer_container">
        
        <div class="footer_component_logo">
            <img src="img/LogoCuadrado.png" alt="Logo">
        </div>
        
        <div class="footer_list">
            <div class="footer-component__social">
                <ul class="footer-component__social-list">
                    <li class="footer_item"><a href="https://www.instagram.com/eduardo.e" target="_blank">Instagram<img src="./img/instagram.png"> </a></li>
                    <li class="footer_item"><a href="https://www.linkedin.com/in/eduardo-elias-chacon-marquez-b2a496242/" target="_blank">Linkedin<img src="./img/linkedin.png"> </a></li>
                    <li class="footer_item"><a href="https://github.com/eduardoe92" target="_blank">GitHub<img src="./img/github.png"> </a></li>
                </ul>
            </div>
        </div>
    </div>
    `
    el.appendChild(footer);
}
