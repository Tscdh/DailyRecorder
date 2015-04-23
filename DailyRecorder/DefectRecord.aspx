<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DefectRecord.aspx.cs" Inherits="DailyRecorder.DefectRecord" %>

<%@ Register Src="HeadMenu.ascx" TagName="HeadMenu" TagPrefix="uc1" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <link type="text/css" rel="stylesheet" href="style/Reset.css" />
    <link type="text/css" rel="stylesheet" href="style/base.css" />
    <link href="style/jquery-ui-1.8.17.custom.css" rel="stylesheet" type="text/css" />
    <link href="style/jquery-ui-timepicker-addon.css" rel="stylesheet" type="text/css" />
    <script src="Scripts/jquery-1.4.1.min.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-1.8.17.custom.min.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-timepicker-addon.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-timepicker-zh-CN.js" type="text/javascript"></script>
    <script src="Scripts/json2.js" type="text/javascript"></script>
    <script src="Scripts/main.js" type="text/javascript"></script>
    <script src="Scripts/search.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div id="loading-mask" style="display: none;">
        <div class="loading">
            <div>
                时间：<input type="text" id="datepick" />
            </div>
            <div>
                站名：<select>
                    <option>双龙变</option>
                    <option>丹溪变</option>
                    <option>芝堰变</option>
                    <option>吴宁变</option>
                    <option>信安变</option>
                    <option>夏金变</option>
                </select>
            </div>
            <div>
                缺陷内容：<br />
                <textarea rows="5" cols="30"></textarea>
            </div>
            <div>
                <input type="button" value="提交" id="submit" />&nbsp;<input type="button" value="取消"
                    onclick="hidemask();" />
            </div>
        </div>
    </div>
    <div class="banner">
    </div>
    <div class="menu">
        <uc1:HeadMenu ID="HeadMenu1" runat="server" />
    </div>
    <div class="wrap">
        <div class="main">
            <div>
                <input type="button" value="添加记录" onclick="adddefect();" /></div>
            <div id="searchdiv">
                <%--            时间：<input type="text" id="s" />--%>
                站名：<select id="station" onclick="search()">
                    <option>双龙变</option>
                    <option>丹溪变</option>
                    <option>芝堰变</option>
                    <option>吴宁变</option>
                    <option>信安变</option>
                    <option>夏金变</option>
                </select>
                <input type="button" value="列出全部缺陷" onclick="alert('功能暂时为空！')" />
            </div>
            <div class="listdiv">
                <table cellspacing="0" width="100%">
                    <tbody id="dataBelow">
                        <tr>
                            <td style="width: 10%">
                                站名
                            </td>
                            <td style="width: 20%">
                                时间
                            </td>
                            <td>
                                缺陷内容
                            </td>
                            <td style="width: 10%">
                                操作
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="footer">
            ©2011-2015 国网浙江检修公司双龙运维站 All Rights Reserved
            <br />
            Powered by TSC_DH
        </div>
    </div>
    </form>
</body>
</html>
