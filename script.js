document.querySelector('.btn').addEventListener('click', function(){
  function calculateTip(bill) {
      let tip;
      if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
      } else {
        tip = bill * 0.2;
      }
      return tip;
    }
    
    const bill1 = document.querySelector("#input").value;
    const tip1 = calculateTip(bill1);
    console.log(`For bill of ${bill1}, the tip is ${tip1}`);
})