using System;
using System.ComponentModel.DataAnnotations;

namespace Jirotal.Notes
{
    public class NoteModel
    {
        [Key]
        public long Id { get; set; }
        [Required]
        [MaxLength(64)]
        public string Title { get; set; }
    }
}