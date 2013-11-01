/**
 * @file novocar_search.js
 */

(function ($) {
  Drupal.behaviors.novocar_search = {
    attach: function (context, settings) {

      $.fn.novocar_search_submit = function() {
        $('html, body').animate({ scrollTop: 270 }, 1000);
      };
    }
  }
})(jQuery);