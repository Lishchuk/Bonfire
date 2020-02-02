define([
  'jquery',
  'js/clearSelect',
  'domReady!'
], function($) {

    // BTN QTY
    $(".field.qty .control input").parent().prepend('<button class="subtract"></button>').append('<button class="add"></button>');

    $('.subtract').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.add').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    // CLEAR SELECT
    $('.product-options-wrapper .fieldset').clearSelect({
        "elementFind":".configurable",
        "elementBtn":".clear-select"
    });


     // BACK TO
    var bread = $('.product-info-main > .breadcrumbs');
    bread.before('<span class="back-to">Back to</span>');


     // SHOW REVIEW  BLOCK
    $('.action.view').on('click', function() {
        $('.product.info.detailed').css('display','block');
    });

    $('.action.add').on('click', function() {
        $('.product.info.detailed').css('display','block');
    });


    // hide block review when click on document
    $(document).mouseup(function (e){ 
        var div = $(".product.info.detailed"); 
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) { 
            div.hide(); 
        }
    });
});
