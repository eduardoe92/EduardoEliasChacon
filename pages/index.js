const addCardTemplate = (params, id) => {
  const template = document.getElementById("card-template");
  const container = document.getElementById(`${id}`);

  const dataCard = params.items;
  dataCard.map((el, i) => {
    template.content.querySelector(".card__img").src = params.includes.Asset[i].fields.file.url;
    template.content.querySelector(".card_description__title").textContent = el.fields.title;
    template.content.querySelector(".card_description__detail").textContent = el.fields.description;
    template.content.querySelector(".card_description__link").href = el.fields.url;
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
  });
};

const getData = (type, id) => {
  fetch(
    `https://cdn.contentful.com/spaces/e9ivrq1o694l/environments/master/entries?access_token=2ZJxLxioa0CXpaYwTFBtCqd5hFgwG5ss0ZM7Lykgkp8&&content_type=${type}`)
    .then((response) => response.json())
    .then((data) => addCardTemplate(data, id));
};

const main = () => {
  const headerContainer = document.getElementById("header-container");
  const footerContainer = document.getElementById("footer-container");
  headerComponent(headerContainer);
  footerComponent(footerContainer);
  getData("presentation", "my-presentation");
  getData("sevices", "my-services");
};

main();


const presentationSection = document.createElement("section");
presentationSection.setAttribute("id", "my-presentation");
presentationSection.innerHTML = `
    <div class="card">
      <div class="card__img-containt">
        <img class="card_img_perso" src="img/yo.jpg" alt="Imagen personal">
      </div>
      <div class="card_description_perso">
        <h1>Eduardo Elias Chacon</h1>
        <p>Permítanme presentarme, soy Eduardo Elias Chacon, un apasionado Programador Web en constante formación.
        Actualmente resido en Buenos Aires, Argentina, aunque soy originario de Venezuela.</p>
        <p>A lo largo de mi trayecto académico, he invertido mi tiempo en adquirir conocimientos y habilidades relevantes para la industria. 
        Desde diciembre de 2022, he estado participando en el programa de formación de Egg Cooperation, y posteriormente, 
        desde marzo de 2023 hasta junio de 2023, en el programa de Programación Front-End de Eidos Global.</p>
        <p>Estos programas me han permitido desarrollar conocimientos en diversas áreas, como Java, JavaScript, HTML, CSS, Bootstrap, React, Github, MySQL, Wordpress y 
        Programación Orientada a Objetos (OPP). Además, cuento con experiencia en el uso de herramientas y programas de desarrollo, como Visual Studio, 
        Netbeans y Workbench. Además, he ampliado mis conocimientos de forma autodidacta a través de plataformas educativas como Udemy y Educacion IT.</p>
        <p>Siento una profunda pasión por la tecnología y el desarrollo web, y estoy comprometido a seguir aprendiendo cada día para 
        convertirme en un profesional de excelencia. Estoy dispuesto a asumir nuevos desafíos y formar parte de un equipo innovador que impulse 
        el cambio en el sector.</p>
      </div>
    </div>
  
`;

const container = document.querySelector("#container");
container.appendChild(presentationSection);



