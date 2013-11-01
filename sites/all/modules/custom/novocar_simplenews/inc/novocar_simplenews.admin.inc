<?php
/**
 * @file  novocar_simplenews.admin.inc
 *
 * @brief Configuración del módulo.
 */

/**
 * @brief Función que genera el formulario de suscripción.
 */
function novocar_simplenews_settings_form($form_state) {

  $form = array();

  $intro= variable_get('novocar_simplenews_intro', array('value' => NS_INTRO, 'format' => NC_FORMAT));

  $form['novocar_simplenews_intro'] = array(
    '#type'          => 'text_format',
    '#title'         => 'Texto de introducción del bloque',
    '#default_value' => $intro['value'],
    '#format'        => $intro['format'],
  );

  return system_settings_form($form);
}