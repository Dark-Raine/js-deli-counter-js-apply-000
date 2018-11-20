function takeANumber(current){

 var response;
 var position;
 if (current.length > 0) {
   position = current[current.length-1];

 }else {
   position = 0;
 }

 current.push(position+1);

 return response;
}

function nowServing(current){
  var serving;
  var noOne = "There is nobody waiting to be served!";
  if (current.length > 0) {
    serving = "Currently serving " + current[0] + ".";
    current.shift();
    return serving;
  }else{
    return noOne;
  }
}

function currentLine(current){
  var inLine = "The line is currently: ";
  var noOne = "The line is currently empty.";
  var position;
  if (current.length > 0) {
    for (var i = 0; i < current.length; i++) {
      position = i+1;
      if(i < current.length-1){
      inLine += position + ". " + current[i] + ", ";
    }else{
      inLine += position + ". " + current[i];
    }
    }
    return inLine;
  }else{
    return noOne;
  }

}
