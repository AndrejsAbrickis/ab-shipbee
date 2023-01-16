# Description
ab-shipbee project consist of the following services
* db - MariaBD MySQL database (PORT 3306)
* api - Shipping service API running on Nest.js (PORT 3900)
* webapp - Shipping service Web client running on Angular (PORT 4200)

# Setup instructions
To run all services in development mode run the following command in terminal which will start all services as docker containers
```bash
docker-compose up -d
```

# ToDo
- [ ] Improve API exception responses
- [ ] Refactor the repository usage into Query objects
- [ ] Implement Responsive UI (currently supports desktop mode only)
- [ ] Implement New Parcel form validation
- [ ] Cover API endpoints, DB queries with integration tests
- [ ] Cover Client-Side APP with E2E tests
- [ ] Implement Parcel list sorting

