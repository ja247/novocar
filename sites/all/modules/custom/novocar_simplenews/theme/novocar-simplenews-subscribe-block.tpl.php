<?php
/**
 * @file  novocar-simplenews-subscribe-block.tpl.php
 *
 * @brief Estructura del bloque de suscripción.
 *
 * @param intro
 *     Html. Texto introductorio de la web.
 * @param form
 *     Array. Formulario de suscripción.
 */
?>

<div id="novocar-simplenews-subscribe-block">
  <div id="novocar-simplenews-subscribe-block-inner">
    <?php if ($intro) : ?>
      <div id="novocar-simplenews-subscribe-block-intro">
	<?php print $intro; ?>
      </div> <!-- novocar-simplenews-subscribe-block-intro -->
    <?php endif; ?>
    <div id="novocar-simplenews-subscribe-block-form">
	<?php print render($form); ?>
    </div> <!-- novocar-simplenews-subscribe-block-form -->
  </div> <!-- novocar-simplenews-subscribe-block -->
</div> <!-- novocar-simplenews-subscribe-block -->