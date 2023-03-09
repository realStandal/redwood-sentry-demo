<div align="center">
  <h1>🚔&nbsp;&nbsp;&nbsp;Sentry</h1>
  <p>(a) Demonstration of <a href="https://sentry.io/welcome/">Sentry</a> error and performance tracking in a RedwoodJS application</p>
  <br />
</div>

## Getting Started

### 0) Prerequisites

* See and fulfill the [RedwoodJS prerequisites](https://redwoodjs.com/docs/quick-start)
* Create a [Sentry](https://sentry.io/welcome/) account

### 1) Get the code

```bash
git clone https://github.com/realStandal/redwood-sentry-demo.git
```

```bash
cd redwood-sentry-demo
```

```bash
yarn install
```

### 2) Create and configure a Sentry project

Start by heading to Sentry's [create a project](https://sentry.io/projects/new/) page and setup a _Browser JavaScript_ project with the name `"redwood-sentry-demo"`. Once your project has been created, grab its DSN from [the relevant page](https://sentry.io/settings/projects/redwood-sentry-demo/keys/) and set its value as the `SENTRY_DSN` envrionment variable.

```dotenv
SENTRY_DSN=https://XXXXXXX@XXXXXXX.ingest.sentry.io/XXXXXXX
```

### 3) Create an SQLite database

Create an SQLite database which will temporarily store registered users and be used to perform Prisma queries against.

```bash
yarn rw prisma db push
```

### 4) Register an account

Start the RedwoodJS development server:

```bash
yarn rw dev
```

Then navigate to the [`/signup`](http://localhost:8910/signup) page to create an account.

### 5) Test error and performance tracing

The [home page](http://localhost:8910) provides a list of links to various pages which will trigger the following:

* **Function Exception** - Trigger [a serverless Function](https://github.com/realStandal/redwood-sentry-demo/blob/main/api/src/functions/exception/exception.ts) which throws an error tagged to the current user (via the web).
* **Service Exception** - Trigger [a service](https://github.com/realStandal/redwood-sentry-demo/blob/main/api/src/services/exception/exception.ts) which throws an error tagged to the current user (via the API and web).
* **Prisma Tracing** - Trigger [a service](https://github.com/realStandal/redwood-sentry-demo/blob/main/api/src/services/users/users.ts) which invokes a Prisma query, logging details about the request to Sentry.
* **Unauthenticated Exception** - Trigger [a service](https://github.com/realStandal/redwood-sentry-demo/blob/main/api/src/services/exception/exception.ts) which throws an error as an unauthenticated user.

## License

This project is provided under [the MIT license](./LICENSE)
