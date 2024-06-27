/***************************************************************************************
 *                                                                                      *
 *                  CODERBYTE BEGINNER CHALLENGE                                        *
 *                                                                                      *
 *  c*
 *                                                                                      *
 ***************************************************************************************/
function ABCheck(str) {
  var match = str.search(/a...b/);
  if (match > -1) {
    return "true";
  } else {
    return "false";
  }
}
function ABCheckOptimize(str) {
  return str.search(/a...b/) > -1 ? true : false;
}
