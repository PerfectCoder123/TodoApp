using Microsoft.AspNetCore.Mvc;
using TodoBackend.Models;
using TodoBackend.Services;

namespace TodoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController(ITaskService taskService) : ControllerBase
    {
        [HttpGet("all")]
        public async Task<ActionResult<List<TodoTask>>> GetAllTasks()
        {
            var tasks = await taskService.GetAllTasksAsync();
            return Ok(tasks);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TodoTask>> GetTaskById(int id)
        {
            var task = await taskService.GetTaskByIdAsync(id);
            if (task == null)
                return NotFound($"Task with ID {id} not found.");
            return Ok(task);
        }

        [HttpGet("category/{categoryId}")]
        public async Task<ActionResult<IEnumerable<TodoTask>>> GetTasksByCategoryId(int categoryId)
        {
            var tasks = await taskService.GetTasksByCategoryIdAsync(categoryId);
            return Ok(tasks);
        }

        [HttpGet("date/{date}")]
        public async Task<ActionResult<IEnumerable<TodoTask>>> GetTasksByDate(DateTime date)
        {
            var tasks = await taskService.GetTasksByDateAsync(date);
            
            return Ok(tasks);
        }

        [HttpPost]
        public async Task<ActionResult> AddTask([FromBody] TodoTask task)
        {
            await taskService.AddTaskAsync(task);
            return CreatedAtAction(nameof(GetTaskById), new { id = task.Id }, task);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateTask(int id, [FromBody] TodoTask task)
        {
            if (id != task.Id)
                return BadRequest("Task ID mismatch.");

            var existingTask = await taskService.GetTaskByIdAsync(id);
            if (existingTask == null)
                return NotFound($"Task with ID {id} not found.");

            await taskService.UpdateTaskAsync(task);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTask(int id)
        {
            var existingTask = await taskService.GetTaskByIdAsync(id);
            if (existingTask == null)
                return NotFound($"Task with ID {id} not found.");

            await taskService.DeleteTaskAsync(id);
            return NoContent();
        }
    }
}
