var sum = 0;
		for (var i = 0; i < items.length; i++ ){ 
	document.write("<br>" + items[i] + ": $" + printPrices[i] );	
	sum += prices[i];	
}	
var writeSum = sum.toFixed(2);
document.write("<br> The total price of the items is: $" + writeSum + ".");

function GetSelectedItem(el)
{
    var e = document.getElementById(el);
    var strSel = "and text is: " + e.options[e.selectedIndex].text;
    alert(strSel);
}