
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
	document.write('<a href="file:///C:/Users/peter/OneDrive/Documents/ShoppingList/index.html">Go back to the store</a>');
}

function viewCart(food){
	var theTextBox = document.getElementById("textbox");
	theTextBox.value = "";
	for (var i = 0; i < cartArray.length; i++){
		if (cartArray[i] > 0){
		(theTextBox.value += "You have " + food[i] + " " + items[i] + " at a cost of $" + (prices[i] * food[i]));
		}
	}	
    
}

function resetCart(){
	confirm("Do you want to empty your cart?");
	alert("You have just emptied your cart.");
	cartArray = [0, 0, 0, 0];	
}