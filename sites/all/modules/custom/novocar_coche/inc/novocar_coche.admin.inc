<?php
/**
 * @file  novocar_coche.admin.inc
 *
 * @brief Configuración del módulo.
 */

/**
 * @brief Función que genera el formulario de configuración del módulo.
 */
function novocar_coche_settings_form($form_state) {

  $form = array();

  $form['ficha'] = array(
    '#type'        => 'fieldset',
    '#title'       => 'Ficha del producto',
    '#collapsible' => TRUE,
    '#collapsed'   => FALSE,
  );

  $novocar_coche_new_search = variable_get('novocar_coche_new_search', array('value' => NC_FP_NEW_SEARCH, 'format' => NC_FORMAT));

  $form['ficha']['novocar_coche_new_search'] = array(
    '#type'          => 'text_format',
    '#title'         => 'Texto del campo "Seguir buscando"',
    '#default_value' => $novocar_coche_new_search['value'],
    '#format'        => $novocar_coche_new_search['format'],
  );

  $novocar_coche_general_info = variable_get('novocar_coche_general_info', array('value' => NC_FP_GENERAL_INFO, 'format' => NC_FORMAT));

  $form['ficha']['novocar_coche_general_info'] = array(
    '#type'          => 'text_format',
    '#title'         => 'Texto del campo "Información general"',
    '#default_value' => $novocar_coche_general_info['value'],
    '#format'        => $novocar_coche_general_info['format'],
  );

  return system_settings_form($form);
}
