<?php /* Smarty version 3.1.27, created on 2016-11-14 22:48:00
         compiled from "D:\domains\modx\manager\templates\default\welcome.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:15405582a06e06acdb0_06054439%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'cc2394d90574b4d5d462b95e0403ba4a3424aaf5' => 
    array (
      0 => 'D:\\domains\\modx\\manager\\templates\\default\\welcome.tpl',
      1 => 1469081622,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '15405582a06e06acdb0_06054439',
  'variables' => 
  array (
    'dashboard' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_582a06e06b8938_29778206',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_582a06e06b8938_29778206')) {
function content_582a06e06b8938_29778206 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '15405582a06e06acdb0_06054439';
?>
<div id="modx-panel-welcome-div"></div>

<div id="modx-dashboard" class="dashboard">
<?php echo $_smarty_tpl->tpl_vars['dashboard']->value;?>

</div><?php }
}
?>