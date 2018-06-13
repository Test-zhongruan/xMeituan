function toLogin() {
	///var data = $("#loginForm").formToArray();
	//var x = JSON.stringify(data);
	//alert(x);
	/*
	var data = {
            "title": "titlex",
            "content": "xcontent"
        }
        */
	//$(document).ready(function() {  
	    //$("#loginBtn").click(function () {
	/****************************************/
	//post:200 错误一般由<input>是submit类型和<button>标签，还写了onclick函数引起的冲突。还有就是dataType与服务器返回数据不一致。
	/*
	        $.ajax({
	            url: "../LoginCheck",
	            type: "post",
	            data: data,
	            dataType: "text",
	            contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
	            success: function() {    
	                if (true) {  
	                	window.location.href = "../loginFailed.jsp";
	            	}
	            },
	            error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus); 
	            } 
	        });
	    //});
	//});
	//$.post("\LoginCheck",data);
	*/
	/*******************************************/
	var options={
			url:"../MLoginCheck",
			type:"post",
			dataType:null,
			success: showResponse,
		};
	//$('#loginForm').ajaxForm(options); 
	$('#loginForm').submit(function() { 
	// inside event callbacks 'this' is the DOM element so we first 
	// wrap it in a jQuery object and then invoke ajaxSubmit 
	$(this).ajaxSubmit(options); 
	
	// !!! Important !!! 
	// always return false to prevent standard browser submit and page navigation 
	return false; 
	});
}
function showResponse() {
	for (i in data) {
		if("true" === data[i].checked) {
			window.location.href = "../MIndex.html";
		}
		else {
			$("#pswError").html("密码错误").css("color","#3385ff");
		}
	}
}
function telCheck() {
	var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;  
	var phone = $.trim($("#name").val());  
	var x = document.getElementById("telError");
	if (!phoneReg.test(phone)) {  
		x.innerHTML = "请输入有效的手机号码";
		x.setAttribute("style","color:#3385ff;");
    	return false;  
	}else {
		x.innerHTML = "a";
		x.setAttribute("style","color:#f7bb43;");
		return true;
	}
}
function pswCheck() {
	//var preg = /^\d{8,16}$/;
	var preg = /^(?![^a-zA-Z]+$)(?!\D+$)[0-9a-zA-Z]{8,16}$/
	/*
	var y = document.getElementById("password");
	if(y.value.length>16) {
		y.value = y.value.slice(0,16);
	}
	*/
	var psw = $("#password").val();
	var x = document.getElementById("pswError");
	if(!preg.test(psw)){
		x.innerHTML = "密码错误";
		x.setAttribute("style","color:#3385ff;");
    	return false;
	}else {
		x.innerHTML = "a";
		x.setAttribute("style","color:#f7bb43;");
		return true;
	}
}
function regTelCheck() {
	var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;  
	var phone = $.trim($("#regTel").val());  
	var x = document.getElementById("regTelErr");
	if (!phoneReg.test(phone)) {  
		x.innerHTML = "请输入有效的手机号码";
		//x.setAttribute("style","color:#3385ff;");
		x.setAttribute("style","color:red;");
    	return false;  
	}else {
		x.innerHTML = "";
		//x.setAttribute("style","color:#ff0;");
	}
	var data = {"userTel" : phone};
	$.ajax({
		url: "../MRegTelCheck",
		type: "post",
		data: data,
		dataType: "json",
		contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		success: function(data) {
			for (i in data) {
				if("true" === data[i]) {
					$("#regTelErr").html("该手机号已被注册").css("color","red");
				} else {
					$("#regTelErr").html("");
				}
			}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {}
	});
	return true;
}
function regPswCheck() {
	var preg = /^(?![^a-zA-Z]+$)(?!\D+$)[0-9a-zA-Z]{8,16}$/
	var psw = $("#regPsw").val();
	var x = document.getElementById("regPswErr");
	if(!preg.test(psw)){
		x.innerHTML = "密码8~16位，包含数字和字母";
		x.setAttribute("style","color:red;");
		//x.setAttribute("style","color:#3385ff;");
    	return false;
	}else {
		x.innerHTML = "";
		//x.setAttribute("style","color:#ff0;");
		return true;
	}
}
function miCheckbox() {
	if($("#miCheck").is(":checked")) {
		$('#regBtn').removeAttr("disabled");
	}else {
		$('#regBtn').attr("disabled","disabled");
	}
}
function toReg() {
	var options={
		url:"../MReg",
		type:"post",
		dataType:"json",
		success: showRegResponse,
	};
	$('#regForm').submit(function() { 
        // inside event callbacks 'this' is the DOM element so we first 
        // wrap it in a jQuery object and then invoke ajaxSubmit 
		$(this).ajaxSubmit(options); 
		
        // !!! Important !!! 
        // always return false to prevent standard browser submit and page navigation 
        return false; 
    });
}
function showRegResponse(data) {
	for (i in data) {
		if("true" === data[i].checked) {
			window.location.href = "../MIndex.html";
		}
		else {
			window.location.href = "../MLogin.html";
		}
	}
}
