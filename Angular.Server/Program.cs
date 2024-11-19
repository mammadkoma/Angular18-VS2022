var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddCors(options => options.AddPolicy(name: "AppOrigins",
policy => { policy.WithOrigins("https://localhost:53711").AllowAnyMethod().AllowAnyHeader(); }));

var app = builder.Build();

app.UseCors("AppOrigins");
app.UseDefaultFiles();
app.UseStaticFiles();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.MapFallbackToFile("/index.html");
app.Run();
