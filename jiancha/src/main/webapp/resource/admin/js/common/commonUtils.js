/**
 * Created by hanpan on 2016/12/06
 * common Utils class
 */
$(function(){
    //menus options
    $('.treeview a').on('click', function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        $(this).parents('.treeview').siblings().find('ul li').removeClass('active');
    });
});


