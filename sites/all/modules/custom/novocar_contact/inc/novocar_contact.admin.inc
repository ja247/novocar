<?php
/**
 * @file  novocar_contact.admin.inc
 *
 * @brief Administración del módulo.
 */

/**
 * @brief Función que genera el formulario de administración del módulo.
 */
function novocar_contact_settings_form($form_state) {

  $form = array();

  $thankyou = variable_get('novocar_contact_thankyou', array('value' => NC_THANKS_CONTENT, 'format' => NC_FORMAT));

  $form['novocar_contact_thankyou'] = array(
    '#type'          => 'text_format',
    '#title'         => 'Texto de gracias del popup',
    '#default_value' => $thankyou['value'],
    '#format'        => $thankyou['format'],
  );

  $form['correo_electronico'] = array(
    '#type'  => 'fieldset',
    '#title' => 'Correo electrónico con información de la solicitud',
  );

  $form['correo_electronico']['novocar_contact_mail_emails'] = array(
    '#type'          => 'textfield',
    '#title'         => 'Correos a los que notificar',
    '#description'   => 'Separa los mails por una coma ",".',
    '#default_value' => variable_get('novocar_contact_mail_emails', NC_MAILS),
  );

  $form['correo_electronico']['novocar_contact_mail_subject'] = array(
    '#type'          => 'textfield',
    '#title'         => 'Asunto del correo',
    '#default_value' => variable_get('novocar_contact_mail_subject', NC_MAIL_SUBJECT),
  );

  $mail = variable_get('novocar_contact_mail_content', array('value' => NC_MAIL_CONTENT, 'format' => NC_FORMAT));

  $form['correo_electronico']['novocar_contact_mail_content'] = array(
    '#type'          => 'text_format',
    '#title'         => 'Contenido del correo',
    '#description'   => '<p>Tokens de reemplazo disponibles:</p><p><b>%nombre</b> => Nombre del solicitante</p><p><b>%enlace</b> => Página desde la que realiza el contacto</p><p><b>%telefono</b> => Teléfono del solicitante</p><p><b>%email</b> => Email del solicitante</p><p><b>%contenido</b> => Contenido de la solicitud</p>',
    '#default_value' => $mail['value'],
    '#format'        => $mail['format'],
  );

  return system_settings_form($form);
}