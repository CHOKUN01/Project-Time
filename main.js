const timeEle = document.querySelector(".time-element");
const dateEle = document.querySelector(".date-element");

function updateTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    timeEle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    let day = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();
    dateEle.innerHTML = `${day < 10 ? `0${day}` : day}  ::  ${month < 10 ? `0${month}` : month} :: ${year}`;
}

setInterval(updateTime, 1000);
