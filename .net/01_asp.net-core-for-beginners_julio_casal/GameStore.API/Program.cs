using GameStore.API.DTOs;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

List<GameDTO> games =
[


];

app.MapGet("/", () => "Hello World! 2");

app.Run();
