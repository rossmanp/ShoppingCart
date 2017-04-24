
  var items = ["Eggs", "Milk", "Bread", "Cheese"];
  var prices = [1.25,2.50,3.10,4.00];
  var printPrices = []
  var sel = document.getElementById('sel1');
	for(var i = 0; i < items.length; i++) {
    var opt = document.createElement('option');
	printPrices[i] = prices[i].toFixed(2);
    opt.innerHTML = items[i] + ": $" + printPrices[i];
    opt.value = i;
    sel.append(opt);
}
