function telephoneCheck(str) {

    const FIRST = /^\d{3}\-\d{3}\-\d{4}$/;
    const SECOND = /^\(\d{3}\)\d{3}\-\d{4}$/;
    const THIRD = /^\(\d{3}\)\s\d{3}\-\d{4}$/;
    const FOURTH = /^\d{3}\s\d{3}\s\d{4}$/;
    const FIFTH = /^\d{10}$/;
    const SIXTH = /^1\s\d{3}\s\d{3}\s\d{4}$/;
    const SEVENTH = /^1\s\d{3}\-\d{3}\-\d{4}$/;
    const EIGHT = /^1\s\(\d{3}\)\s\d{3}\-\d{4}$/;
    const NINTH = /^1\(\d{3}\)\d{3}\-\d{4}$/;

    if(str.match(FIRST) != null || str.match(SECOND) != null || str.match(THIRD) != null || str.match(FOURTH) != null || str.match(FIFTH) != null || str.match(SIXTH) != null || str.match(SEVENTH) != null || str.match(EIGHT) != null || str.match(NINTH) != null) {
        return true;
    } else {
        return false
    };

  }
  
  telephoneCheck("1 (555)-555-5555");