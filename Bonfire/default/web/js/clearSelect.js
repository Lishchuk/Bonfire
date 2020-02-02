define([
        "jquery",
        "jquery/ui"
    ], function($) {
        'use strict';

        $.widget( "bonfire.clearSelect", {
            _create: function() {   

                var mainWrapper = $(this.element),
                    elementFind = mainWrapper.children(this.options.elementFind),
                    elementBtn = this.options.elementBtn;

                $(elementBtn).on("click", function (e) {
                    e.preventDefault();

                    elementFind.each(function (index) {
                        $(this).find('.super-attribute-select')[0].selectedIndex = 0;

                        if(index === 1) {
                            $(this).find('.super-attribute-select').attr('disabled', 'disabled');
                        }
                    });

                    $(".input-text.qty").val('1');
                });
            }
        });

        return $.bonfire.clearSelect;
    }
);