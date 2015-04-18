using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DailyRecorder
{
    public partial class HeadMenu : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        /// <summary>
        /// 全局导航菜单
        /// </summary>
        private static List<SiteNaviMenu> naviMenus = new List<SiteNaviMenu>();

        /// <summary>
        /// 当前所处位置
        /// </summary>
        public string CurrentLocation { get; set; }

       

        /// <summary>
        /// 绘制导航菜单
        /// </summary>
        protected void PaintMenu()
        {
            List<string> menuItems = new List<string>();
            string CurrentUrl = Request.Url.AbsolutePath.ToString().ToLower();
            
            foreach (var item in naviMenus)
            {
                if (CurrentUrl.Contains(item.URL.Substring(1).ToLower()) )
                {
                    menuItems.Add("<li><a class=\"nav navselected\" href=\"#\">" + item.Text + "</a></li>\n");
                }
                else
                {
                    menuItems.Add("<li><a class=\"nav\" href=\"" + ResolveUrl(item.URL) + "\">" + item.Text + "</a></li>\n");
                }
            
                
            }
            foreach (var item in menuItems)
            {
                Response.Write(item);
            }
        }

        /// <summary>
        /// 注册全部菜单，只应该在Global.asax中相应方法调用
        /// </summary>
        public static void RegisterNavigatorMenu()
        {

            naviMenus.Clear();
            string configFilename = AppDomain.CurrentDomain.BaseDirectory + @"DR_SiteNavi.config";
            XElement configXml = XElement.Load(configFilename);
            IEnumerable<XElement> xmlNaviMenus = from xml in configXml.Descendants("NaviMenu") select xml;
            string text, url;
            foreach (var item in xmlNaviMenus)
            {
                text = item.Attribute((XName)"text").Value;
                
                url = item.Attribute((XName)"url").Value;
                naviMenus.Add(new SiteNaviMenu(text,  url));
            }

        }

        /// <summary>
        /// 导航菜单的实体结构
        /// </summary>
        struct SiteNaviMenu
        {
            public string Text { get; set; }
            
            public string URL { get; set; }

            public SiteNaviMenu(string text,  string url)
            {
                this = new SiteNaviMenu();
                this.Text = text;
                
                this.URL = url;
            }
        }
    }
}