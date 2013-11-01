/**
 * @file  novocar.js
 *
 * @brief Funcionalidades extras generales del tema
 */

(function ($) {
  Drupal.behaviors.novocar = {
    attach: function (context, settings) {

      // Añadimos efectos de colores.
      /// Botones de acción.
      $('input.form-submit.novocar-action, a.novocar-action').hover(
	function() {
	  $(this).stop().animate({backgroundColor: '#3f4739'});
	},
	function() {
	  $(this).stop().animate({backgroundColor: '#009201'});
	}
      );

      $('input.form-submit.novocar-action-pdf, a.novocar-action-pdf').hover(
        function() {
          $(this).stop().animate({backgroundColor: '#82090c'});
        },
        function() {
          $(this).stop().animate({backgroundColor: '#e40006'});
        }
      );


      /// Resultados de búsqueda.
        $('.view-novocar-search-result tbody tr').hover(
        function() {
          $(this).stop().animate({backgroundColor: '#E1DFE0'});
        },
        function() {
          $(this).stop().animate({backgroundColor: '#FFFFFF'});
        }
      );
    }
  }
})(jQuery);