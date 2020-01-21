using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Neo4j.Driver.V1;
using Newtonsoft.Json;

namespace neo4jPositionService.Controllers
{
    public class Position
    {
        public string PositionNum { get; set; }
        public string PersonnelNum { get; set; }
        public string WorkerCd { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
         private readonly IDriver _driver;

        public ValuesController()
        {
            _driver = GraphDatabase.Driver("bolt://posdb:7687", AuthTokens.Basic("neo4j", "password"));
        }

        private IList<Position> runCypher(string script)
        {
            using (var session = _driver.Session())
            {
                IList<Position> greeting = session.WriteTransaction(tx =>
                {
                    IStatementResult result = tx.Run(script);
                    IList<Position> ret = new List<Position>();
                    foreach (IRecord value in result)
                    {
                        var n = value["n"].As<INode>();
                        var r = new Position
                        {
                            PositionNum = (string)n["PositionNum"],
                            WorkerCd = (string)n["WorkerCd"]
                        };
                        if(n.Properties.Keys.Contains("PersonnelNum"))
                        {
                            r.PersonnelNum = (string)n["PersonnelNum"];
                        }
                        ret.Add(r);
                    }
                    return ret;
                });
                return greeting;
            }
        }


        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Position> Get()
        {
            StringBuilder runinng = new StringBuilder("Match (n) return n");
            return runCypher(runinng.ToString());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IEnumerable<Position> Get(int id)
        {
            StringBuilder runinng = new StringBuilder("Match (n) where n.PositionNum =~ \".*"+id+".*\" return n");
            return runCypher(runinng.ToString());
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
