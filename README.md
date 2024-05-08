# Docker Django Postgres React

Dockerized web application.

## docker-compose.yml
Change owner of DB data directory to UID:GID defined in .env<br>
(```sudo chown -R ${UID}:${GID} data```) to be able to use anonymous volume:<br>
```
services:
  db:
    volumes:
      - ./data/db:/var/lib/postgresql/data/
```
Or use named volume stored in the docker installation directory:<br>
```
services:
  db:
    volumes:
      - data:/var/lib/postgresql/data/
volume:
  data:
```
