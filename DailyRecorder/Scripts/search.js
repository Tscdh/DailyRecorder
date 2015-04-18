// JavaScript Document BY DH 2015.03.10
$(document).ready(function () {
    //绑定datepicker插件
   $("#datepick").datetimepicker({
                //showOn: "button",
                //buttonImage: "./css/images/icon_calendar.gif",
                //buttonImageOnly: true,
                showSecond: true,
                timeFormat: 'hh:mm:ss',
                stepHour: 1,
                stepMinute: 1,
                stepSecond: 1
    })

});

function search() {
    var a = new Object;
    a.StationName = $("#station").val();
    a.time = "";
    //不做判断a是否正确，因为是选取值
    a = JSON.stringify(a);
    var aj = $.ajax({
        url: '../AjaxHandler.asmx/SearchDefectRecord', // 跳转到 action    
        contentType: "application/json; charset=utf-8",
        data: a,
        type: 'post',
        dataType: 'json',
        success: function (reply) {
            if (reply.d != "") {
                // view("修改成功！");    
                showlist(reply.d);

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

function showlist(info) {
    //先去除原有的搜索结果
    $("#dataBelow").children("tr:gt(0)").remove();
    //加入新搜索结果  
    var a;
    a = jQuery.parseJSON(info);
    for (i = 0; i < a.Table.length; i++) {
        var temp = "";
        temp = "<tr><td>" + a.Table[i].StationName + "</td><td>" + a.Table[i].Time + "</td><td>" + a.Table[i].Content + "</td><td><span class=\"hindid\">" + a.Table[i].ID + "</span><a onclick=\"changedefect(" + a.Table[i].ID + ",this)\">修改</a>    <a onclick=\"deletedefect(" + a.Table[i].ID + ")\">删除</a></td></tr>";
        $("#dataBelow").append(temp);
    }
}

function adddefect() {
    $("#loading-mask").show();

    $("#submit").one("click", function () {
        var a = new Object;
        a.StationName = $(this).parent().prevAll("div").eq(1).children("select").val();
        a.Time = $(this).parent().prevAll("div").eq(2).children("input").val();
        a.Content = $(this).parent().prevAll("div").eq(0).children("textarea").val(); ;
        //不做判断a是否正确，因为是选取值
        a = JSON.stringify(a);
        var aj = $.ajax({
            url: '../AjaxHandler.asmx/AddDefectRecord', // 跳转到 action    
            contentType: "application/json; charset=utf-8",
            data: a,
            type: 'post',
            dataType: 'json',
            success: function (reply) {
                if (reply.d == "true") {
                    // view("修改成功！");    
                    alert("添加成功");
                    hidemask();

                } else {
                    alert(reply);
                    hidemask();
                }
            },
            error: function (e) {
                // view("异常！");
                alert(e.responseText);
                alert("本次修改失败！");
                hidemask();
            }
        });
    });      //绑定按钮的发送添加请求功能

}

function changedefect(id,obj)
{
    $("#loading-mask").show();
    //数据获取及处理
    var temp = new Object();
    temp.time = $(obj).parent("td").parent("tr").children("td:eq(1)").text();
    temp.time = temp.time.replace(/[\u4E00-\u9FA5]+/, ""); //正则去除中文，即删除默认出现的星期几
    temp.station = $(obj).parent("td").parent("tr").children("td:eq(0)").text();
    temp.content = $(obj).parent("td").parent("tr").children("td:eq(2)").text();
    //复制到对话界面上
    $(".loading").children("div:eq(0)").children("input").val(temp.time);
    $(".loading").children("div:eq(1)").children("select").val(temp.station);
    $(".loading").children("div:eq(2)").children("textarea").val(temp.content);
    $("#submit").one("click", function () {
        var a = new Object;
        a.id = id;
        a.StationName = $(this).parent().prevAll("div").eq(1).children("select").val();
        a.Time = $(this).parent().prevAll("div").eq(2).children("input").val();
        a.Content = $(this).parent().prevAll("div").eq(0).children("textarea").val(); ;
        //不做判断a是否正确，因为是选取值
        a = JSON.stringify(a);
        var aj = $.ajax({
            url: '../AjaxHandler.asmx/ChangeDefectRecord', // 跳转到 action    
            contentType: "application/json; charset=utf-8",
            data: a,
            type: 'post',
            dataType: 'json',
            success: function (reply) {
                if (reply.d == "true") {
                    // view("修改成功！");    
                    alert("修改成功");
                    hidemask();

                } else {
                    alert(reply);
                    hidemask();
                }
            },
            error: function (e) {
                // view("异常！");
                alert(e.responseText);
                alert("本次修改失败！");
                hidemask();
            }
        });
    });       //绑定按钮的发送修改请求功能
}

function deletedefect(id)
{
    $(".loading").hide();
    $("#loading-mask").show();

    //利用对话框返回的值 （true 或者 false）
    var a=new Object();
    a.id = id;
    if(confirm("确定删除此条数据？")) {
        a = JSON.stringify(a);
        var aj = $.ajax({
            url: '../AjaxHandler.asmx/DeleteDefectRecord', // 跳转到 action    
            contentType: "application/json; charset=utf-8",
            data: a,
            type: 'post',
            dataType: 'json',
            success: function (reply) {
                if (reply.d == "true") {
                    // view("修改成功！");    
                    alert("删除成功");
                    hidemask();

                } else {
                    alert(reply);
                    hidemask();
                }
            },
            error: function (e) {
                // view("异常！");
                alert(e.responseText);
                alert("本次修改失败！");
                hidemask();
            }
        });
    }
 
    else
    {
      $("#loading-mask").hide();
    }
}

