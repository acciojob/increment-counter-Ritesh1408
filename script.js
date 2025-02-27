let countval = document.getElementById("counter");
const btn = document.getElementById("incrementBtn");
let count = 0;

countval.textContent = count;

btn.onclick = function () {
    alert(count);
    count++;
    countval.textContent = count;
};
