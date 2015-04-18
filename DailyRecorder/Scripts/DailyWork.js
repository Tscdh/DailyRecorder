// JavaScript Document BY DH 2015.03.16
// 对datepicker进行汉化
$((function ($) {
    $.datepicker.regional['zh-CN'] = {
        clearText: '清除',
        clearStatus: '清除已选日期',
        closeText: '关闭',
        closeStatus: '不改变当前选择',
        prevText: '<上月',
        prevStatus: '显示上月',
        prevBigText: '<<',
        prevBigStatus: '显示上一年',
        nextText: '下月>',
        nextStatus: '显示下月',
        nextBigText: '>>',
        nextBigStatus: '显示下一年',
        currentText: '今天',
        currentStatus: '显示本月',
        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthNamesShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        monthStatus: '选择月份',
        yearStatus: '选择年份',
        weekHeader: '周',
        weekStatus: '年内周次',
        dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        dayStatus: '设置 DD 为一周起始',
        dateStatus: '选择 m月 d日, DD',
        dateFormat: 'yy/mm/dd',
        firstDay: 1,
        initStatus: '请选择日期',
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['zh-CN']);
})(jQuery));


$(document).ready(function () {
    //绑定datepicker插件
    $('#DatePicker').datepicker();
    //日期初始化
    $('#DatePicker').datepicker('setDate', new Date());

});

function search() {
    var a = new Object;
    a.Date = $("#DatePicker").val();
    //不做判断a是否正确，因为是选取值
    a = JSON.stringify(a);
    var aj = $.ajax({
        url: '../AjaxHandler.asmx/SearchDailyWork', // 跳转到 action    
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
    $("#WorkList").children("tr").each(function () {
        $(this).children("td:eq(1)").text("");
    });
    //加入新搜索结果
    //var a;a = jQuery.parseJSON(info);
    var re;
    //做结果非空判断
    if (info != "{\"Table\":]}") {
        re = JSON.parse(info);
        //对表格各行进行轮询
        $("#WorkList").children("tr").each(function () {
            for (i = 0; i < re.Table.length; i++) {
                var temp = $(this).children("td:eq(0)").text();
                //如果是本站的工作，则记录进表格
                if ($.trim(re.Table[i].StationName) == $.trim(temp)) {
                    $(this).children("td:eq(1)").text($(this).children("td:eq(1)").text() + "  " + re.Table[i].Content);
                }
            }
        });
    }
    else {
        alert("查询结果为空，请设置日常工作！")
    }
}