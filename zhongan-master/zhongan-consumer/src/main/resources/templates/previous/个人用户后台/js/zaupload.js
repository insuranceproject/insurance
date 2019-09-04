$(function(){			
	//上传控件事件-上传后显示效果
	$(".za-upload-holder > .za-upload-input").each(function(i,dom){
		//弹窗中上传显示样式
		if($(dom).parent().hasClass("za-upload-holderh100")){
			$(dom).live("change",function(){
				if($(this).val()!=""){
					if(fnFileFormat(this)){
						fnFileEventInit2(this);
					}
					else{
						fnFileClear(dom); 
					}
				}
			});
		}else{
			$(dom).live("change",function(){
				if($(this).val()!=""){
					if(fnFileFormat(this)){
						fnFileEventInit(this);
					}else{
						fnFileClear(dom); 
					}
				}
			});
		}
		
		$(dom).live("blur",function(){
			if($(this).next(".x-field-error").length>0){
				var errorObj = $(this).next(".x-field-error");
				$(this).parent().after(errorObj);
			}
		});
		
	});
	//上传控件事件-上传后显示效果一
	$(".za-upload-holder1 > .za-upload-input").each(function(i,dom){
		$(dom).live("change",function(){ 
			if($(this).val()!=""){
				if(fnFileFormat(this)){
					fnFileEventInit1(this);
				}
				else{
					fnFileClear(dom);
				}
			}
		});

		$(dom).live("blur",function(){
			if($(this).next(".x-field-error").length>0){
				var errorObj = $(this).next(".x-field-error");
				$(this).parent().after(errorObj);
			}
		});
	});
	
	$(".za-upload-del").live("click",function(){
		var $thisPrev=$(this).prev();
		$thisPrev.css("width","150");
		$thisPrev.find(".za-upload-txt").html("点击上传").attr("style",'backgroundImage:url("//static.zhongan.com/website/online/resource/images/za-ser-icon.png"');
		var $file=$thisPrev.find(".za-upload-input");
		$(this).remove();  
		fnFileClear($file[0]);
	});
	
});

function fnFileClear(dom){
	//dom.outerHTML="<input name='"+ $(dom).attr("name") +"' value='' type='file' style='position:absolute;height:85px;width:85px;cursor:pointer;opacity:0;filter:alpha(opacity:0);z-index:99;'  id='upload_"+ $(dom).attr("name") +"'/>";
	$(dom).val(""); 
	dom.select();  
	if(document.selection) document.selection.clear();
	
}

//上传控件验证文件格式 与 大小
function fnFileFormat(_this){
	fileObj=_this;
	var isIE = /msie/i.test(navigator.userAgent) && !window.opera; 
	var allowExtention = ".jpg,.bmp,.gif,.png,.jpeg,.txt,.doc,.xls,.pdf,.docx,.xlsx,.wps,.csv,.et";
	if($(fileObj).attr("fileformat")){
		allowExtention = $(fileObj).attr("fileformat");
	}
	var filemaxsize = 5;//单位为兆
	if($(fileObj).attr("filesize")){
		filemaxsize = $(fileObj).attr("filesize");
	}
//	filemaxsize = filemaxsize * 1024; //单位转为KB
	
	var extention = fileObj.value.substring(fileObj.value.lastIndexOf(".") + 1).toLowerCase();
	
	if (allowExtention.indexOf(extention) > -1) {
		
	}else{
		zaMessageShow("您上传的文件格式不正确，请重新选择！","error");
		return false;
	}
	
	var fileSize = 0;          
	if (isIE && !fileObj.files) {    
		  var filePath = fileObj.value; 
		  try{
			  var fileSystem = new ActiveXObject("Scripting.FileSystemObject");  
			  if(!fileSystem.FileExists(filePath)){  
				 zaMessageShow("附件不存在，请重新输入！","error");
				 return false;  
			  } 
			  var file = fileSystem.GetFile(filePath); 
			  fileSize = file.Size;     
		  }
		  catch(e){
			fileSize=10;
			return true;
		  }
		/*
		var image=new Image();
　　		image.src =filePath;
　　		alert(filePath+image.fileSize);
		fileSize=image.fileSize;
		*/
		
	} else {     
		  fileSize = fileObj.files[0].size;   
	}    
	  
	var size = fileSize / 1024;     
	if(size > filemaxsize*1024){   
		zaMessageShow("附件大小不能大于"+filemaxsize+"M！","error");
		return false;   
	}    
	if(size<=0){  
		zaMessageShow("附件大小不能为0M！","error");
		return false;
	}
	
	return true;
}

//文件上传显示效果一
function fnFileEventInit(_this){
	var $span=$("<span style='font-size:16px'>"+$(_this).val()+"</span>").hide().appendTo("body");
	var maxwid=$(_this).parent().parent().width()-$(_this).parent().prev().width();
	if($span.width() < maxwid-60)
	{
		$(_this).parent().css("width",$span.width()+30);
	}
	else{
		$(_this).parent().css("width",maxwid-70);
	}
	$(_this).prev().css("backgroundImage","none");
	$(_this).prev().html($(_this).val());
	if($(_this).parent().parent().find(".za-upload-del").length==0){
	  $(_this).parent().parent().append("<a href=\"javascript:;\" class=\"za-upload-del\">清空</a>");
	}
	$span.remove();
}

function fnFileEventInit2(_this){
	  var $span=$("<span style='font-size:16px'>"+$(_this).val()+"</span>").hide().appendTo(document.body);
	
	  $(_this).prev().css("backgroundImage","none");
	  $(_this).prev().html();
	  if($(_this).parent().find(".za-upload-del").length==0){
	  	$(_this).parent().append("<a href=\"javascript:;\" class=\"za-upload-del1\">清空</a>");
		//注册删除事件
		$(".za-upload-del1").live("click",function(){
			$(_this).parent().children(".za-upload-txt").html("点击上传").attr("style",'backgroundImage:url("../images/za-ser-icon.png"');
			var $file=$(this).parent().children(".za-upload-input");
			$file.val("");
			$(_this).remove();
		})
		//注册查看事件
		
	  }
	  previewImg(this);
	  $span.remove();
	  
}

function fnFileEventInit1(_this){
	  $(_this).parent().parent().find(".za-ins-textbox").val($(_this).val());
}

//本地即时显示上传图片
function previewImg(fileObj) {
    
	var imgPanel=$(fileObj).prev();//img外部层
	var allowExtention = ".jpg,.bmp,.gif,.png,.jpeg";
	var extention = fileObj.value.substring(fileObj.value.lastIndexOf(".") + 1).toLowerCase();
	var browserVersion = window.navigator.userAgent;
	var	img = $('<img width="120px" height="100px"/>');
	var upload=$(fileObj);
	if (allowExtention.indexOf(extention) > -1) {
		if (fileObj.files && fileObj.files[0]) {
			if (browserVersion.indexOf("Chrome") != -1
				|| window.navigator.userAgent.indexOf("Safari") != -1) {
				var src = window.webkitURL.createObjectURL(fileObj.files[0]);
				img.attr("src",src);
			}else if(window.navigator.userAgent.indexOf("Firefox") != -1){
				var src = window.URL.createObjectURL(fileObj.files[0]);
				img[0].src=src;
			}else if(window.navigator.userAgent.indexOf("MSIE 10.0") != -1){
		        var reader = new FileReader();
		        reader.readAsDataURL(fileObj.files[0]);
       		    reader.onload = function(e){
       		    	 img.attr("src",this.result);
			    }
			}
		}else {
//			IE10下，使用滤镜 
			fileObj.select();
			var selectedImg = document.selection.createRange().text;
			var newDenderDiv = imgPanel[0];
			//var newDenderDiv= document.getElementById("div_"+imgPreviewId);
//			必须设置初始大小 			
			newDenderDiv.style.width = "120px";
			newDenderDiv.style.height = "100px";
//			图片异常的捕捉，防止用户修改后缀来伪造图片 
			try{
				newDenderDiv.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
				newDenderDiv.style.cursor = "pointer";
				//唯预发环境兼容性问题
				newDenderDiv.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = selectedImg; 
				img[0].style.filter="alpha(opacity=0)";
			}catch(e){
				zaMessageShow("您上传的图片格式不正确，请重新选择！","error");
				return false;
			}
		}
		imgPanel.html(img);
	}else{
		zaMessageShow("您上传的图片格式不正确，请重新选择！","error");
	}
}
