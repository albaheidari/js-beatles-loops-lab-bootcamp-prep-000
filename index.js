function theBeatlesPlay(musicians,instruments){
let arr = [ ];
for (let i=0;i< musicians.length; i++ ) {
  const str = musicians[ i ] + " plays "+ instruments[ i ];
  arr.push( str );
  
}
return arr;
}
function johnLennonFacts(facts){
  var array = [];
  var i = 0;
  
  while (i < facts.length) {
      array.push(facts[ i ] + "!!!");
       i++;
}
return array;
}

function iLoveTheBeatles(number) {
  let arr = [ ];
  var i = 0;
do{
  console.log("I love the Beatles!");
}
while( i<15);
}