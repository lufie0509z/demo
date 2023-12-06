using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;
using SQLitePCL;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<Result<List<Activity>>> { }

        public class Handler : IRequestHandler<Query, Result<List<Activity>>>
        {
            private readonly DataContext _context;
            // private readonly ILogger<List> _logger;
            public Handler(DataContext context)
            {
                _context = context;
                // _logger = logger;
            }

            public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken token)
            {
                // try
                // {
                //     for (var i = 0; i < 10; i++)
                //     {
                //         token.ThrowIfCancellationRequested();
                //         await Task.Delay(1000, token);
                //         _logger.LogInformation($"Task {i} has completed");
                //     }
                // }
                // catch (System.Exception)
                // {
                //     _logger.LogInformation("Task has been cancelled");
                // }

                return Result<List<Activity>>.Success(await _context.Activities.ToListAsync());
            }
        }
    }
}