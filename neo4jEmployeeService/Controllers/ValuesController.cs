using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Neo4j.Driver.V1;
using Newtonsoft.Json;

namespace neo4jEmployeeService.Controllers
{
    public class Employee
    {
        public string PersonnelNum { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string HomePhone { get; set; }
    }
    public class EmployeeAction
    {
        public string EmployeeStatusCd { get; set; }
        public string OfficeNum { get; set; }
        public string Step { get; set; }
        public string WorkPhone { get; set; }
        public string WorkScheduleCd { get; set; }
    }
    public class Result
    {
        public Employee employee { get; set; }
        public EmployeeAction employeeAction {get; set;}
    }

    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IDriver _driver;

        public ValuesController(IConfiguration config)
        {
            _driver = GraphDatabase.Driver("bolt://"+config["DBServer"]+":"+config["DBPort"], AuthTokens.Basic(config["DBUser"], config["DBPassword"]));
        }

        private IList<Result> runCypher(string script)
        {
            using (var session = _driver.Session())
            {
                IList<Result> greeting = session.WriteTransaction(tx =>
                {
                    IStatementResult result = tx.Run(script);
                    IList<Result> ret = new List<Result>();
                    foreach (IRecord value in result)
                    {
                        var n = value["n"].As<INode>();
                        var m = value["m"].As<INode>();

                        Employee emp = new Employee
                        {
                            PersonnelNum = (string)n["PersonnelNum"],
                            FirstName = (string)n["FirstName"],
                            LastName = (string)n["LastName"]
                        };
                        EmployeeAction eA = new EmployeeAction
                        {
                             EmployeeStatusCd = (string)m["EmployeeStatusCd"],
                             OfficeNum = (string)m["OfficeNum"],
                             Step = (string)m["Step"],
                             WorkPhone = (string)m["WorkPhone"],
                             WorkScheduleCd = (string)m["WorkScheduleCd"]
                        };

                        if (n.Properties.Keys.Contains("HomePhone"))
                        {
                            emp.HomePhone = (string)n["HomePhone"];
                        }

                        ret.Add(new Result
                        {
                            employee = emp,
                            employeeAction = eA
                        });

                    }
                    return ret;
                });
                return greeting;
            }
        }


        // GET: api/<controller>
        [HttpGet]
        public IList<Result> Get()
        {

            StringBuilder runinng = new StringBuilder("Match (n:Employee)<-[*1]-(m:EmployeeAction) return n,m");

            return runCypher(runinng.ToString());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IList<Result> Get(int id)
        {
            StringBuilder runinng = new StringBuilder("Match (n:Employee)<-[*1]-(m:EmployeeAction) where n.PersonnelNum =~ \".*"+id+".*\" return n,m");
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
