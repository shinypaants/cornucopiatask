using Microsoft.AspNetCore.Mvc;
using PhoneNumbers;

namespace PhoneNumberChecker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CountryController : ControllerBase
    {
        [HttpGet("supported")]
        public ActionResult GetSupportedCountries()
        {
            var regions = PhoneNumberUtil.GetInstance().GetSupportedRegions();
            return Ok(regions);
        }
    }
}
