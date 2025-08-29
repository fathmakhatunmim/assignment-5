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
//copy
document.querySelectorAll(".copyBtn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const serviceName = document.querySelector(".service-name").innerText;
      const serviceNumber = document.querySelector(".service-number").innerText;

      const counterBtn = document.getElementById("copyCount");
      let count = parseInt(counterBtn.innerText);
      count++;
      counterBtn.innerText = count + " Copy";

     
      alert(serviceName + " - " + serviceNumber + " copied!");
    });
  });
  //call history
document.querySelectorAll(".callBtn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = this.closest(".card"); 
    const Name = card.querySelector(".name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;

    const now = new Date();
    const time = now.toLocaleTimeString(); 
    const date = now.toLocaleDateString(); 

    const historyList = document.getElementById("callHistoryList");
    const li = document.createElement("li");
    li.innerText = `${Name} - ${serviceNumber} (${time})`;
    historyList.appendChild(li);
  });
});

document.getElementById("clearHistory").addEventListener("click", function () {
  document.getElementById("callHistoryList").innerHTML = "";
});