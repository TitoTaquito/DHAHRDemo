FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS build
WORKDIR /src
COPY ["neo4jEmployeeService.csproj", "./"]
RUN dotnet restore "./neo4jEmployeeService.csproj"
COPY . .
RUN dotnet publish "neo4jEmployeeService.csproj"  -o /app/publish

FROM mcr.microsoft.com/dotnet/core/aspnet:2.1 AS final
WORKDIR /app
#ENV ASPNETCORE_URLS="https://+443;http://+80"
ENV ASPNETCORE_URLS="http://+80"
#ENV ASPNETCORE_HTTPS_PORT=443
#ENV ASPNETCORE_Kestrel__Certificates__Default__Path=/https/aspnetapp.pfx
EXPOSE 80
# EXPOSE 80
# EXPOSE 5001
# EXPOSE 44361
# EXPOSE 44360
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "neo4jEmployeeService.dll"]
