function div (a, b){
    return a / b;
  }
  
function containsNumbers(text){
  for (let i = 0; i < text.length; i++) {
   if ((0x0030 <= text.charCodeAt(i) &&  text.charCodeAt(i) <= 0x0039))
    return true;
  }
  return false;
}
  
exports.div = div;
exports.containsNumbers = containsNumbers;