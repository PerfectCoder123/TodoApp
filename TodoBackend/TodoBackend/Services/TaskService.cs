using TodoBackend.Models;
using TodoBackend.Repositories;

namespace TodoBackend.Services
{
    public interface ITaskService
    {
        Task<List<TodoTask>> GetAllTasksAsync();
        Task<TodoTask?> GetTaskByIdAsync(int id);
        Task<IEnumerable<TodoTask>> GetTasksByDateAsync(DateTime date); 
        Task<IEnumerable<TodoTask>> GetTasksByCategoryIdAsync(int categoryId);
        Task AddTaskAsync(TodoTask task);
        Task UpdateTaskAsync(TodoTask task);
        Task DeleteTaskAsync(int id);
    }

    public class TaskService(ITaskRepository taskRepository) : ITaskService
    {
        public async Task<List<TodoTask>> GetAllTasksAsync()
        {
            return await taskRepository.GetAllTasksAsync();
        }

        public async Task<TodoTask?> GetTaskByIdAsync(int id)
        {
            return await taskRepository.GetTaskByIdAsync(id);
        }

        public async Task<IEnumerable<TodoTask>> GetTasksByCategoryIdAsync(int categoryId)
        {
            return await taskRepository.GetTasksByCategoryIdAsync(categoryId);
        }
        public async Task<IEnumerable<TodoTask>> GetTasksByDateAsync(DateTime date) 
        {
            return await taskRepository.GetTasksByDateAsync(date);
        }

        public async Task AddTaskAsync(TodoTask task)
        {
            await taskRepository.AddTaskAsync(task);
        }

        public async Task UpdateTaskAsync(TodoTask task)
        {
            await taskRepository.UpdateTaskAsync(task);
        }

        public async Task DeleteTaskAsync(int id)
        {
            await taskRepository.DeleteTaskAsync(id);
        }
    }
}