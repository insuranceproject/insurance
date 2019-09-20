function load(){
    var index = 2;
    var length = $(".plan-mask-content").length;
    var plan_length = $(".plan-mask-header-row>td").length-1;
    $("#v-plan-model>ul>li").eq(index).find("a").addClass("on");
    $("#planProtect-txt").text($("#v-plan-model>ul>li>.on").text());
    i_focus(index+1,length);
}
function showuav() {
    $("#planType").parents(".c-select").click(function () {
        $(".multChoose").slideToggle();
    });
}
function showplan() {
    $("#planProtect-txt").parents(".c-select").click(function () {
        $("#v-plan-model").slideToggle();
    });
}
function choiceuav() {
    $("#itemsNav>a").click(function () {
        $("#itemsNav>a").removeClass("on");
        $(this).addClass("on");
        var index = $(this).index();
        $(".multChoose>.items").addClass("dis-none");
        $(".multChoose>.items").eq(index).removeClass("dis-none");
    });
}
function choicemodel() {
    $("#v-model>li").click(function () {
        $("#v-model>li>a").removeClass("on");
        $(this).find("a").addClass("on");
        var index = $(this).parents(".items").index();
        $("#itemsNav>a").removeClass("on");
        $("#itemsNav>a").addClass("on");
        $("#itemsNav>a").eq(0).removeClass("on");
        $(".multChoose>.items").addClass("dis-none");
        $(".multChoose>.items").removeClass("dis-none");
        $(".multChoose>.items").eq(0).addClass("dis-none");
        var text = $(this).find("a").text();
        var brandId = $(this).find("a").attr("i");
        var purId = $("#useType li .on").attr("i");
        $("#planType").text("");
        $("#planType").text(text);
        $.getJSON("/consumer/product/findModelByBrandId", {"brandId": brandId, "purId": purId}, function (result) {
            $("#v-type").empty();
            var ul = "";
            for (var i = 0; i < result.length; i++) {
                var model = result[i];
                ul += "<li><a i='" + model.modelId + "' price='" + model.modelPrice + "' href='javascript:;'>" + model.modelName + "</a></li>"
            }

            $("#v-type").append(ul);
        });
    });
}
function choicetype() {
    $("#v-type>li").live("click", function () {
        $("#v-type>li>a").removeClass("on");
        $(this).find("a").addClass("on");
        var text = $("#v-model>li>.on").text();
        text += " " + $(this).find("a").text();
        $("#planType").text("");
        $("#planType").text(text);
        $(".multChoose").slideUp();
        $.getJSON("/consumer/product/getPlanPrice", {
            "proId": $("#productId").text(),
            "modelPrice": $(this).find("a").attr("price")
        }, function (result) {
            for (var i = 0; i < result.length; i++) {
                $(".priceShow[i='" + result[i].planId + "']").text(result[i].planPrice);
            }
            $("#selectedPlanPrice").text($("#money").text());
        });

    });
}
function choicefocus() {
    $("#v-plan-model>ul>li").click(function () {
        $("#v-plan-model>ul>li>a").removeClass("on");
        $(this).find("a").addClass("on");
        var text = $(this).find("a").text();
        $("#v-plan-model").slideUp();
        $("#planProtect-txt").text(text);
        var index = $(this).find("a").attr("i");
        i_focus(index, length);
    });
}
function choicefocus2() {
    $("td[class^='plan-mask-td-']").click(function () {
        for (var i = 1; i <= plan_length; i++) {
            if ($(this).hasClass("plan-mask-td-" + i)) {
                i_focus(i, length);
                $("#v-plan-model a").removeClass("on");
                $("#v-plan-model a[i='" + i + "']").addClass("on");
                var text = $("#v-plan-model a[i='" + i + "']").text();
                $("#planProtect-txt").text(text);
            }
        }
    });
}
function i_focus(index,length){
    var left = 233+150*(index-1);
    var plan=$(".plan-mask-header-row>.plan-mask-td-"+index).find("span").text();

    //  var content1=$(".plan-mask-row-1>.plan-mask-td-"+index).find(".vam_dis").text();
    var div="<div id=\"planMaskSelectPanel\" class=\"plan-mask-select-panel\" ";
    div+=" style=\" display:none; width: 148px; height: 376.5px; top: -3.5px; opacity: 1; left:"+left+"px\">"
    div+="<div style=\"height:61px;line-height:61px \">";
    div+="<div class=\"plan-mask-text plan-mask-header\">"
    div+="<span>"+plan+"</span></div></div>";
    for (var i=1;i<=length;i++){
        var content = $(".plan-mask-row-"+i+">.plan-mask-td-"+index).find(".vam_dis").text();
        div+=" <div class=\"selected-panel-item plan-mask-content plan-mask-row-"+i+" plan-mask-td-"+index+"\"";
        if (i == 1){
            div+="style=\"height:64px;line-height:64px \">";
        } else{
            div+="style=\"height:84px;line-height:84px  \">";
        }
        div+="<div class=\"plan-mask-text\">";
        div+="<span class=\"vam_dis\">"+content+"</span>";
        div+="<span class=\"valignM\"></span></div></div>";
    }
    div+="<div class=\"selected-panel-item not-hover plan-mask-td-"+index+"\"";
    div+="style=\"height:25px;line-height:25px \">";
    div+="<div class=\"split-top\">&nbsp;</div> </div>";
    div+="<div class=\"selected-panel-item plan-mask-td-"+index+"\"";
    div+="style=\"height:45px;line-height:45px \">";
    var date=$(".plan-date>.plan-mask-td-"+index).find(".plan-mask-text").text();
    div+="<div class=\"plan-mask-text  \"> "+date+"</div></div>";
    div+="<div class=\"selected-panel-item plan-mask-td-"+index+"\"";
    div+="style=\"height:45px;line-height:45px \">";
    var use=$(".plan-use>.plan-mask-td-"+index).find(".plan-mask-text").text();
    div+="<div class=\"plan-mask-text  \">"+use+"</div></div>";
    div+="<div class=\"selected-panel-item \ plan-mask-td-"+index+" plan-mask-active\"";
    div+=" style=\"height:52px;line-height:52px \">";
    div+=" <div class=\"plan-mask-text plan-mask-price \">";
    var price=$(".plan-price>.plan-mask-td-"+index).find(".priceShow").text();
    var i=$(".plan-price>.plan-mask-td-"+index).find(".priceShow").attr("i");
    div+="<span id='money' class=\"priceShow\" i='"+i+"'>"+price+"</span><b> 元起</b>"
    div+="</div></div></div>";
    $("#selectedPlanPrice").text(price);
    $("#planMaskSelectPanel").remove();
    $("table").before(div);
    $("#planMaskSelectPanel").fadeIn();

}
function submit(){
    $(".subBtn").click(function () {
        var productId = $("#productId").text();
        var planId =$("#v-plan-model .on").attr("i");
        var brandId=0;
        var modelId = 0;
        if ($("#v-type .on").attr("i") != undefined) {
            modelId = $("#v-type .on").attr("i");
        }
        if($("#v-model .on").attr("i") != undefined){
            brandId = $("#v-model .on").attr("i");
        }

        var price = $("#selectedPlanPrice").text();
        var purId = $("#useType .on").attr("i");
        var location = "/consumer/product/insure?proId="+productId+"&planId="+planId+"&brandId="+brandId+"&modelId="+modelId+"&price="+price+"&purId="+purId;
        window.location=location;
    })
}