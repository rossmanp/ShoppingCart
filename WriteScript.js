var sum = 0;
		for (var i = 0; i < items.length; i++ ){ 
	document.write("<br>" + items[i] + ": $" + prices[i] );	
	sum += prices[i];
}	
document.write("<br> The total price of the items is: " + sum + ".");