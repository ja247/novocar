<?php
/**
 * @file  novocar-contact-form.tpl.php
 *
 * @brief Estructura del formulario de contacto.
 *
 * @param $link
 *     String. Cadena de texto que lanza el popup.
 * @param $contact_form
 *     Array. Formulario de contacto.
 * @param $loading
 *     Gif con el efecto de carga.
 * @param $thankyou
 *     String.Cadena de texto utilizado como gracias.
 */
?>
<div id="novocar-contact-form">
  <div id="novocar-contact-form-inner">
    <div id="novocar-contact-form-link">
      <?php print $link; ?>
    </div>
    <div id="novocar-contact-form-popup">
      <div id="novocar-contact-form-form">
	<?php print render($contact_form); ?>
      </div>
      <div id="novocar-contact-form-loading">
	<?php print $loading; ?>
      </div>
      <div id="novocar-contact-form-thankyou">
	<?php print $thankyou; ?>
      </div>
    </div> <!-- novocar-contact-form-popup -->
  </div> <!-- novocar-contact-form -->
</div> <!-- novocar-contact-form -->