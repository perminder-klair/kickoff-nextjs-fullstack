## `kickoff-apollo-server`

> An opinionated boilerplate for apollo graphql with batteries included.

#### Requirements

```bash
- Node >=v10.16.0
- NPM >=v6.9.0
- MongoDB
```

#### Features

```bash
- Apollo Graphql
- User Authorisation (Login, Register, Reset Password, Update User)
- Winston Logger
- Email notifications (powered by Mailgun, Sendgrid or Mandrill)
- ESLint with Prettier using airbnb guidelines
```

### Setup

```bash
  # install all dependencies
  λ yarn install
  # run the project
  λ yarn dev
```

### Scripts

- `yarn dev` - starts the server in dev mode with hot-reloading
- `yarn lint` - lints all the files in `src/` folder
- `yarn deploy` - deploy live to now.sh host
