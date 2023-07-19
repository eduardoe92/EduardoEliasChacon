const addComponents = () => {
  const header = document.querySelector(".header");
  const contact = document.querySelector(".contact");
  const footer = document.querySelector(".footer");

  headerComponent(header);
  formContactComponent(contact);
  footerComponent(footer);
};

addComponents();
