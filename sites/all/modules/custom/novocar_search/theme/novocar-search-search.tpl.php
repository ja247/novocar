<?php
/**
 * @file  novocar-search-search.tpl.php
 *
 * @brief Estructura del bloque de búsqueda.
 *
 * @param form
 *     Array.
 */
?>

<div id="novocar-search-search">
  <div id="novocar-search-search-inner">
    <div id="novocar-search-search-form">
      <?php print render($form); ?>
    </div>
    <div id="novocar-search-search-results">
      <?php print $results; ?>
    </div>
  </div> <!-- novocar-search-search-inner -->
</div> <!-- novocar-search-search -->
