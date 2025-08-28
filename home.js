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
const balances = document.getElementsByClassName("callBalance");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function() {
    
    let balanceElem = balances[i];
    let balance = parseInt(balanceElem.innerText);

    balance = Math.max(0, balance - 20);
    balanceElem.innerText = balance;
  });
}