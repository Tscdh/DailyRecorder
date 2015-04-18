// JavaScript Document BY DH 2015.03.19
$(document).ready(function () {

    $("ul.paging2").quickPager();
    //星期几转换为网页格式
    $(".weektime").each(function () {
        $(this).text(outputweek($(this).text()));
    });
});

function addrule(type) {
    $("#loading-mask").show();
    if (type == 1)//周规则修改
    {
        $("#loading-mask").load("RulerChanger.htm #forweek");
        $("#loading-mask").on("click", ".submit", function () {
            var a = new Object;
            a.StationName = $(this).parent().prevAll("div").eq(1).children("select").val();
            a.Time = $(this).parent().prevAll("div").eq(2).children("select").val();
            a.Content = $(this).parent().prevAll("div").eq(0).children("input").val();
            a.tablename = "WeekRule";
            a.Time = inputweek(a.Time);//转换星期几为数据库格式
            //不做判断a是否正确，因为是选取值
            ajaxadd(a);
        });        
    }
    if (type == 2)//月规则修改
    {
        $("#loading-mask").load("RulerChanger.htm #formonth");
        $("#loading-mask").on("click", ".submit", function () {
            var a = new Object;
            a.StationName = $(this).parent().prevAll("div").eq(1).children("select").val();
            a.Time = $(this).parent().prevAll("div").eq(2).children("input").val();
            a.Content = $(this).parent().prevAll("div").eq(0).children("input").val();
            a.tablename = "MonthRule";
            
            ajaxadd(a);
        });        

    }
    if (type == 3)//年规则修改 
    {
        $("#loading-mask").load("RulerChanger.htm #foryear");
        $("#loading-mask").on("click", ".submit", function () {
            var a = new Object;
            a.StationName = $(this).parent().prevAll("div").eq(1).children("select").val();
            //a.MonthTime = $(this).parent().prevAll("div").eq(2).children("input:eq(0)").val();
            //a.Day = $(this).parent().prevAll("div").eq(2).children("input:eq(1)").val();
            //组装月和日
            a.Time = $(this).parent().prevAll("div").eq(2).children("input:eq(0)").val()+" "+$(this).parent().prevAll("div").eq(2).children("input:eq(1)").val();
            a.Content = $(this).parent().prevAll("div").eq(0).children("input").val();
            a.tablename = "YearRule";
            
            ajaxadd(a);
        });        

    }
    return false;
}

function changerule(id, obj, type) {
    $("#loading-mask").show();
    //内容替换准备
    var temp = new Object();
    temp.StationName = $(obj).parent("li").children("span:eq(0)").text();
    temp.Time = $(obj).parent("li").children("span:eq(2)").text(); 
    temp.Time2 = $(obj).parent("li").children("span:eq(3)").text(); //如果是年规则，则有两个span需要读，否则只有一个
    temp.Content = $(obj).parent("li").children("span:eq(1)").text();
    if (type == 1)//周规则修改
    {
        $("#loading-mask").load("RulerChanger.htm #forweek", function () {
            $("#forweek").children("div:eq(0)").children("select").val(temp.Time);
            $("#forweek").children("div:eq(1)").children("select").val(temp.StationName);
            $("#forweek").children("div:eq(2)").children("input").val(temp.Content);
        });
        

        $("#loading-mask").on("click", ".submit", function () {
            var a = new Object;
            a.id = id;
            a.StationName = $(this).parent().prevAll("div").eq(1).children("select").val();
            a.Time = $(this).parent().prevAll("div").eq(2).children("select").val();
            a.Content = $(this).parent().prevAll("div").eq(0).children("input").val();
            a.tablename = "WeekRule";
            a.Time = inputweek(a.Time); //转换星期几为数据库格式
            //不做判断a是否正确，因为是选取值
            ajaxchange(a);
        });
    }
    if (type == 2)//月规则修改
    {
        $("#loading-mask").load("RulerChanger.htm #formonth", function () {
            $("#formonth").children("div:eq(0)").children("input").val(temp.Time);
            $("#formonth").children("div:eq(1)").children("select").val(temp.StationName);
            $("#formonth").children("div:eq(2)").children("input").val(temp.Content);


        });
        //检查日期合理性
        var flag = false;

        $("#loading-mask").on("click", ".submit", function () {
            var a = new Object;
            a.id = id;
            a.StationName = $(this).parent().prevAll("div").eq(1).children("select").val();
            a.Time = $(this).parent().prevAll("div").eq(2).children("input").val();
            a.Content = $(this).parent().prevAll("div").eq(0).children("input").val();
            a.tablename = "MonthRule";
            
            
            ajaxchange(a);
        });

    }
    if (type == 3)//年规则修改 
    {
        $("#loading-mask").load("RulerChanger.htm #foryear", function () {
            $("#foryear").children("div:eq(0)").children("input:eq(0)").val(temp.Time);
            $("#foryear").children("div:eq(0)").children("input:eq(1)").val(temp.Time2);
            $("#foryear").children("div:eq(1)").children("select").val(temp.StationName);
            $("#foryear").children("div:eq(2)").children("input").val(temp.Content);
        });
        $("#loading-mask").on("click", ".submit", function () {
            var a = new Object;
            a.id = id;
            a.StationName = $(this).parent().prevAll("div").eq(1).children("select").val();
           
            //组装月和日
            a.Time = $(this).parent().prevAll("div").eq(2).children("input:eq(0)").val() + " " + $(this).parent().prevAll("div").eq(2).children("input:eq(1)").val();
            a.Content = $(this).parent().prevAll("div").eq(0).children("input").val();
            a.tablename = "YearRule";
           
            ajaxchange(a);
        });

    }
    return false;

}

function deleterule(id, type) {
    $("#loading-mask").show();
    //利用对话框返回的值 （true 或者 false）
    var a = new Object();
    a.id = id;
    switch (type) {
        case 1:
            a.tablename = "WeekRule";
            break;
        case 2:
            a.tablename = "MonthRule";
            break;
        case 3:
            a.tablename = "YearRule";
            break;
        
    }
    if (confirm("确定删除此条数据？")) {
        a = JSON.stringify(a);
        var aj = $.ajax({
            url: '../AjaxHandler.asmx/DeleteRule', // 跳转到 action    
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

    else {
        $("#loading-mask").hide();
    }
   
    return false;
}

function inputweek(text) {
    var x;
    switch (text) {
        case "星期一":
            x = "Monday";
            break;
        case "星期二":
            x = "Tuesday";
            break;
        case "星期三":
            x = "Wednesday";
            break;
        case "星期四":
            x = "Thursday";
            break;
        case "星期五":
            x = "Friday";
            break;
        case "星期六":
            x = "Saturday";
            break;
        case "星期日":
            x = "Sunday";
            break;
    }
    return x;
}

function outputweek(text) {
    var x;
    switch (text) {
        case "Monday":
            x = "星期一";
            break;
        case "Tuesday":
            x = "星期二";
            break;
        case "Wednesday":
            x = "星期三";
            break;
        case "Thursday":
            x = "星期四";
            break;
        case "Friday":
            x = "星期五";
            break;
        case "Saturday":
            x = "星期六";
            break;
        case "Sunday":
            x = "星期日";
            break;
    }
    return x;
}

function testnumber(obj, min, max) {
    var number = $(obj).val();
    //对日期进行判断
    var patt1 = new RegExp("^([1-9][0-9]*)$");
    if (!patt1.test(number) || number < min || number > max) {
        $(obj).parent("div").css({ "color": "#ff0011", "background": "yellow" });
        $(obj).parent("div").nextAll("div:last").children("input:eq(0)").attr("disabled", "true");
    }
    else {
        $(obj).parent("div").css({ "color": "#000000", "background": "white" });
        $(obj).parent("div").nextAll("div:last").children("input:eq(0)").removeAttr("disabled");
    }
}

function ajaxadd(a) {
    a = JSON.stringify(a);
    var aj = $.ajax({
        url: '../AjaxHandler.asmx/AddRule', // 跳转到 action    
        contentType: "application/json; charset=utf-8",
        data: a,
        type: 'post',
        dataType: 'json',
        success: function (reply) {
            if (reply.d == "true") {
                alert("添加成功");
                //$("p").off("click", "**")
                 hidemask();
                } else
                {
                   alert(reply);
                   hidemask();
                }
              },
                error: function (e) {
                    alert(e.responseText);
                    alert("本次修改失败！");
                    hidemask();
                }
            });
       
}


function ajaxchange(a) {

    a = JSON.stringify(a);
    var aj = $.ajax({
        url: '../AjaxHandler.asmx/ChangeRule', // 跳转到 action    
        contentType: "application/json; charset=utf-8",
        data: a,
        type: 'post',
        dataType: 'json',
        success: function (reply) {
            if (reply.d == "true") {
                alert("修改成功");
                
                hidemask();
            } else {
                alert(reply);
                hidemask();
            }
        },
        error: function (e) {
            alert(e.responseText);
            alert("本次修改失败！");
            hidemask();
        }
    });

}