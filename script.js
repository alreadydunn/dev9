$(function(){
  
  $('#userSignInput').on('keyup', function(e) {
    
    var inputLength = $(this).val().length;
    $('#tiles').text(inputLength);
    updatePrice(inputLength);
  })
  
  $('#userFontInput').on('click', function(e) {
    var inputFont = $(this).is(':checked');
    
    updatePrice($('#userSignInput').val().length, inputFont)
    
  })
  
  $('#confirmOrder').on('click', function(e) {
   event.preventDefault();
    var retVal = confirm("Would you like to Pay and submit your order?");
               if( retVal == true ) {
                  alert ("Your order has been Submitted! You may now close this session");
				  location.reload();
                  return true;
               } else {
                  return false;
               }
  })
  
})
    
 function updatePrice(signLength, fontUpgrade) {
   var costPerTile = 5;
   
   if(fontUpgrade) {costPerTile = 6;}
   else {costPerTile = 5;}
   
   var subTotal = signLength * costPerTile;
   var shipping = 7;
   
   if(signLength != 0) {shipping = 7;}
   else {shipping = 0;}
   
   var grandTotal = subTotal + shipping;
   
   $('#subTotal').text('$'+subTotal);
   $('#shipping').text('$'+shipping);
   $('#grandTotal').text('$'+grandTotal);
   
   return grandTotal;
   
  }