using System;
using System.Data;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DailyRecorder;

namespace DailyRecorder
{
    public partial class ViewAll : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataSet a=DataAccess.dataSet("select * from WordTicket");
        }

        public void RepeaterLoadin()
        {
        }
    }
}