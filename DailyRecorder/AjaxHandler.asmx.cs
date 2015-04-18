using System;
using System.Collections.Generic;
using System.Data;
using System.Web;
using System.Web.Services;
using System.Web.Script.Services;
using System.Web.Script.Serialization;

namespace DailyRecorder
{
    /// <summary>
    /// AjaxHandler 的摘要说明
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [ScriptService]
    public class AjaxHandler : System.Web.Services.WebService
    {

        //[WebMethod]
        //public string HelloWorld()
        //{
        //    return "Hello World";
        //}

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string WriteData()
        {
            string strSql = "select * from WorkTicket";
            DataAccess.excuteSql(strSql);
            return "true";
        }

        //其他记录部分方法
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public string ChangeOtherRecord(string StationName, string Content)
        {
            //JavaScriptSerializer jss = new JavaScriptSerializer();
            //jss.DeserializeObject(a)
            string strSql = "update OtherRecord set Content='" + Content + "' where StationName='" + StationName + "'";//解析JSON后修改表
            DataAccess.excuteSql(strSql);
            return "true";
        }

        //缺陷记录部分方法
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public string SearchDefectRecord(string StationName, string time)
        {
            DataSet a = new DataSet();
            try
            {
                a = DataAccess.dataSet("select * from DefectRecord where StationName='" + StationName + "'");//暂不考虑时间
                //update DefectRecord set [Time]=#2015/2/13 18:00:00#
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
            string re = ConvertJson.ToJson(a);

            return re;
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public string AddDefectRecord(string StationName, string Time, string Content)
        {
            string strSql = "insert into DefectRecord([StationName],[Time],[Content]) values('" + StationName + "',#" + Time + "#,'" + Content + "')";//解析JSON后修改表
            DataAccess.excuteSql(strSql);
            return "true";
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public string DeleteDefectRecord(int id)
        {
            string strSql = "delete from DefectRecord where [id]=" + id.ToString();//解析JSON后修改表
            DataAccess.excuteSql(strSql);
            return "true";
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public string ChangeDefectRecord(string StationName, string Content, int id, string Time)
        {
            //JavaScriptSerializer jss = new JavaScriptSerializer();
            //jss.DeserializeObject(a)
            string strSql = "update DefectRecord set [Content]='" + Content + "', [Time]=#" + Time + "#, [StationName]='" + StationName + "' where id=" + id.ToString();//解析JSON后修改表
            DataAccess.excuteSql(strSql);
            return "true";
        }

        //日常工作提醒部分方法
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public string SearchDailyWork(string Date)
        {
            //JavaScriptSerializer jss = new JavaScriptSerializer();
            //jss.DeserializeObject(a)
            string rs = DailyWorkReminder.SearchDailyWork(Date);
            return rs;
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public string AddRule(string StationName, string Time, string Content, string tablename)
        {
            string strSql = "";
            if (tablename == "WeekRule")//加入表Weekrule
            {
                strSql = "insert into " + tablename + "([StationName],[WeekTime],[Content]) values('" + StationName + "','" + Time + "','" + Content + "')";//解析JSON后修改表
                DataAccess.excuteSql(strSql);
                return "true";
            }

            if (tablename == "MonthRule")
            {
                strSql = "insert into " + tablename + "([StationName],[MonthTime],[Content]) values('" + StationName + "','" + Time + "','" + Content + "')";//解析JSON后修改表
                DataAccess.excuteSql(strSql);
                return "true";
            }
            if (tablename == "YearRule")
            {
                string[] temp = Time.Split(' ');//拆分月和日
                strSql = "insert into " + tablename + "([StationName],[MonthTime],[Day],[Content]) values('" + StationName + "','" +temp[0]+ "','" + temp[1] + "','" + Content + "')";//解析JSON后修改表
                DataAccess.excuteSql(strSql);
                return "true";
            }

            return "false";
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public string ChangeRule(int id,string StationName, string Time, string Content, string tablename)
        {
            string strSql = "";
            if (tablename == "WeekRule")//加入表Weekrule
            {
                strSql = "update "+tablename+" set [Content]='" + Content + "', [WeekTime]='" + Time + "', [StationName]='" + StationName + "' where id=" + id.ToString();;//解析JSON后修改表
                DataAccess.excuteSql(strSql);
                return "true";
            }

            if (tablename == "MonthRule")
            {
                strSql = "update " + tablename + " set [Content]='" + Content + "', [MonthTime]='" + Time + "', [StationName]='" + StationName + "' where id=" + id.ToString(); ;//解析JSON后修改表
                DataAccess.excuteSql(strSql);
                return "true";
            }
            if (tablename == "YearRule")
            {
                string[] temp = Time.Split(' ');//拆分月和日
                strSql = "update " + tablename + " set [Content]='" + Content + "', [MonthTime]='" + temp[0] + "', [Day]='" + temp[1] + "', [StationName]='" + StationName + "' where id=" + id.ToString(); ;//解析JSON后修改表
                DataAccess.excuteSql(strSql);
                return "true";
            }

            return "false";
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = false)]
        public string DeleteRule(int id, string tablename)
        {
            string strSql = "delete from "+tablename+" where [id]=" + id.ToString();//解析JSON后修改表
            DataAccess.excuteSql(strSql);
            return "true";
            
        }
    }
}
