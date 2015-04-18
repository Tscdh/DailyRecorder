<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DailyWorkRemind.aspx.cs"
    Inherits="DailyRecorder.DailyWorkRemind" %>

<%@ Register src="HeadMenu.ascx" tagname="HeadMenu" tagprefix="uc1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>日常工作查询</title>
    <link type="text/css" rel="stylesheet" href="style/Reset.css" />
    <link type="text/css" rel="stylesheet" href="style/base.css" />
    <link href="style/jquery-ui-1.8.17.custom.css" rel="stylesheet" type="text/css" />
    <link href="style/jquery-ui-timepicker-addon.css" rel="stylesheet" type="text/css" />
    <script src="Scripts/jquery-1.4.1.min.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-1.8.17.custom.min.js" type="text/javascript"></script>
    <script src="Scripts/json2.js" type="text/javascript"></script>
    <script src="Scripts/main.js" type="text/javascript"></script>
    <script src="Scripts/DailyWork.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div class="banner">
    </div>
    <div class="menu">
        
        <uc1:HeadMenu ID="HeadMenu1" runat="server" />
        
    </div>
    <div class="wrap">
        <div class="main">
            <div>
            <div class="listdiv">
                <input type="text" id="DatePicker" />
                <input type="button" value="查询工作" onclick="search()" />
                </div>
                <div class="listdiv">
                    <table>
                        <tbody id="WorkList">
                            <tr>
                                <td style="width: 20%">
                                    双龙变
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    丹溪变
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    芝堰变
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    吴宁变
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    信安变
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    夏金变
                                </td>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
