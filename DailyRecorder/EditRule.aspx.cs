using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace DailyRecorder
{
    public partial class EditRule : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataSet a = new DataSet();
            a=DailyWorkReminder.SearchDailyWork();
            RuleRepeater1.DataSource = a.Tables[0];
            RuleRepeater1.DataBind();
            RuleRepeater2.DataSource = a.Tables[1];
            RuleRepeater2.DataBind();
            RuleRepeater3.DataSource = a.Tables[2];
            RuleRepeater3.DataBind();
        }
    }
}