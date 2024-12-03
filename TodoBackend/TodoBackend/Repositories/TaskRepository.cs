using Microsoft.EntityFrameworkCore;
using TodoBackend.Data;
using TodoBackend.Models;

namespace TodoBackend.Repositories
{
    public interface ITaskRepository
    {
        Task<List<TodoTask>> GetAllTasksAsync();
        Task<TodoTask?> GetTaskByIdAsync(int id);
        Task<IEnumerable<TodoTask>> GetTasksByDateAsync(DateTime date);  // New method
        Task<IEnumerable<TodoTask>> GetTasksByCategoryIdAsync(int categoryId);
        Task AddTaskAsync(TodoTask task);
        Task UpdateTaskAsync(TodoTask task);
        Task DeleteTaskAsync(int id);
    }

    public class TaskRepository(AppDbContext context) : ITaskRepository
    {
        public async Task<List<TodoTask>> GetAllTasksAsync()
        {
            return await context.Tasks.ToListAsync();
        }

        public async Task<TodoTask?> GetTaskByIdAsync(int id)
        {
            return await context.Tasks.FindAsync(id);
        }

        public async Task<IEnumerable<TodoTask>> GetTasksByCategoryIdAsync(int categoryId)
        {
            return await context.Tasks
                .Where(t => t.CategoryId == categoryId)
                .ToListAsync();
        }
        
        public async Task<IEnumerable<TodoTask>> GetTasksByDateAsync(DateTime date) 
        {
            return await context.Tasks
                .Where(t => t.Date.Date == date.Date) 
                .ToListAsync();
        }

        public async Task AddTaskAsync(TodoTask task)
        {
            await context.Tasks.AddAsync(task);
            await context.SaveChangesAsync();
        }

        public async Task UpdateTaskAsync(TodoTask task)
        {
            var existingTask = await context.Tasks.FindAsync(task.Id);
            if (existingTask != null)
            {
                context.Entry(existingTask).State = EntityState.Detached;
                context.Tasks.Update(task);
                await context.SaveChangesAsync();
            }
        }

        public async Task DeleteTaskAsync(int id)
        {
            var task = await context.Tasks.FindAsync(id);
            if (task != null)
            {
                context.Tasks.Remove(task);
                await context.SaveChangesAsync();
            }
        }
    }
}