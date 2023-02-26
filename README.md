# Baupal's Renovation Request Platform

According to original task: https://baupal.notion.site/Backend-Engineer-Aleksandr-4bc0127d51da4af0980e5d6eadacdacf
There is not strict requirements for data model and current form fields.
Idea for data to be stored got from here: https://mein.baupal.de/anfrage-sanierungsfahrplan

Currently only on request for same building address allowed.
Unique constraint defined for composition of Address fields: [plz, address]

The app implements typical MVC approach which is typical for Nest.js.
It allows to split Model (entity), View (dto) and Controller (logic) to easily maintain and enrich app with entities and function.

To increase app's scalability dramatically propose to implement CQRS:
- introduce separate Query base interface, QueryDispatcher and QueryHandler base classes and default implementations. 
- introduce separate Command base interface, CommandDispatcher and CommandHandler base classes and default implementations.
- introduce separate Event base interface, EventDispatcher and QueryHandler base classes and default implementations.
- introduce nest.js's CQRS module to setup the registry for queries and commands. 
- rewrite each controller method: it dispatches Query (find, findAll) or Command (post, update) to appropriate bus.
- for each particular Command/Query specific Handler must be implemented and registered at CQRS module's registry.
- handler allowed to inject with DI services to interact with persistence data.
- handler not allowed to call other handler or queries.
- handler allowed to dispatch events to be processed asynchronously by event handler.

## Backend

Nest.js-based node.js backend app with mikro-orm.

## Run the app

### In a Docker
- install docker (and docker-compose)
- enter `./deploy` dir
- run `docker-compose up -d --build`
- open `http://localhost:3000/api` with your browser

### Run it locally
- backend
  - `cd ./back`
  - `npm ci`
  - `npm run build`
  - `npm run start`
  - open `http://localhost:3000/api with browser`