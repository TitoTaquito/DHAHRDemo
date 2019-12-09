using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace neo4jApi.Models
{
    public class EmployeeBundle
    {
        public Employee employee { get; set; }
        public EmployeeAction employeeAction { get; set; }
    }
}
