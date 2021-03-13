function rot13(str) {
    const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const CODE = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M']
    const REGEX = /[A-Z]/g;
    let myArr = str.split('');
    let changedArr = [];
    myArr.forEach(e => {
        if(e.match(REGEX)) {
            let i = ALPHABET.indexOf(e);
            changedArr.push(CODE[i]);
        } else {
            changedArr.push(e);
        };
    });
    // console.log(changedArr.join(''))
    return changedArr.join('');
  }
  
  rot13("SERR PBQR PNZC");