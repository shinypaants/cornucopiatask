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
                // Used Postman to be able to test the end points but couldn't get to work it out and stuck.
                var number = phoneNumberUtil.Parse(phoneNumber, countryCode);
                var isValid = phoneNumberUtil.IsValidNumber(number);
                var isPossible = phoneNumberUtil.IsPossibleNumber(number);
                var phoneType = phoneNumberUtil.GetNumberType(number).ToString();
                var internationalFormat = phoneNumberUtil.Format(number, PhoneNumberFormat.INTERNATIONAL);

                return Ok(new
                {
                    isValid,
                    isPossible,
                    phoneType,
                    internationalFormat
                });

            }
            catch (NumberParseException)
            {
                return BadRequest("Invalid phone number format.");
            }
        }
    }
}
