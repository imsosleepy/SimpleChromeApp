const clockContainer = document.querySelector(".js-clock");
const time = document.querySelector(".js-time");
const weeks = document.querySelector(".js-weeks");

const weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

function getTime() {
  // Don't delete this.
  const date = new Date();
  const year = date.getFullYear(); // 년도
  const month = date.getMonth() + 1;  // 월
  const day = date.getDate();  // 날짜
  const week = date.getDay() - 1;

  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  weeks.innerText = `${year}.${month}.${day}. ${weekDays[week]}.`;
  time.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
