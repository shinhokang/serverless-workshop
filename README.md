# serverless-workshop

> 2019.03.27 Honestly workshop - Serverless Architecture

## Application

Simple application to demonstrate a usage of serverless architecture using AWS Lambda and other features.

### Features

In this application you can

- List up sent messages
- Send a message to Honestly Chat

### Architecture

![architecture](images/architecture.png 'architecture')

## Implementation

This repository has the complete example, so you don't have to follow some of this instruction if you just want to demo the application.

### Client

Based on Vue-Enterprise-Boilerplate https://github.com/chrisvfritz/vue-enterprise-boilerplate

```
# 1. Clone the repository.
git clone https://github.com/chrisvfritz/vue-enterprise-boilerplate.git my-new-project

# 2. Enter your newly-cloned folder.
cd my-new-project

# 3. Install dependencies. Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install
yarn

# 4. Replace this README's CI badge with a note about when you started
# and a link to a compare URL, so that you can always get an overview
# of new features added to the boilerplate since you cloned.
node _start.js

# 5. Delete the start script, as there can be only one beginning.
rm _start.js

# 6. Remove git information
rm -rf .git

```

#### The Mock API

See the code `tests/mock-api/routes/messages.js` and `tests/mock-api/resources/messages.js`

```
GET /api/messages
POST /api/messages
  Body {
    username: string,
    message: string,
  }
```

### New module

```
yarn new module
```

- messages

#### New components

```
yarn new component
```

- PostMessage
- MessageList

### Serverless framework

Tutorial https://serverless.com/blog/serverless-express-rest-api/

#### Pre-requisites

1. Node.js v6.5.0 or later.
1. Serverless CLI v1.9.0 or later. You can run npm install -g serverless to install it.
1. An AWS account. If you don't already have one, you can sign up for a free trial that includes 1 million free Lambda requests per month.
1. Set-up your Provider Credentials -> Watch the video on setting up credentials

#### Set up

To set up the

```
$ mkdir apis && cd apis
$ npm ini -f
```

## Todo

- [x] client app
- [ ] client app - aws deploy
- [ ] serverless framework setting
- [ ] aws lambda deploy
