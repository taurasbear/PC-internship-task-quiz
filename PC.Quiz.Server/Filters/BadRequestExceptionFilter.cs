namespace PC.Quiz.Server.Filters
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Filters;
    using PC.Quiz.Application.Common.Exceptions;
    using System.Net.Mime;

    public class BadRequestExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            if (context.Exception is BadRequestException ex)
            {
                var errorResponse = new { ex.Errors };
                var result = new BadRequestObjectResult(errorResponse);
                result.ContentTypes.Add(MediaTypeNames.Application.Json);
                context.Result = result;
                context.ExceptionHandled = true;
            }
        }
    }
}
