const countdown = document.querySelector(".countdown");

const interval = setInterval(() => {
  const deadline = new Date(2023, 11, 31, 24, 00, 00);
  console.log(deadline);

  const current = new Date();
  console.log(current);

  const diff = deadline - current;
  console.log(diff);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
  console.log(days);

  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
  console.log(hours);

  const minutes = Math.floor((diff / (1000 * 60)) % 60) + "";
  console.log(minutes);

  const seconds = Math.floor((diff / 1000) % 60) + "";
  console.log(seconds);

  countdown.innerHTML = `
    <div data-content="Days">${days.length === 1 ? `0${days}` : days}</div>
    <div data-content="Hours">${hours.length === 1 ? `0${hours}` : hours}</div>
    <div data-content="Minutes">${
      minutes.length === 1 ? `0${minutes}` : minutes
    }</div>
    <div data-content="Seconds">${
      seconds.length === 1 ? `0${seconds}` : seconds
    }</div>
    `;

  if (diff < 0) {
    clearInterval(interval);
    countdown.innerHTML = "<h1>Here we GO!</h1>";
  }

  document.querySelector(".reset").addEventListener("click", () => {
    clearInterval(interval);

    const divs = document.querySelectorAll(".countdown div");

    divs.forEach((div) => {
      div.innerHTML = "00";
    });
  });
}, 1000);
