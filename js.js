// 取得三個按鈕

const all = document.querySelectorAll('#all');
const nature = document.querySelectorAll('#nature');
const city = document.querySelectorAll('#city');

// 取得所有的圖片
const allImg = document.querySelectorAll('img');
const natureImg = document.querySelectorAll('.nature');
const cityImg = document.querySelectorAll('.city');

//按下all按鈕，顯示allImg
all.forEach((button) => {
  button.addEventListener('click', () => {
    allImg.forEach((img) => {
      img.style.display = 'block';
    });
    natureImg.forEach((img) => {
      img.style.display = 'block';
    });
    cityImg.forEach((img) => {
      img.style.display = 'block';
    });
  });
});
//按下nature按鈕，顯示natureImg
nature.forEach((button) => {
  button.addEventListener('click', () => {
    allImg.forEach((img) => {
      img.style.display = 'none';
    });
    natureImg.forEach((img) => {
      img.style.display = 'block';
    });
    cityImg.forEach((img) => {
      img.style.display = 'none';
    });
  });
});
//按下city按鈕，顯示cityImg
city.forEach((button) => {
  button.addEventListener('click', () => {
    allImg.forEach((img) => {
      img.style.display = 'none';
    });
    natureImg.forEach((img) => {
      img.style.display = 'none';
    });
    cityImg.forEach((img) => {
      img.style.display = 'block';
    });
  });
});


