        
        BUI.use('bui/tab',function(Tab){
            var tab = new Tab.TabPanel({
                srcNode : '#za-ins-tab',
                itemStatusCls : {
                    'selected' : 'active'
                },
                panelContainer : '#za-ins-panel'//如果不指定容器的父元素，会自动生成
            });
            tab.render();
            
            tab.on('selectedchange',function (ev) {
                var i= tab.indexOfItem(ev.item);
                iFrameHeight($("iframe").eq(i).attr('id'));             
            });
        });
        
        //申请理赔中样例弹窗
        function zaExampleMessage(imgtitle,imgsrc){
        	BUI.use('bui/overlay',function(Overlay){
        		var dhtml = '<p><img src="'+ imgsrc +'"/></p>';
        		
        		var dialog = new Overlay.Dialog({
        			title: imgtitle,
        			elCls:"za-dialog-message",
        			bodyContent:dhtml,
        			buttons:[],
        			closeAction:"destroy",
        			success:function () {this.close();}
        		});
        		dialog.show();
        	});
        	
        }