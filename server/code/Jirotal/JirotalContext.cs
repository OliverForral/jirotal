using Microsoft.EntityFrameworkCore;

namespace Jirotal.Notes
{
    public class JirotalContext : DbContext
    {
        public DbSet<NoteModel> Notes { get; set; }
        protected override void OnConfiguring(DBContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./Jirotal.db");
        }
    }
}