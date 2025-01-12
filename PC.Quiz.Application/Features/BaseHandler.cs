namespace PC.Quiz.Application.Features
{
    using AutoMapper;
    using MediatR;
    using PC.Quiz.Application.Interfaces.Data;
    using System.Threading;
    using System.Threading.Tasks;

    public abstract class BaseHandler<TRequest, TResponse> : IRequestHandler<TRequest, TResponse>
        where TRequest : IRequest<TResponse>
    {
        public IMapper mapper { get; set; }

        public IUnitOfWork unitOfWork { get; set; }

        protected BaseHandler(IMapper mapper, IUnitOfWork unitOfWork)
        {
            this.mapper = mapper;
            this.unitOfWork = unitOfWork;
        }

        public abstract Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken);
    }
}
