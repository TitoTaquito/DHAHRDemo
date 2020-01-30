FROM mcr.microsoft.com/dotnet/core/aspnet:2.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS build
WORKDIR /src
COPY ["/neo4jApi.csproj", "/"]
RUN dotnet restore "/neo4jApi.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet publish "neo4jApi.csproj" -c Release -o /app/publish


FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "neo4jApi.dll"]
