using Application.Core;
using AutoMapper;
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
        public class Query : IRequest<Result<List<ActivityDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<ActivityDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            // private readonly ILogger<List> _logger;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
                // _logger = logger;
            }

            public async Task<Result<List<ActivityDto>>> Handle(Query request, CancellationToken token)
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

                var activities = await _context.Activities
                    .Include(a => a.Attendees)
                    .ThenInclude(u => u.AppUser)
                    .ToListAsync(token);

                var activitiesToReturn = _mapper.Map<List<ActivityDto>>(activities);

                return Result<List<ActivityDto>>.Success(activitiesToReturn);
            }
        }
    }
}