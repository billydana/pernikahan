// countdown.js

const hari = document.querySelector(".hari");
const jam = document.querySelector(".jam");
const menit = document.querySelector(".menit");
const detik = document.querySelector(".detik");

function addZero(num) {
  return num < 10 ? "0" + num : num;
}

// Set to 2 August 2025 at 00:00 WIB
const countDownDate = new Date("August 2, 2025 00:00:00 GMT+0700").getTime();

const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance >= 0) {
    hari.innerHTML = addZero(days);
    jam.innerHTML = addZero(hours);
    menit.innerHTML = addZero(minutes);
    detik.innerHTML = addZero(seconds);
  } else {
    clearInterval(x);
    hari.innerHTML = "00";
    jam.innerHTML = "00";
    menit.innerHTML = "00";
    detik.innerHTML = "00";
  }
}, 1000);
