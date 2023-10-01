const pages = [
  {
    title: 'Introduccion',
    subtitle: 'AdeptusTeam',
    text: 'Somos un equipo dedicado a la creación de contenido en Minecraft, animaciones, programación, ilustración y construcción. Nos especializamos en proyectos que requieren asistencia en varias áreas como creación de mods/plugins, trailers, paquetes de recursos y más. También tenemos experiencia en la creación de eventos, servidores y redes, todos con características únicas.',
    pageImg: 'none',
    pageUrls: 'https://adeptus-team.web.app/\nhttps://twitter.com/TeamAdeptus\nhttps://discord.gg/e4UKBMkkeU\nhttps://www.instagram.com/adeptusteam/',
    pageNumber: 1
  },
  {
    title: 'Índice',
    subtitle: '',
    text: 'Página 1: Introduccion\nPágina 2: Índice\nPágina 3: Crafteos\nPágina 4: Implementaciones\nPágina 5: Proyectos\nPágina 6: Ideas\nPágina 7: Vision\nPágina 8: Redes\nPágina 9: Noticias y anuncios\nPágina 10: Mas info.\n',
    pageImg: 'none',
    pageUrls: '',
    pageNumber: 2
  },
  {
    title: 'Introduccion',
    subtitle: 'AdeptusTeam',
    text: 'Somos un equipo dedicado a la creación de contenido en Minecraft, animaciones, programación, ilustración y construcción. Nos especializamos en proyectos que requieren asistencia en varias áreas como creación de mods/plugins, trailers, paquetes de recursos y más. También tenemos experiencia en la creación de eventos, servidores y redes, todos con características únicas.',
    pageImg: 'none',
    pageUrls: 'https://adeptus-team.web.app/\nhttps://twitter.com/TeamAdeptus\nhttps://discord.gg/e4UKBMkkeU\nhttps://www.instagram.com/adeptusteam/',
    pageNumber: 3
  },
  {
    title: 'Índice',
    subtitle: '',
    text: 'Página 1: Introduccion\nPágina 2: Índice\nPágina 3: Crafteos\nPágina 4: Implementaciones\nPágina 5: Proyectos\nPágina 6: Ideas\nPágina 7: Vision\nPágina 8: Redes\nPágina 9: Noticias y anuncios\nPágina 10: Mas info.\n',
    pageImg: 'none',
    pageUrls: '',
    pageNumber: 4
  }, {
    title: 'Introduccion',
    subtitle: 'AdeptusTeam',
    text: 'Somos un equipo dedicado a la creación de contenido en Minecraft, animaciones, programación, ilustración y construcción. Nos especializamos en proyectos que requieren asistencia en varias áreas como creación de mods/plugins, trailers, paquetes de recursos y más. También tenemos experiencia en la creación de eventos, servidores y redes, todos con características únicas.',
    pageImg: 'none',
    pageUrls: 'https://adeptus-team.web.app/\nhttps://twitter.com/TeamAdeptus\nhttps://discord.gg/e4UKBMkkeU\nhttps://www.instagram.com/adeptusteam/',
    pageNumber: 5
  },
  {
    title: 'Índice',
    subtitle: '',
    text: 'Página 1: Introduccion\nPágina 2: Índice\nPágina 3: Crafteos\nPágina 4: Implementaciones\nPágina 5: Proyectos\nPágina 6: Ideas\nPágina 7: Vision\nPágina 8: Redes\nPágina 9: Noticias y anuncios\nPágina 10: Mas info.\n',
    pageImg: 'none',
    pageUrls: '',
    pageNumber: 6
  },
  

  // Agrega más páginas según sea necesario
];

let currentPageLeft = 0;
let currentPageRight = 1;

function updatePageContentLeft() {
  const { title, subtitle, text, pageImg, pageNumber, pageUrls } = pages[currentPageLeft];
  document.getElementById('pageTitle').innerText = title;
  document.getElementById('pageSubtitle').innerText = subtitle;
  document.getElementById('pageText').innerText = text;
  if (pageImg == 'none') {
    document.getElementById('pageImg').src = './src/images/none.png';
  }else if (pageImg != 'none') {
    document.getElementById('pageImg').src = pageImg;
  }
  document.getElementById('pageUrls').innerText = pageUrls;
  document.getElementById('pageNumber').innerText = 'Pg N°: ' + pageNumber;
  // Aquí puedes cambiar la imagen de fondo del libro si lo necesitas
}


function updatePageContentRight() {
  const { title, subtitle, text, pageImg, pageNumber, pageUrls } = pages[currentPageRight];
  document.getElementById('pageTitle2').innerText = title;
  document.getElementById('pageSubtitle2').innerText = subtitle;
  document.getElementById('pageText2').innerText = text;
  if (pageImg == 'none') {
    document.getElementById('pageImg2').src = './src/images/none.png';
  }else if (pageImg != 'none') {
    document.getElementById('pageImg2').src = pageImg;
  }
  document.getElementById('pageUrls2').innerText = pageUrls;
  document.getElementById('pageNumber2').innerText = 'Pg N°: ' + pageNumber;
  // Aquí puedes cambiar la imagen de fondo del libro si lo necesitas
}

function nextPageLeft() {
  if (currentPageLeft < pages.length - 2) {
    currentPageLeft++;
    currentPageLeft++;
    updatePageContentLeft();
  }
}
function nextPageRight() {
  if (currentPageRight < pages.length - 2) {
    currentPageRight++;
    currentPageRight++;
    updatePageContentRight();
  }
}
function goToPage(event) {
  event.preventDefault();

  // Obtén el número de página del enlace clicado
  const pageNumber = parseInt(event.target.innerText.split('-')[0].trim(), 10);

  if (!isNaN(pageNumber)) {
    // Asegurémonos de que el número de página sea impar
    const targetPageNumber = pageNumber % 2 === 0 ? pageNumber - 1 : pageNumber;

    // Calcula las páginas correspondientes al número de página
    const leftPageNumber = targetPageNumber;
    const rightPageNumber = targetPageNumber + 1;

    // Verifica si los números de página están dentro del rango
    if (leftPageNumber <= pages.length && rightPageNumber <= pages.length) {
      currentPageLeft = leftPageNumber - 1;
      currentPageRight = rightPageNumber - 1;

      // Actualiza el contenido de ambas páginas
      updatePageContentLeft();
      updatePageContentRight();
    }
  }
}

function previousPageLeft() {
  if (currentPageLeft > 0) {
    currentPageLeft--;
    currentPageLeft--;
    updatePageContentLeft();
  }else {

  }
}
function previousPageRight() {
  if (currentPageRight > 1) {
    currentPageRight--;
    currentPageRight--;
    updatePageContentRight();
  }else {

  }
}

// Asocia las funciones a las flechas
const arrowLeft = document.querySelector('.bottom-left');
const arrowRight = document.querySelector('.bottom-right');

arrowLeft.addEventListener('click', previousPageRight);
arrowLeft.addEventListener('click', previousPageLeft);
arrowRight.addEventListener('click', nextPageRight);
arrowRight.addEventListener('click', nextPageLeft);

// Carga la primera página
updatePageContentRight();
updatePageContentLeft();


const indexLinks = document.querySelectorAll('.indexTexts');
indexLinks.forEach(link => {
  link.addEventListener('click', goToPage);
});



