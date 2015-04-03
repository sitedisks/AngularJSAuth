using AngularJSAuth.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularJSAuth.Controllers
{
    public class TempController : ApiController
    {
        ToHowEntities _tohowDB = new ToHowEntities();

        // GET: api/Temp
        public IEnumerable<tblTemp> Get()
        {
            return _tohowDB.tblTemps;
        }

        // GET: api/Temp/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Temp
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Temp/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Temp/5
        public void Delete(int id)
        {
        }
    }
}
