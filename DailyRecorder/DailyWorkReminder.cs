using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;

namespace DailyRecorder
{
    public class DailyWorkReminder
    {
        public static string SearchDailyWork(string Date)
        {
            DatePre dp = new DatePre(Date);
            DataSet a = new DataSet();
            try
            {
                string strSql="select id,StationName,Content from WeekRule where [WeekTime]='" + dp.WeekTime + "' UNION select id,StationName,Content from MonthRule where [MonthTime]=" + dp.MouthTime + " UNION select id,StationName,Content from YearRule where [MonthTime]=" + dp.Mouth + " and [Day]="+dp.Day;//暂不考虑时间
                a = AccessHelper.ExecuteDataset(CommandType.Text, strSql);
                //update DefectRecord set [Time]=#2015/2/13 18:00:00#
                
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
            string re = ConvertJson.ToJson(a);

            return re;
        }
        //不带参数，查找所有日常工作
        public static DataSet SearchDailyWork()
        {
            DataSet a = new DataSet();
            DataTable tb1,tb2,tb3 = new DataTable();
            try
            {
                tb1 = AccessHelper.ExecuteDataTable(CommandType.Text,"select * from WeekRule");//第一个
                a.Tables.Add(tb1);

                tb2 = AccessHelper.ExecuteDataTable(CommandType.Text, "select * from MonthRule");//第二个
                a.Tables.Add(tb2);
                tb3 = AccessHelper.ExecuteDataTable(CommandType.Text, "select * from YearRule");//第三个
                a.Tables.Add(tb3);

            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
            
            return a;
        }
    }
}