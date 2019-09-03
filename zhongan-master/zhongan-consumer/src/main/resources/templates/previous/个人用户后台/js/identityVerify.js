/**
 * 验证选择
 */
 //初始化页面
 $(function(){

 	$("#btn-phone").on("click", function() {
        location.href = "modifyPhonePw.htm?sourceApp="+$("#sourceApp").val()+"&target="+$("#target_t").val();
    });
    $("#btn-mail").on("click", function() {
        location.href = "ModifyMailPw.htm?sourceApp="+$("#sourceApp").val()+"&target="+$("#target_t").val();
    });
    $("#btn-bankcard").on("click", function() {
        location.href = "modifyCardPw.htm?sourceApp="+$("#sourceApp").val()+"&target="+$("#target_t").val();
    });
 	
 	
 });
 
