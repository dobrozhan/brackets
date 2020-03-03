module.exports = function check(str, bracketsConfig) {

  bracketsConfig = bracketsConfig.flat().sort().join('');
  var strArr = [];
  var pair = '';
  let strPush = '';

  for ( let i = 0; i < str.length-1; i++ ) {

      for ( let j = 0; j < bracketsConfig.length-1; j++ ) {

        if ( str[i] == bracketsConfig[j] && bracketsConfig.indexOf(bracketsConfig[j]) % 2 == 0 ) {
          pair = bracketsConfig[bracketsConfig.indexOf(bracketsConfig[j])+1];
          strPush = str[i] + pair;
          strArr.push(strPush);
        }
      }
    }

    strArr = strArr.sort().join('');

    if ( strArr.includes(bracketsConfig) && strArr.length == str.length ) {
      return true;
    } else {
      return false;
    }
};