'use strict';
~ function() {
    var billArr = [124,48,268],
      tipArr = [],
      totalAmtArr = [],
      minBillAmt = 50,
      maxBillAmt = 200,
      percent,
      totalPaidAmount,
      eleStatement = document.getElementById("billStatement");
      
      eleStatement.innerHTML = "";

      for(var i=0; i<billArr.length; i++)
      {
        ((billArr[i]>minBillAmt)&&(billArr[i]<maxBillAmt))?percent=15:(billArr[i]<=minBillAmt)?percent=20:percent=10;
        // if((billArr[i]>minBillAmt) && (billArr[i]<maxBillAmt)) { 
        //   percent = 15;
        // }
        // else if((billArr[i]<=minBillAmt)) { 
        //   percent = 20;
        // }
        // else { 
        //   percent = 10;
        // }
        eleStatement.innerHTML += 'Jhon Restorent'+ (i+1) +'bill <b>$'+billArr[i]+'</b> He likes to tip '+percent+'%, he paid tip  <b>$'+ tipCalculator(billArr[i], percent) +'</b></p>';
        tipArr.push(tipCalculator(billArr[i], percent));
        totalPaidAmount = billArr[i]+tipCalculator(billArr[i], percent);
        totalAmtArr.push(totalPaidAmount);
      }
      eleStatement.innerHTML  += "</div>";
      console.log("Tip Amount Array = "+ tipArr);
      console.log("Total Paid Amount Array = "+ totalAmtArr);
      function tipCalculator(tip, percent){
        return parseFloat(( tip * (percent/100)).toFixed(2));
      }
}();
