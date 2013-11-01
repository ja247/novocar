/**
 * @file select_list_themed.js
 *
 * @brief Añadimos unos span a los select list para facilitar su tematizado
 */
(function ($) {
  Drupal.behaviors.select_list_themed = {
    attach: function (context, settings) {

      var body = jQuery('body');

      if (body.length) {

        // Añadimos un wrapper a todos los select
        body.find('select:not(processed)').addClass('processed').wrap('<div class="select-list-wrapper" />').parent().append('<span class="select-list-span"><span class="select-list-span-text"></span><span class="select-list-span-icon"></span></span>');

        body.find('.select-list-wrapper').each(function (key, value) {
          var select = $(value).children('select');
          var name = select.find('option:selected').html();
          $(value).children('.select-list-span').children('.select-list-span-text').html(name);
        });

        body.find('select').focus(function() {
          $(this).parent().children('.select-list-span').addClass('onfocus');
        });

        body.find('select').blur(function() {
          $(this).parent().children('.select-list-span').removeClass('onfocus');
        });
	
	body.find('select:disabled').parent().children('.select-list-span').addClass('disabled');
	/*
	if (body.find('select').is(':disabled')) {
	  $(this).addClass('mierda');
	  console.log($(this));
	  //this.parent().children('select-list-span').addClass('disabled');
	}*/
	
	//body.find('select').is(':disabled').parent().children('.select-list-span').addClass('select-list-disabled');

        body.find('select.error').parent().children('.select-list-span').addClass('error');

        body.find('select').change(function() {
          var select_value = $(this).children('option:selected').text();

          $(this).parent().children('.select-list-span').children('.select-list-span-text').text(select_value);
        });

      }
    }
  }
})(jQuery);
