function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
const backgroundImages = [
    'background0.png',
    'background1.png',
    'background2.png',
    'background3.png',
    'background4.png',
    'background5.png'
  ];
  
  const randomIndex = getRandomNumber(0, backgroundImages.length);
  const randomBackgroundImage = backgroundImages[randomIndex];
  
  document.body.style.backgroundImage = `url('src/images/background/${randomBackgroundImage}')`;