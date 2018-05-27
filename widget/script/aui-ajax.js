var vm = null;
function refreshLoad(requestUrl,Obj){
	var domObj = Obj;
	var dataUrl = requestUrl;
	api.setRefreshHeaderInfo({
	    visible: true,
	    loadingImg: 'widget://image/refresh.png',
	    bgColor: '#ccc',
	    textColor: '#fff',
	    textDown: '下拉刷新...',
	    textUp: '松开刷新...',
	    showTime: true
	}, function(ret, err){
	      ajaxLoad( requestUrl,domObj,true );
	});
}
function ajaxLoad( requestUrl,Obj,Pull ){
	var dataUrl = requestUrl;
	var isPull = arguments[2] ? arguments[2] : false;
	var domObj = Obj;	
	api.ajax({
	    url: dataUrl, 
	    method: 'get',
	},function(ret, err){
	    if (ret) { 
	        if(isPull){ 
	        	vm.items = []; 
	        	for (var i = 0; i < ret.length ; i++) { 
	        		vm.items.push( ret[i] );
	        	}
	        	return ;
	        }
	        vm = new Vue({
	        	el:domObj,
	        	data:{
	        		items:ret
	        	}
	        });
	    } 
	});
	api.refreshHeaderLoadDone();

}