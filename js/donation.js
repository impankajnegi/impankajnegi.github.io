$(document).ready(function(){

    $('#searchbar').focus();

    $('#donate-buttons').on('click', '.btn-blue', function(e) {
      e.preventDefault();
      $('.active').removeClass('active');
      $('#other-input').hide().siblings('#other').show();
      $(this).filter('.btn-blue').addClass("active");
      var value = $(this).data('impact');
      $(this).closest('div').find('p').text("" + value);
      $('#other-input').find('input').val('');  
    });
      
    $('.btn-green#donate-init').on('click', function() {    
        debugger;     
      var dollar;
      var input = $('#other-input').find('input').val();
      if (!input ) {
        var selectedValue = $('.active').data('dollars');
        if(selectedValue == undefined){dollar="00" } 
        else dollar  =selectedValue
       } else if ( $.trim(input) === '' || isNaN(input)) {
        // empty space leaves value = 'undefined'. 
        // Have to fix $.trim(input) == '' above so that it works.
        console.log('Yes');
        dollar = "Please enter a number.";  
      } else {
        dollar = input;
      }
        $('#price').text(""+dollar);
    
    });

    $('#other').on('click', function(e) {
      e.preventDefault(); 
      var buttons = $(this).parent('#donate-buttons');
      buttons.find('.active').removeClass('active');
      var other = $(this).hide().siblings('#other-input');
      other.show();
      other.find('input').focus();
      var pText = buttons.siblings('p');
      pText.text("Thank you!");
      var oValue = other.find('input');
      oValue.keyup(function() {
        if ( oValue.val() > 50 ) {
          pText.text("thanks for that!");
        } else {
          pText.text("Thank you!");
        }
      });
    }); 

    $('#donate-btn').on('click', function(e){
        e.preventDefault();
        //grt input ammount start
        var dollar;
        var input = $('#other-input').find('input').val();
        if ( !input ) {
          dollar = $('.active').data('dollars');
         } else if ( $.trim(input) === '' || isNaN(input)) {
          // empty space leaves value = 'undefined'. 
          // Have to fix $.trim(input) == '' above so that it works.
          console.log('Yes');
          dollar = "Please enter a number."; 
        } else {
          dollar = input;
        }
        //get input amount ands
        createOrder(dollar)
        $('#myModal').hide();
    })
  });