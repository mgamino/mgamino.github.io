//alert("Heyo from JS this time !");

//SETS SALES TAX FOR ALL PURCHASES
var tax = 0.1;

//FUNCTION TO CALCULATE SUM
function myCheckout (item1, item2, coupon){
  //IF COUPON IS WHOLE NUMBER, CONVERT TO DECIMAL
  if (coupon >= 1){
    coupon = coupon/100;
  }

  var subtotal = item1 + item2;
  var withCoupon = subtotal*(1-coupon);
  var total = withCoupon * (1-tax);
  return total;
}

//FUNCTION TO CHECK FOR BEING A NUMBER
function isNumeric(num){
    return !isNaN(num)
}

//MAKE SURE FIRST ITEM IS NUMBER AND STORE NUMBER
var firstItemString = prompt("what is the price of your first item?");
if (!isNumeric(firstItemString)){
  do {
    firstItemString = prompt ("please enter a valid number")
   } while (!isNumeric(firstItemString));
}
var firstItem = parseInt(firstItemString);

//MAKE SURE SECOND ITEM IS NUMBER AND STORE NUMBER
var secondItemString = prompt("what is the price of your second item?");
if (!isNumeric(secondItemString)){
  do {
     secondItemString = prompt ("please enter a valid number")
   } while (!isNumeric(secondItemString));
 }
var secondItem = parseInt(secondItemString);

//MAKE SURE DISCOUNT IS NUMBER
var discountString = prompt("what percentage is your coupon for");
if (!isNumeric(discountString)){
  do {
    discountString = prompt ("please enter a valid number")
 } while (!isNumeric(discountString));
}

//MAKE SURE DISCOUNT IS NOT 100 OR MORE AND STORE
if (parseInt(discountString)>99){
  do {
    discountString = prompt ("please enter a valid coupon")
 } while (parseInt(discountString)>99);
}
var discount = parseInt(discountString);


//RUN CHECKOUT FUNCTIONS
var amount = (myCheckout(firstItem, secondItem, discount));
alert("The tax was " + (tax*100)+ "% and your total is $"+(Math.round(amount * 100) / 100));
