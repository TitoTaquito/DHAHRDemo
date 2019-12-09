using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using neo4jApi.Models;

namespace neo4jApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        HttpClient client;

        public ValuesController()
        {
            client = new HttpClient();
            client.BaseAddress = new Uri("https://localhost:44363/");
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

        }

        // GET api/values
        [EnableCors]
        [HttpGet]
        public async Task<IEnumerable<Position>> GetAsync()
        {
            var s = await client.GetAsync("api/values");
            if (s.IsSuccessStatusCode)
            {
                var r = s.Content.ReadAsAsync<IList<Position>>();
                return await r;
            }
            return null;
        }

        // GET api/values/5
        [EnableCors]
        [HttpGet("{id}")]
        public async Task<IEnumerable<Position>> GetAsync(int id)
        {
            var s = await client.GetAsync("api/values");
            if (s.IsSuccessStatusCode)
            {
                var r = s.Content.ReadAsAsync<IList<Position>>();
                return await r;
            }
            return null;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
