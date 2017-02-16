
 var url = "";
 var callback = "";
 var func = "acquireapi";
 var unikey = guid(); //需要由js生成一个128bit的随机数
 //入口函数
function acquire(openid,opentype,message,expandparams){
	callback = "flightHandler";
	url = 'http://www.cmpassport.com/openapi/openmd?openid='+openid+'&unikey='+unikey+'&opentype='+opentype+'&message='+encodeURIComponent(message)+'&expandparams='+encodeURIComponent(expandparams)+'&func='+func+'&callback='+callback;
	//url = 'http://192.168.42.25:30030/umcopenapi/openmd?openid='+openid+'&unikey='+unikey+'&opentype='+opentype+'&message='+encodeURIComponent(message)+'&expandparams='+encodeURIComponent(expandparams)+'&func='+func+'&callback='+callback;
	// 创建script标签，设置其属性
	var script = document.createElement('script');
	script.setAttribute('src', url);
	// 把script标签加入head，此时调用开始
	document.getElementsByTagName('head')[0].appendChild(script);
}

function acquire_dev(openid,opentype,message,expandparams){
	callback = "flightHandler";
	url = 'http://www.cmpassport.com/openapi/openmd?openid='+openid+'&unikey='+unikey+'&opentype='+opentype+'&message='+encodeURIComponent(message)+'&expandparams='+encodeURIComponent(expandparams)+'&func='+func+'&callback='+callback;
	//url = 'http://121.15.167.251:30030/umcopenapi/openmd?openid='+openid+'&unikey='+unikey+'&opentype='+opentype+'&message='+encodeURIComponent(message)+'&expandparams='+encodeURIComponent(expandparams)+'&func='+func+'&callback='+callback;
	// 创建script标签，设置其属性
	var script = document.createElement('script');
	script.setAttribute('src', url);
	// 把script标签加入head，此时调用开始
	document.getElementsByTagName('head')[0].appendChild(script);
}

function guid() {
	function S4() {
	   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	}
	return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
}

//调用生成签名后的处理方法
var flightHandler = function(data){
	callback = "doacquire";
	url = data.redirecturl+'&callback='+callback;
	// 创建script标签，设置其属性
	var script = document.createElement('script');
	script.setAttribute('src', url);
	// 把script标签加入head，此时调用开始
	document.getElementsByTagName('head')[0].appendChild(script);
};


//调用acquire接口后的处理方法
var doacquire = function(data){
	alert(data.resultcode);
};