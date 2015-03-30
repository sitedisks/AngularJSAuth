using AngularJSAuth.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularJSAuth.Controllers
{
    [RoutePrefix("api/Orders")]
    public class OrdersController : ApiController
    {
        //[Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(Order.CreateOrders());
        }
    }
}
