/**
 * @file novocar_contact.js
 */

(function ($) {
  Drupal.behaviors.novocar_contact = {
    attach: function (context, settings) {
      
      var page = $('body:not(.novocar-contact-processed)').addClass('novocar-contact-processed');
      
      if ((page.length) && ($('#colorbox').length)) {
	
	var timeoutRestoreId = 0;
	var timeoutCloseId = 0;
	
	jQuery('#novocar-contact-form-thankyou').hide();
	
	    jQuery('#colorbox #novocar-contact-form-popup .field-submit-wrapper').click(function() {	
	  alert('hola');
	  //page.find('#novocar-contact-form-loading').show();
	});
	
	$(document).bind('cbox_load', function(){ 
	  
	    jQuery('#novocar-contact-form-form').show();
	    jQuery('#novocar-contact-form-thankyou').hide();
	});
	
		
	$(document).bind('cbox_complete', function(){
	  
	    var height = jQuery('#novocar-contact-form-popup').height();
	    jQuery.colorbox.resize({width: 400, innerHeight: height});  
	    
	    jQuery('#colorbox #novocar-contact-form-popup .field-submit-wrapper').click(function() {	
	      alert('hola');
	      jQuery('#colorbox #novocar-contact-form-loading').show();
	    });
	});
	
	$(document).bind('cbox_closed', function(){
	  
	    clearTimeout(timeoutCloseId);
	    clearTimeout(timeoutRestoreId);
	    jQuery('#novocar-contact-form-form').show();
	    jQuery('#novocar-contact-form-thankyou').hide();
	});
	
	$.fn.novocar_contact_loading_start = function() {
	  page.find('#novocar-contact-form-loading').show();
        };
	
	$.fn.novocar_contact_loading_finish = function() {
	  page.find('#novocar-contact-form-loading').show();
        };
	
	$.fn.novocar_contact_resize = function() {
	  
	  var height = jQuery('#novocar-contact-form-popup').height();
          jQuery.colorbox.resize({width: 400, innerHeight: height});
        };
	
	$.fn.novocar_contact_process = function() {
          jQuery('#colorbox #novocar-contact-form-form').hide();
	  jQuery('#colorbox #novocar-contact-form-thankyou').fadeIn();
        };
	
	$.fn.novocar_contact_close = function() {
	  
          timeoutCloseId = setTimeout(function() {
            jQuery.colorbox.close()
          }, 3 * 1000);
        };
	
	$.fn.novocar_contact_restore = function() {
          timeoutRestoreId = setTimeout(function() {
            
          }, 3 * 1000);
        };
	
	//console.log(height);
	
	
        //jQuery.colorbox({ inline: true, href:"#novocar-contact-popup", fixed: true, width: 400, height: 200});

	
	//jQuery.colorbox.resize({width:400, innerHeight: 300});
	/*
        if (simplenews_colorbox_popup['resize'] == true) {
          var height = $('#simplenews-colorbox-popup').height();
          jQuery.colorbox.resize({width: simplenews_colorbox_popup['width'], innerHeight: height});
        }

        $.fn.simplenews_colorbox_popup_resize = function() {
          jQuery.colorbox.resize({width: simplenews_colorbox_popup['width'], innerHeight: height});
        };

        $.fn.simplenews_colorbox_popup_close = function() {
          setTimeout(function() {
            jQuery.colorbox.close()
          }, simplenews_colorbox_popup['close'] * 1000);
        };
        */
      } 
    }
  }
})(jQuery)