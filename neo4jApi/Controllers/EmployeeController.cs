using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using neo4jApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace neo4jApi.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        HttpClient client;
        public EmployeeController()
        {
            client = new HttpClient();
            client.BaseAddress = new Uri("http://employee-micro:80/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

        }
        // GET: api/<controller>
        [EnableCors]
        [HttpGet]
        public async Task<IEnumerable<EmployeeBundle>> GetAsync()
        {
            var s = await client.GetAsync("api/values");
            if (s.IsSuccessStatusCode)
            {
                var r = s.Content.ReadAsAsync<IList<EmployeeBundle>>();
                return await r;
            }
            return null;
        }

        // GET api/<controller>/5
        [EnableCors]
        [HttpGet("{id}")]
        public async Task<IEnumerable<EmployeeBundle>> GetAsync(int id)
        {
            var s = await client.GetAsync("api/values/"+id);
            if (s.IsSuccessStatusCode)
            {
                var r = s.Content.ReadAsAsync<IList<EmployeeBundle>>();
                return await r;
            }
            return null;
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
