const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#tell-me");
const outputBox = document.querySelector("#output");

//EX:06
submitBtn.addEventListener('click',  submitHandler);

//EX 05
function calculateProfitAndLoss(initial, quantity, current){
  if(initial > current){
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    outputBox.innerText = (`Hey the loss is: ${loss} and the percentage is" ${lossPercentage}%`);
  }else if(current > initial){
        var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 10;
    outputBox.innerText = `Hey the Profit is: ${profit} and the percentage is" ${profitPercentage}%`;
  
  }else{
    outputBox. innerText="Hey no pain no gain and no gain no pain!!";
  }

  }


function submitHandler(){
  var ip = Number(initialPrice.value);
  var qty = Number(quantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}






