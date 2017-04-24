
  var items = ["Eggs", "Milk", "Bread", "Cheese"];
  var prices = [1.25,2.50,3.10,4.00];
  var sel = document.getElementById('sel1');
	for(var i = 0; i < items.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = items[i] + ": $" + prices[i];
    opt.value = prices[i];
    sel.append(opt);
}
