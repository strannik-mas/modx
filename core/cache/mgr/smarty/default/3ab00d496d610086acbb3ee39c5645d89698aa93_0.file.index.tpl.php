<?php /* Smarty version 3.1.27, created on 2016-11-14 23:37:01
         compiled from "D:\domains\modx\manager\templates\default\workspaces\index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:31871582a125da6eb10_54546590%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3ab00d496d610086acbb3ee39c5645d89698aa93' => 
    array (
      0 => 'D:\\domains\\modx\\manager\\templates\\default\\workspaces\\index.tpl',
      1 => 1469081622,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '31871582a125da6eb10_54546590',
  'variables' => 
  array (
    'error' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_582a125da99aa4_05765608',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_582a125da99aa4_05765608')) {
function content_582a125da99aa4_05765608 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '31871582a125da6eb10_54546590';
echo (($tmp = @$_smarty_tpl->tpl_vars['error']->value)===null||$tmp==='' ? '' : $tmp);?>

<div id="modx-panel-workspace-div"></div>
<?php }
}
?>