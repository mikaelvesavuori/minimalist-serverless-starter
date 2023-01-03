# Opinionated minimalist realist serverless starter

Just a sample minimalist starter to run a modern AWS-deployed [TypeScript](https://www.typescriptlang.org) application with some quality-of-life tooling such as [ESLint](https://eslint.org) and [Prettier](https://prettier.io). Packages and deploys using [Serverless Framework](https://www.serverless.com) and bundles it using [esbuild](https://github.com/evanw/esbuild).

Configurations for ESLint and Prettier are reasonable starting points. The TypeScript config is very strict to get the most out of TS features. Serverless Framework is optimized ([ARM architecture](https://aws.amazon.com/blogs/aws/aws-lambda-functions-powered-by-aws-graviton2-processor-run-your-functions-on-arm-and-get-up-to-34-better-price-performance/); short log retention; no versioning), [CORS-activated](https://www.serverless.com/blog/cors-api-gateway-survival-guide/), and set to safer-than-default settings.

## Prerequisites

- Recent [Node.js](https://nodejs.org/en/) (ideally 18+) installed.
- Amazon Web Services (AWS) account with sufficient permissions so that you can deploy infrastructure. A naive but simple policy would be full rights for CloudWatch, Lambda, API Gateway, DynamoDB, X-Ray, and S3.
- Ideally some experience with [Serverless Framework](https://www.serverless.com) as that's what we will use to deploy the service and infrastructure.

## Installation

Clone, fork, or download the repo as you normally would. Run `npm install`.

## Commands

- `npm start`: Run application locally
- `npm run build`: Package application with Serverless Framework
- `npm run deploy`: Deploy application with Serverless Framework
- `npm run teardown`: Remove stack from AWS