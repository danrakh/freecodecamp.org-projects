function checkCashRegister(price, cash, cid) {

  const NOMINALS = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];

  let startingChange = (Math.round((cash - price) * 100));
  let changeToReturn = startingChange;
  // console.log('Change to return before deduction ', changeToReturn);

  let fillMyCash = function (arr){
    let myArr = [];
    arr.forEach(e => e[1] > 0 ? myArr.push(Math.round(e[1]*100)) : myArr.push(0));
    return myArr;
  };
  
  let myStartingCash = fillMyCash(cid);
  let myCash = fillMyCash(cid); //nie moze byc let myCash=myStartingCash bo wtedy myStartingCash tez mutuje razem z myCash

  for (let i = 8; i >= 0;) {
      if (changeToReturn >= NOMINALS[i] && myCash[i] - NOMINALS[i] >= 0) {
        myCash[i] = myCash[i] - NOMINALS[i];
        changeToReturn = changeToReturn - NOMINALS[i];
      } else {
          i--;
      };
  };

  console.log('NOMINALS',NOMINALS,'\n', 'myStartingCash',myStartingCash,'\n', 'myCash',myCash)
  // console.log('myCash after deduction ',myCash);
  // console.log('Change after deduction ', changeToReturn)
  // console.log(myStartingCash[5], ' - ', myCash[5]);

  let countTheRest = function (arr1, arr2) {
    // console.log('myCash in countTheRest',arr1,'myStartingCash in countTheRest',arr2)
    let myNominals = ['PENNY', 'NICKEL', 'DIME', 'QUARTER', 'ONE', 'FIVE', 'TEN', 'TWENTY', 'ONE HUNDRED'];
    let myArr = [];
    for (let j = 8; j >= 0; j--) {
      if (arr1[j] >= 0 && arr1[j] != arr2[j]) {
        myArr.push([myNominals[j], (arr2[j] - arr1[j])/100]);
        // console.log(myNominals[j], 'arr1[j] =', arr1[j], 'arr2[j] =', arr2[j]);
      };
    };
    return myArr;
  };

  let nominalsToReturn = countTheRest(myCash, myStartingCash);
  // console.log(nominalsToReturn);

  let myObj = {
    status : null,
    change : null
  };

  if (myCash.every(e => e == 0) && changeToReturn == 0) {
    myObj.status = 'CLOSED';
    myObj.change = cid;
  };

  if (myCash.some(e => e > 0) && changeToReturn == 0) {
    myObj.status = 'OPEN';
    myObj.change = nominalsToReturn;
  };

  if (changeToReturn > 0) {
    myObj.status = 'INSUFFICIENT_FUNDS';
    myObj.change = [];
  };

  console.log(myObj);
  // console.log(myCash);
  // console.log('Change to return after deduction ', changeToReturn);
  // return myObj;
}
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);