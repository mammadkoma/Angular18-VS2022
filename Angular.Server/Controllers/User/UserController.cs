namespace Angular.Server.Controllers.User;
[Route("api/[controller]/[action]")]
[ApiController]
public class UserController : ControllerBase
{
    public ActionResult GetAll()
    {
        return Ok(new List<UserDto>
        {
            new UserDto { Id = 1, UserName = "komaei@live.com" },
            new UserDto { Id = 2, UserName = "mammadkoma@gmail.com" }
        });
    }
}
