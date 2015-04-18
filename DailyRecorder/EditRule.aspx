<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="EditRule.aspx.cs" Inherits="DailyRecorder.EditRule" %>

<%@ Register src="HeadMenu.ascx" tagname="HeadMenu" tagprefix="uc1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link type="text/css" rel="stylesheet" href="style/Reset.css" />
    <link type="text/css" rel="stylesheet" href="style/base.css" />
    <link href="style/QuickPager.css" rel="stylesheet" type="text/css" />
    <script src="Scripts/jquery-1.11.2.min.js" type="text/javascript"></script>
    <script src="Scripts/json2.js" type="text/javascript"></script>
    <script src="Scripts/quickpager.jquery.js" type="text/javascript"></script>
    <script src="Scripts/main.js" type="text/javascript"></script>
    <script src="Scripts/EditRule.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div id="loading-mask" style="display: none;">
    </div>
    <div class="banner">
    </div>
    <div class="menu">
    
        <uc1:HeadMenu ID="HeadMenu1" runat="server" />
    
    </div>
    <div class="wrap">
        <div class="main">
            <div class="listdiv">
                <h2>
                    提醒内容列表</h2>
                <div>
                    <a onclick="addrule(1)">添加每周工作</a><a onclick="addrule(2)">添加每月工作</a><a onclick="addrule(3)">添加每年工作</a>
                </div>
                <ul class="paging2">
                    <asp:Repeater ID="RuleRepeater1" runat="server">
                        <ItemTemplate>
                            <li><span>
                                <%# DataBinder.Eval(Container.DataItem, "StationName")%></span> <span>
                                    <%# DataBinder.Eval(Container.DataItem, "Content")%></span> <span class="weektime">
                                        <%# DataBinder.Eval(Container.DataItem, "WeekTime")%></span> <a onclick="changerule(<%# DataBinder.Eval(Container.DataItem, "id")%>,this,1)">
                                            修改</a> <a onclick="deleterule(<%# DataBinder.Eval(Container.DataItem, "id")%>,1)">删除</a>
                            </li>
                        </ItemTemplate>
                    </asp:Repeater>
                    <asp:Repeater ID="RuleRepeater2" runat="server">
                        <ItemTemplate>
                            <li><span>
                                <%# DataBinder.Eval(Container.DataItem, "StationName")%></span> <span>
                                    <%# DataBinder.Eval(Container.DataItem, "Content")%></span> <span>
                                        <%# DataBinder.Eval(Container.DataItem, "MonthTime")%></span> <a onclick="changerule(<%# DataBinder.Eval(Container.DataItem, "id")%>,this,2)">
                                            修改</a> <a onclick="deleterule(<%# DataBinder.Eval(Container.DataItem, "id")%>,2)">删除</a>
                            </li>
                        </ItemTemplate>
                    </asp:Repeater>
                    <asp:Repeater ID="RuleRepeater3" runat="server">
                        <ItemTemplate>
                            <li><span>
                                <%# DataBinder.Eval(Container.DataItem, "StationName")%></span> <span>
                                    <%# DataBinder.Eval(Container.DataItem, "Content")%></span> <span>
                                        <%# DataBinder.Eval(Container.DataItem, "MonthTime")%></span> <span>
                                            <%# DataBinder.Eval(Container.DataItem, "Day")%></span> <a onclick="changerule(<%# DataBinder.Eval(Container.DataItem, "id")%>,this,3)">
                                                修改</a> <a onclick="deleterule(<%# DataBinder.Eval(Container.DataItem, "id")%>,3)">删除</a>
                            </li>
                        </ItemTemplate>
                    </asp:Repeater>
                </ul>
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
