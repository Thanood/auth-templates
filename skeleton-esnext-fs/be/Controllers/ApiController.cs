using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Cors;

namespace WebAPI.Controllers
{
    [Route("api")]
    public class ApiController : Controller
    {
        [EnableCors("CorsPolicy")]
        [HttpGet("users")]
        public async Task<string> GitHubUsers()
        {
            var uri = new Uri("https://api.github.com/users");
            string returnValue = String.Empty;

            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Add("User-Agent", "backEndApplication");

            try
            {
                HttpResponseMessage response = await client.GetAsync(uri);
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();

                returnValue =  responseBody;
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine("\nException Caught!");
                Console.WriteLine("Message :{0} ", e.Message);
            }

            client.Dispose();

            return returnValue;

        }

    }
}
