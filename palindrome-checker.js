function palindrome(str) {
    const REGEXP = /[^a-zA-Z\d]/g;
    let myStr = str.replace(REGEXP, '').toLowerCase();
    let myArr = myStr.split('');
    let revArr = [];
    for (let i = myArr.length - 1; i >= 0; i--) {
        revArr.push(myArr[i]);
    };
    let revStr = revArr.join('');
    return myStr == revStr;
  };
  
  palindrome("A man, a plan, a canal. Panama");