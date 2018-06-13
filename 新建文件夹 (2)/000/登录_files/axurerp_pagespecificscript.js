for(var i = 0; i < 16; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u3'] = 'center';
u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if ((GetWidgetText('u12')) == ('小红')) {

}
});
gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u8'] = 'top';document.getElementById('u10_img').tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (((GetWidgetText('u12')) == ('小红')) && ((GetWidgetText('u13')) == ('123123'))) {

	self.location.href='登录成功页面.html';

}
else
if (((GetWidgetText('u12')) != ('小红')) && ((GetWidgetText('u13')) != ('123123'))) {

	self.location.href='登录失败.html';

}
});
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u11'] = 'center';
u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if ((GetWidgetText('u13')) == ('123123')) {

}
});
gv_vAlignTable['u7'] = 'top';