<?php
/**
 * @file  novocar-coche-media.tpl.php
 *
 * @brief Plantilla del "field_formatter": "novocar_coche_media".
 *
 * @param media
 *     Fichero renderizado.
 * @param class
 *     Clase de fichero.
 */
?>
<?php if ($media) : ?>
  <div id="novocar-coche-media">
    <div id="novocar-coche-media-inner" class="<?php print $type; ?>">
      <?php print $media; ?>
    </div>
  </div>
<?php endif; ?>