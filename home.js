//add love
document.querySelectorAll(".add_love").forEach((btn) => {
  btn.addEventListener("click", function () {
    const loveCounter = document.getElementById("love");
    let count = parseInt(loveCounter.innerText);
    count++;
    loveCounter.innerText = count;
  });
});

//call
const callButtons = document.getElementsByClassName("callBtn");
const balanceElem = document.querySelector(".callBalance"); 

for (let btn of callButtons) {
  btn.addEventListener("click", function() {
    if (balanceElem) {
      let balance = parseInt(balanceElem.innerText);
      balance = Math.max(0, balance - 20);
      balanceElem.innerText = balance;
    }

const card = btn.closest("div.w-[455px]"); 
if (card) {
  const name = card.querySelector(".card-name").innerText;
  const number = card.querySelector(".card-number").innerText; 
  alert(`${name}\n${number}`); 
}
  });
}