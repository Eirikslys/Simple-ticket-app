public class Ticket
{
public int Id { get; set; }
public string? Title { get; set; }
public string? Description { get; set; }
public string? Category { get; set; }
public string? Status { get; set; }
// [DataType(DataType.Date)]
public DateTime CreatedAt { get; set; }
}