function toLogin() {
	var data = $("#loginForm").formToArray();
	/*
	var data = {
            "title": "titlex",
            "content": "xcontent"
        }
        */
	//$(document).ready(function() {  
	    //$("#loginBtn").click(function () {
	        $.ajax({
	            url: "../LoginCheck",
	            type: "post",
	            data: data,
	            //dataType: "json",
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
}
