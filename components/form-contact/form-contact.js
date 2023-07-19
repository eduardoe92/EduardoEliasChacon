const postForm = () => {
    const formEl = document.querySelector(".form-contact_inputs_container");

    formEl.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nombre = formEl.querySelector("#Nombre").value;
        const apellido = formEl.querySelector("#Apellido").value;
        const telefono = formEl.querySelector("#Telefono").value;
        const pais = formEl.querySelector("#Pais").value;
        const email = formEl.querySelector("#email").value;
        const mensaje = formEl.querySelector("#Mensaje").value;

        if (!nombre || !apellido || !email || !mensaje) {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Por favor, ingresa una dirección de correo electrónico válida.");
            return;
        }

        const data = {
            to: "eduardo.elias.9211@gmail.com",
            message: `Nombre: ${nombre}, Apellido: ${apellido}, Teléfono: ${telefono}, País: ${pais}, Email: ${email}, Mensaje: ${mensaje}.`,
        };

        try {
            const response = await fetch("https://apx-api.vercel.app/api/utils/dwf", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Hubo un problema al enviar el mensaje. Por favor, inténtalo nuevamente más tarde.");
            }

            alert("Mensaje enviado correctamente. ¡Gracias por contactarme!");
            formEl.reset();
        } catch (error) {
            alert(error.message);
        }
    });
};

const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

const formContactComponent = (el) => {
    const contactSection = document.createElement("section");
    contactSection.classList.add("contact");
    contactSection.innerHTML = `
    <div class="contact_container">
        <div class="contact_component">
            <div class="contact_component_text">
                <p>Gracias por querer ponerte en contacto conmigo. <br>
                    Estoy disponible para hablar contigo y responder cualquier pregunta o inquietud que puedas tener.
                    Para comunicarte conmigo, puedes completar el siguiente formulario, te comento que también
                    puedes contactarme a través de mis redes sociales.<br>
                    Por favor, ten en cuenta que mi tiempo puede ser limitado, pero haré todo lo posible por
                    responder a tu mensaje lo antes posible.<br>
                    <br>
                    ¡Espero tener noticias tuyas pronto!<br>
                    Saludos cordiales,<br>
                    <br>
                    Eduardo Chacon.<br>
                </p>
            </div>
        </div>
    </div>
    <div class="contact_inputs">
    <form class="form-contact_inputs_container">
        <div class="form-contact__container__inputs">
        <div class="form-contact__container__inputs__wrapper">
            <label for="Nombre">Nombre</label>
            <input type="text" id="Nombre" name="Nombre" placeholder="Nombre">
        </div>
        <div class="form-contact__container__inputs__wrapper">
            <label for="Apellido">Apellido</label>
            <input type="text" id="Apellido" name="Apellido" placeholder="Apellido">
        </div>
        <div class="form-contact__container__inputs__wrapper">
            <label for="Telefono">Telefono</label>
            <input type="number" id="Telefono" name="Telefono" placeholder="Telefono">
        </div>
        <div class="form-contact__container__inputs__wrapper">
            <label for="Pais">País</label>
            <select type="text" id="Pais" name="Pais" placeholder="País">
            <option value="">Selecciona un país</option>
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Perú">Perú</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Canadá">Canadá</option>
            <option value="España">España</option>
            <option value="Estados Unidos">Estados Unidos</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Honduras">Honduras</option>
            <option value="Mexico">Mexico</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Panama">Panama</option>
            <option value="República Dominicana">República Dominicana</option>
            <option value="Afganistán">Afganistán</option>
            <option value="Albania">Albania</option>
            <option value="Alemania">Alemania</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Antigua y Barbuda">Antigua y Barbuda</option>
            <option value="Arabia Saudita">Arabia Saudita</option>
            <option value="Argelia">Argelia</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaiyán">Azerbaiyán</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bangladés">Bangladés</option>
            <option value="Barbados">Barbados</option>
            <option value="Baréin">Baréin</option>
            <option value="Bélgica">Bélgica</option>
            <option value="Belice">Belice</option>
            <option value="Benín">Benín</option>
            <option value="Bielorrusia">Bielorrusia</option>
            <option value="Birmania">Birmania</option>            
            <option value="Bosnia y Herzegovina">Bosnia y Herzegovina</option>
            <option value="Botsuana">Botsuana</option>            
            <option value="Brunéi">Brunéi</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Bután">Bután</option>
            <option value="Cabo Verde">Cabo Verde</option>
            <option value="Camboya">Camboya</option>
            <option value="Camerún">Camerún</option>
            <option value="Catar">Catar</option>
            <option value="Chad">Chad</option>
            <option value="China">China</option>
            <option value="Chipre">Chipre</option>
            <option value="Ciudad del Vaticano">Ciudad del Vaticano</option>
            <option value="Comoras">Comoras</option>
            <option value="Corea del Norte">Corea del Norte</option>
            <option value="Corea del Sur">Corea del Sur</option>
            <option value="Costa de Marfil">Costa de Marfil</option>
            <option value="Croacia">Croacia</option>
            <option value="Cuba">Cuba</option>
            <option value="Dinamarca">Dinamarca</option>
            <option value="Dominica">Dominica</option>
            <option value="Egipto">Egipto</option>
            <option value="Emiratos Árabes Unidos">Emiratos Árabes Unidos</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Eslovaquia">Eslovaquia</option>
            <option value="Eslovenia">Eslovenia</option>
            <option value="Estonia">Estonia</option>
            <option value="Eswatini">Eswatini</option>
            <option value="Etiopía">Etiopía</option>
            <option value="Filipinas">Filipinas</option>
            <option value="Finlandia">Finlandia</option>
            <option value="Fiyi">Fiyi</option>
            <option value="Francia">Francia</option>
            <option value="Gabón">Gabón</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Ghana">Ghana</option>
            <option value="Granada">Granada</option>
            <option value="Grecia">Grecia</option>
            <option value="Guyana">Guyana</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-Bisáu">Guinea-Bisáu</option>
            <option value="Guinea Ecuatorial">Guinea Ecuatorial</option>
            <option value="Haití">Haití</option>
            <option value="Hungría">Hungría</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Irak">Irak</option>
            <option value="Irán">Irán</option>
            <option value="Irlanda">Irlanda</option>
            <option value="Islandia">Islandia</option>
            <option value="Islas Marshall">Islas Marshall</option>
            <option value="Islas Salomón">Islas Salomón</option>
            <option value="Israel">Israel</option>
            <option value="Italia">Italia</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japón">Japón</option>
            <option value="Jordania">Jordania</option>
            <option value="Kazajistán">Kazajistán</option>
            <option value="Kenia">Kenia</option>
            <option value="Kirguistán">Kirguistán</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Laos">Laos</option>
            <option value="Lesoto">Lesoto</option>
            <option value="Letonia">Letonia</option>
            <option value="Líbano">Líbano</option>
            <option value="Liberia">Liberia</option>
            <option value="Libia">Libia</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lituania">Lituania</option>
            <option value="Luxemburgo">Luxemburgo</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malasia">Malasia</option>
            <option value="Malaui">Malaui</option>
            <option value="Maldivas">Maldivas</option>
            <option value="Malí">Malí</option>
            <option value="Malta">Malta</option>
            <option value="Marruecos">Marruecos</option>
            <option value="Mauricio">Mauricio</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Micronesia">Micronesia</option>
            <option value="Moldavia">Moldavia</option>
            <option value="Mónaco">Mónaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Níger">Níger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Noruega">Noruega</option>
            <option value="Nueva Zelanda">Nueva Zelanda</option>
            <option value="Omán">Omán</option>
            <option value="Países Bajos">Países Bajos</option>
            <option value="Pakistán">Pakistán</option>
            <option value="Palaos">Palaos</option>
            <option value="Papúa Nueva Guinea">Papúa Nueva Guinea</option>
            <option value="Polonia">Polonia</option>
            <option value="Portugal">Portugal</option>
            <option value="Reino Unido">Reino Unido</option>
            <option value="República Centroafricana">República Centroafricana</option>
            <option value="República Checa">República Checa</option>
            <option value="República del Congo">República del Congo</option>
            <option value="República Democrática del Congo">República Democrática del Congo</option>
            <option value="República Sudafricana">República Sudafricana</option>
            <option value="Ruanda">Ruanda</option>
            <option value="Rumania">Rumania</option>
            <option value="Rusia">Rusia</option>
            <option value="Samoa">Samoa</option>
            <option value="San Cristóbal y Nieves">San Cristóbal y Nieves</option>
            <option value="San Marino">San Marino</option>
            <option value="San Vicente y las Granadinas">San Vicente y las Granadinas</option>
            <option value="Santa Lucía">Santa Lucía</option>
            <option value="Santo Tomé y Príncipe">Santo Tomé y Príncipe</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leona">Sierra Leona</option>
            <option value="Singapur">Singapur</option>
            <option value="Siria">Siria</option>
            <option value="Somalia">Somalia</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Suazilandia">Suazilandia</option>
            <option value="Sudán">Sudán</option>
            <option value="Sudán del Sur">Sudán del Sur</option>
            <option value="Suecia">Suecia</option>
            <option value="Suiza">Suiza</option>
            <option value="Surinam">Surinam</option>
            <option value="Tailandia">Tailandia</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Tayikistán">Tayikistán</option>
            <option value="Timor Oriental">Timor Oriental</option>
            <option value="Togo">Togo</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad y Tobago">Trinidad y Tobago</option>
            <option value="Túnez">Túnez</option>
            <option value="Turkmenistán">Turkmenistán</option>
            <option value="Turquía">Turquía</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Ucrania">Ucrania</option>
            <option value="Uganda">Uganda</option>
            <option value="Uzbekistán">Uzbekistán</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Yemen">Yemen</option>
            <option value="Yibuti">Yibuti</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabue">Zimbabue</option>
            </select>
        </div>
        <div class="form-contact__container__inputs__wrapper">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email">
        </div>
        <div class="form-contact__container__inputs__wrapper">
            <label for="Mensaje">Mensaje</label>
            <textarea id="Mensaje" name="Mensaje" placeholder="Escribe tu mensaje aquí"></textarea>
        </div>
        </div>
        <button type="submit" class="button">Enviar</button>
    </form>
    </div>
    `;
    el.appendChild(contactSection);
    postForm();
};
