using Microsoft.AspNetCore.Mvc;
using PhoneNumbers;

namespace PhoneNumberChecker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PhoneController : ControllerBase
    {
        [HttpGet("validate")]
        public ActionResult ValidatePhoneNumber(string phoneNumber, string countryCode)
        {
            var phoneNumberUtil = PhoneNumberUtil.GetInstance();
            try
            {
                var number = phoneNumberUtil.Parse(phoneNumber, countryCode);
                var isValid = phoneNumberUtil.IsValidNumber(number);
                var isPossible = phoneNumberUtil.IsPossibleNumber(number);
                var phoneType = phoneNumberUtil.GetNumberType(number);
                var internationalFormat = phoneNumberUtil.AsYouTypeFormatter(number);

                return Ok(new { isValid });
            }
            catch (NumberParseException)
            {
                return BadRequest("Invalid phone number format.");
            }
        }
    }
}
