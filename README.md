# Boilerplate-Framework

This repo can be used as a starter kit for creating web apps. The backend uses
Koa, Redis, and a postgres database. The front end is frameworkless but leverages
native DOM APIs in an object-oriented setting.

To get started, create a .env file with the following variables:

PORT,
DATABASE_URL,
REDIS_HOST (e.g. localhost),
REDIS_PORT,
CORS_ORIGIN,

While it contains files to interact with a database, this starter kit does not
contain any database set up. This will need to be done separately for each project.

This inspiration for this boiler plate came from [this tutorial](https://github.com/triestpa/Atlas-Of-Thrones/tree/master).
