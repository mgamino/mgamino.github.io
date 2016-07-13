
var text = "ELEPHANTBEARMOUSECOW";
var wordToReplace = "MOUSE";

function makeOneLower (str, sub)
{
  var replaced = "";
  var start = str.indexOf(sub);
  for (i = 0; i < start; i++) {
    replaced += str.charAt(i);
  }
  for (i = start; i < start + sub.length; i++) {
    replaced +=str.charAt(i).toLowerCase();
  }

  for (i = start + sub.length; i < str.length; i++) {
    replaced += str.charAt(i);
  }

  return replaced;
}

console.log(makeOneLower(text, wordToReplace));



var word = "hello";

function capitalizeFirst(str){
  var capitalized = "";
  capitalized +=str.charAt(0).toUpperCase();
  for (i = 1; i < str.length; i++) {
    capitalized+=str.charAt(i);
  }
  return capitalized;
}

function capitalizeLast(str){
  var capitalized = "";
  for (i = 0; i < str.length-1; i++) {
    capitalized+=str.charAt(i);
  }
  capitalized +=str.charAt(str.length -1).toUpperCase();
  return capitalized;
}


console.log(capitalizeFirst(word));
console.log(capitalizeLast(word));


var animal = ["lion", "tiger", "bear", "dog", "koala", "cat", "panda",
              "ostrich", "pig", "racoon", "monkey", "rat"];
function findAs (arr)
{
  var count = 0;
  for (i = 0; i<arr.length; i++)
  {
    for (j = 0; j<arr[i].length; j++)
    {
      if (arr[i].charAt(j).toLowerCase() == "a")
      {
        count ++;
      }
    }
  }
  return count;
}

console.log(findAs(animal));
