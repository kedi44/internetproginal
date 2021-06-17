using Dapper;
using HasanAksoyAPI.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web.Http;

namespace HasanAksoyAPI.Controllers
{
    public class HomeController : ApiController
    {
        [HttpGet]
        [Route("api/GetCustomers")]
        public List<dynamic> GetCustomers()
        {
            using (var sqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["DBContext"].ToString()))
            {
                var model = sqlConnection.QueryMultiple("select * from CUSTOMER");

                var result = model.Read().ToList();

                return result;
            }
        }
        [HttpGet]
        [Route("api/GetAdmins")]
        public List<dynamic> GetAdmins()
        {
            using (var sqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["DBContext"].ToString()))
            {
                var model = sqlConnection.QueryMultiple("select * from ADMIN");

                var result = model.Read().ToList();

                return result;
            }
        }
        [HttpGet]
        [Route("api/GetProducts")]
        public List<dynamic> GetProducts()
        {
            using (var sqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["DBContext"].ToString()))
            {
                var model = sqlConnection.QueryMultiple("select * from GAME");

                var result = model.Read().ToList();

                return result;
            }
        }
        [HttpPost]
        [Route("api/AddProduct")]
        public ResultMessage AddProduct(Game entity)
        {
            try
            {

                using (var sqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["DBContext"].ToString()))
                {
                    var dbArgs = new DynamicParameters();
                    dbArgs.Add("@gameId", entity.gameId);
                    dbArgs.Add("@gamename", entity.gamename);
                    dbArgs.Add("@gameprice", entity.gameprice);
                    dbArgs.Add("@licensenumber", entity.licensenumber);

                    var model = sqlConnection.Query(
                        @"insert into GAME 
                    (gameId,gamename,gameprice,licensenumber) values 
                    (@gameId,@gamename,@gameprice,@licensenumber)", dbArgs);

                    return new ResultMessage(true);
                }
            }
            catch (Exception ex)
            {
                return new ResultMessage(false, ex.Message);
            }
        }
        [HttpPost]
        [Route("api/DeleteProduct")]
        public ResultMessage DeleteProduct(Game entity)
        {
            try
            {

                using (var sqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["DBContext"].ToString()))
                {
                    var dbArgs = new DynamicParameters();
                    dbArgs.Add("@gameId", entity.gameId);

                    var model = sqlConnection.Query("delete from GAME where gameId=@gameId", dbArgs);

                    return new ResultMessage(true);
                }
            }
            catch (Exception ex)
            {
                return new ResultMessage(false, ex.Message);
            }
        }
        [HttpPost]
        [Route("api/Register")]
        public ResultMessage Register(Customer entity)
        {
            try
            {

                using (var sqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["DBContext"].ToString()))
                {
                    var dbArgs = new DynamicParameters();
                    dbArgs.Add("@customername", entity.customername);
                    dbArgs.Add("@customerpassword", entity.customerpassword);
                    dbArgs.Add("@customerphonenumber", entity.customerphonenumber);
                    dbArgs.Add("@customergame", entity.customergame);
                    dbArgs.Add("@customeradress", entity.customeradress);
                    dbArgs.Add("@gamename", entity.gamename);

                    var model = sqlConnection.Query(
                        @"insert into CUSTOMER 
                    (customername,customerphonenumber,customeradress,customergame,gamename,customerpassword) values 
                    (@customername,@customerphonenumber,@customeradress,@customergame,@gamename,@customerpassword)", dbArgs);

                    return new ResultMessage(true);
                }
            }
            catch (Exception ex)
            {
                return new ResultMessage(false, ex.Message);
            }
        }
        [HttpPost]
        [Route("api/CheckUsernamePassword")]
        public ResultMessage CheckUsernamePassword(Admin entity)
        {
            using (var sqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["DBContext"].ToString()))
            {
                var dbArgs = new DynamicParameters();
                dbArgs.Add("@adminid", entity.adminid);
                dbArgs.Add("@adminpassword", entity.adminpassword);

                var model = sqlConnection.QueryMultiple("select * from ADMIN where adminid=@adminid and adminpassword=@adminpassword", dbArgs);

                var result = model.Read().ToList();

                return result.Count != 0 ? new ResultMessage(true) : new ResultMessage(false,"Bİlgiler hatalı.");
            }
        }
    }
}
