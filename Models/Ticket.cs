using System.ComponentModel.DataAnnotations;
public class Ticket
{
public int Id { get; set; }
public string? Title { get; set; }
public string? Description { get; set; }
public string? Category { get; set; }
public string? Status { get; set; }
[DataType(DataType.Date)]
public DateTime CreatedAt { get; set; }
}

// dotnet aspnet-codegenerator controller -name TicketController -m Ticket -dc
// TicketContext --relativeFolderPath Controllers
// --api --referenceScriptLibraries

// "TicketContext": "Server=(localdb)\\mssqllocaldb;Database=;Trusted_Connection=True;MultipleActiveResultSets=true"
// from appsettings.json, this was what was removed