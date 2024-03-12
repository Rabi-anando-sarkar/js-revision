const xhr = new XMLHttpRequest();
const requestURL = `https://api.github.com/users/Rabi-Anando-Sarkar`;
const table = document.querySelector(".table");
const clickHere = document.querySelector(".click");

xhr.open("GET", requestURL);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    clickHere.addEventListener("click", (e) => {
      table.innerHTML = `
            <h3> Name : ${data.name}</h3>
            <h3> ID : ${data.id}</h3>
            <h3> Public Repos : ${data.public_repos}</h3>
            <img src= ${data.avatar_url} alt="alternatetext" width="100px" height="100px">
        `
    });
    console.log(data.followers);
  }
};

xhr.send();
