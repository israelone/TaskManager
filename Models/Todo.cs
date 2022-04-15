

namespace TodoList.Models
{
    public class Todo
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public string DueDate { get; set; }
        public string DateCreated { get; set; }
        public string Status { get; set; }

        public Todo()
        {

        }
    }
}
