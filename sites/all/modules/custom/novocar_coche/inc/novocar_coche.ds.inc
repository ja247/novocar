<?php
/**
 * @file  novocar_coche.ds.inc
 *
 * @brief Callback de los campos de "DS".
 */

/**
 * @brief Callback del campo "novocar_coche_media".
 *
 * @param field
 *    Field array.
 */
function novocar_coche_media_ds_callback($field) {

  $node = $field['entity'];

  $carousel = views_embed_view('coche_carousel', 'default', $node->nid);

  if (is_array($node->field_coche_media) && count($node->field_coche_media) > 0) {
    return ($carousel) ? $carousel : NULL;
  }

  return NULL;
}

/**
 * @brief Callback del campo "novocar_coche_pdf".
 *
 * @param field
 *    Field array.
 */
function novocar_coche_pdf_ds_callback($field) {

  $node = $field['entity'];

  return l(t('Descargar en pdf'),'printpdf/' . $node->nid, array('attributes' => array('class' => array('novocar-action-pdf'))));
}

/**
 * @brief Callback del campo "novocar_coche_new_search".
 *
 * @param field
 *    Field array.
 */
function novocar_coche_new_search_callback($field) {

  $novocar_coche_new_search = variable_get('novocar_coche_new_search', array('value' => NC_FP_NEW_SEARCH, 'format' => NC_FORMAT));

  return check_markup($novocar_coche_new_search['value'], $novocar_coche_new_search['format']);
}

/**
 * @brief Callback del campo "novocar_coche_geneal_info".
 *
 * @param field
 *    Field array.
 */
function novocar_coche_general_info_callback($field) {

  $novocar_coche_general_info = variable_get('novocar_coche_general_info', array('value' => NC_FP_GENERAL_INFO, 'format' => NC_FORMAT));

  return check_markup($novocar_coche_general_info['value'], $novocar_coche_general_info['format']);
}