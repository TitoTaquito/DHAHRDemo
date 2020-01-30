FROM mcr.microsoft.com/dotnet/core/aspnet:2.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS build
WORKDIR /src
COPY ["/neo4jPositionService.csproj", "/"]
RUN dotnet restore "/neo4jPositionService.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "neo4jPositionService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "neo4jPositionService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "neo4jPositionService.dll"]
