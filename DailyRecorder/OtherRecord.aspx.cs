using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DailyRecorder;

namespace DailyRecorder
{
    public partial class OtherRecord : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataSet a = DataAccess.dataSet("select * from OtherRecord order by ID");
            int i = a.Tables[0].Rows.Count;
            OtherRepeater.DataSource = a;
            OtherRepeater.DataBind();
        }
    }
}