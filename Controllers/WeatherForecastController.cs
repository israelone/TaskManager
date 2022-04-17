using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodoList.Data;
using Microsoft.AspNetCore.Mvc.Rendering;
using TodoList.Models;

namespace TodoList.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public WeatherForecastController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            var objTodoList = _context.Todo.ToList();
            return objTodoList;

        }

        [HttpPost]
        public void Post(Todo obj)
        {
            if (ModelState.IsValid)
            {
                _context.Todo.Add(obj);
                _context.SaveChanges(); 
            }
        }


    }
}
