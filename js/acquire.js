
 var url = "";
 var callback = "";
 var func = "acquireapi";
 var unikey = guid(); //��Ҫ��js����һ��128bit�������
 //��ں���
function acquire(openid,opentype,message,expandparams){
	callback = "flightHandler";
	url = 'http://www.cmpassport.com/openapi/openmd?openid='+openid+'&unikey='+unikey+'&opentype='+opentype+'&message='+encodeURIComponent(message)+'&expandparams='+encodeURIComponent(expandparams)+'&func='+func+'&callback='+callback;
	//url = 'http://192.168.42.25:30030/umcopenapi/openmd?openid='+openid+'&unikey='+unikey+'&opentype='+opentype+'&message='+encodeURIComponent(message)+'&expandparams='+encodeURIComponent(expandparams)+'&func='+func+'&callback='+callback;
	// ����script��ǩ������������
	var script = document.createElement('script');
	script.setAttribute('src', url);
	// ��script��ǩ����head����ʱ���ÿ�ʼ
	document.getElementsByTagName('head')[0].appendChild(script);
}

function acquire_dev(openid,opentype,message,expandparams){
	callback = "flightHandler";
	url = 'http://www.cmpassport.com/openapi/openmd?openid='+openid+'&unikey='+unikey+'&opentype='+opentype+'&message='+encodeURIComponent(message)+'&expandparams='+encodeURIComponent(expandparams)+'&func='+func+'&callback='+callback;
	//url = 'http://121.15.167.251:30030/umcopenapi/openmd?openid='+openid+'&unikey='+unikey+'&opentype='+opentype+'&message='+encodeURIComponent(message)+'&expandparams='+encodeURIComponent(expandparams)+'&func='+func+'&callback='+callback;
	// ����script��ǩ������������
	var script = document.createElement('script');
	script.setAttribute('src', url);
	// ��script��ǩ����head����ʱ���ÿ�ʼ
	document.getElementsByTagName('head')[0].appendChild(script);
}

function guid() {
	function S4() {
	   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	}
	return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
}

//��������ǩ����Ĵ�����
var flightHandler = function(data){
	callback = "doacquire";
	url = data.redirecturl+'&callback='+callback;
	// ����script��ǩ������������
	var script = document.createElement('script');
	script.setAttribute('src', url);
	// ��script��ǩ����head����ʱ���ÿ�ʼ
	document.getElementsByTagName('head')[0].appendChild(script);
};


//����acquire�ӿں�Ĵ�����
var doacquire = function(data){
	alert(data.resultcode);
};