<?php /* Smarty version 3.1.27, created on 2016-11-14 22:48:39
         compiled from "D:\domains\modx\manager\templates\default\element\chunk\create.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:16304582a07075c7474_80189750%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'be572fc24990dc026d29806b6e5c8aae9dc68b84' => 
    array (
      0 => 'D:\\domains\\modx\\manager\\templates\\default\\element\\chunk\\create.tpl',
      1 => 1469081620,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '16304582a07075c7474_80189750',
  'variables' => 
  array (
    'onChunkFormPrerender' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_582a07075d2ff4_02006481',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_582a07075d2ff4_02006481')) {
function content_582a07075d2ff4_02006481 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '16304582a07075c7474_80189750';
?>
<div id="modx-panel-chunk-div"></div>
<?php echo $_smarty_tpl->tpl_vars['onChunkFormPrerender']->value;

}
}
?>