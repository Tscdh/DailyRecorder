﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="DailyRecorder._Default" %>

<%@ Register src="HeadMenu.ascx" tagname="HeadMenu" tagprefix="uc1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>运行情况公示版</title>
    <link type="text/css" rel="stylesheet" href="style/Reset.css" />
    <link type="text/css" rel="stylesheet" href="style/base.css" />
    <script src="Scripts/jquery-1.4.1.min.js" type="text/javascript"></script>
    <script src="Scripts/json2.js" type="text/javascript"></script>
    <script src="Scripts/main.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div class="banner">
        
    </div>
    <div class="menu">
        
        <uc1:HeadMenu ID="HeadMenu1" runat="server" />
        
    </div>
    <div class="wrap">
        <div id="indeximg"></div>
    </div>
    <div class="footer">
            ©2011-2015 国网浙江检修公司双龙运维站 All Rights Reserved
            <br />
            Powered by TSC_DH
        </div>
    </form>
</body>
</html>
