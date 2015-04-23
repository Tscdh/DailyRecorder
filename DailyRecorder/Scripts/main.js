// JavaScript Document BY DH 2014.11.21
$(document).ready(function () {
    //绑定修改按钮事件
   
    //下拉框事件
    $(".title").click(
	  function () {
	      $(this).next("div").slideToggle("fast");
	      //$(this).next("div").hide();

	  }
	);
    //可修改内容选择与切换
    $(".item").click(
	  function () {
	      $(this).parent(".menu").children(".item").removeClass("selected");
	      $(this).addClass("selected"); //变色
	      //选择相应内容
	      var temp = $(this).attr("class").split(" ");
	      temp = temp[0].split("");
	      temp = temp[1] - 1;
	      //改变属性
	      $(this).parent().parent(".normal").find("textarea").attr("readonly", "readonly");
	      $(this).parent().parent(".normal").find("textarea").eq(temp).removeAttr("readonly");
	  }
	);
	

});



function ChangeOther(a) {
    var onedata = new Object;
    onedata.StationName = $(a).parent().prev("div").text();
    onedata.Content = $(a).prevAll("textarea").val();
//    alert(onedata.StationName);
//    alert(onedata.Content);
    onedata = JSON.stringify(onedata);
    var aj = $.ajax({
        url: '../AjaxHandler.asmx/ChangeOtherRecord', // 跳转到 action    
        contentType: "application/json; charset=utf-8",
        data: onedata,
        type: 'post',
        dataType: 'json',
        success: function (reply) {
            if (reply.d == "true") {
                // view("修改成功！");    
                alert("修改成功！");
                window.location.reload();
            } else {
                alert(reply);
            }
        },
        error: function (e) {
            // view("异常！");
            alert(e.responseText);
            alert("本次修改失败！");
        }
    });
}

function hidemask() {
    $("#loading-mask").hide();
    location.reload(); 
}