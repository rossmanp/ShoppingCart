/* var sum = 0;
		for (var i = 0; i < items.length; i++ ){ 
	document.write("<br>" + items[i] + ": $" + printPrices[i] );	
	sum += prices[i];	
}	
var writeSum = sum.toFixed(2);
document.write("<br> The total price of the items is: $" + writeSum + "."); */
var sum = 0;
var cartArray = [0 , 0, 0, 0];
function GetSelectedItem(el)
{
    var e = document.getElementById(el);
    var strSel = "You added " + e.options[e.selectedIndex].text + " to your cart";	
    alert(strSel);
	cartArray[e.value]++;
}

function checkout(food){	
	for (var i = 0; i<food.length; i++){
		if (food[i] > 0){
			document.write("<br>You bought " + food[i] + " " + items[i] + " at a cost of $" + (prices[i] * food[i]));
			sum += (prices[i] * food[i]);
		}		
	}
	var writeSum = sum.toFixed(2);
	document.write("<br>Your total is: $" + writeSum + ". <br>Please come again!");
}

function resetCart(){
	confirm("Do you want to empty your cart?");
	alert("You have just emptied your cart.");
	cartArray = [0 , 0, 0, 0];
}