# DocOps Static Website with Serverless Framework

A tangible example demonstrating the DocOps Method based on the deployment of a static website on AWS
This is an executable specification for humans and machines.

This `README.md` file is parsed by Gauge that parameterize the execution of the Serverless framework.
The key part about this example is that the the parameter aren't written in a config `yml/json` file but in this `README.me` documentation.
Furthermore it is possible to do some profane checks:

* The deployed website is up and running.
* Check if the URL mentioned in this documentation are still working.

Every heading in this file denotes a scenario. Every bulleted point denotes a step.

## Project Facts

Some facts about the static website example:

* This website is deployed with the "Serverless Components"
* This website uses "AWS" utilizing S3, CloudFront and Route53.
* This website is reachable under the domain "static-example.docops.info"
* An alias with "www.static-example.docops.info" exists also

## Run Example

To execute this example you need to run:

* Test

```sh
cd static-website/opscode/
npm run opscode
// or
gauge run ../README.md
```

See [Setup](#Setup) Section to know how to do the setup

### BOM (Bill of Materials)

* Gauge with Gauge JS
* JavaScript/NodeJs
* Serverless Components Framework

## Setup

In order to run this example you need to install npm & gauge.

* Install NodeJS and make sure it is working
* Install Gauge by following the installation from "https://docs.gauge.org/latest/installation.html"
* Install the JavaScript language plugin for Gauge from "https://github.com/getgauge/gauge-js"
* Run `npm install` to install all the packages

### Step-by-Step Explanation

This example does a three major things. You can analyze the steps in source code.

```sh
static-website
    ↳ opscode
    ↳ site
    README.md

```

* Test

### Procedure
