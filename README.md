# 14-Social-api

## Description

Social API is a RESTful API built using Express and MongoDB for managing users, thoughts, and reactions in a social media application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Connect to MongoDB](#connect-to-mongodb)
- [Start the Server](#start-the-server)
- [Warnings](#warnings)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:CrisCo116/14-Social-api.git

## Install dependencies:

1. npm install
2. npm install mongoose
3. npm install express

## Usage

1. Configure the application (see Configuration).
2. Connect to MongoDB (see Connect to MongoDB).
3. Start the server (see Start the Server).

## Dependencies
* Express: "^4.18.2"
* Mongoose: "^8.0.2"
* Moment: "^2.29.4"

## Configuration

Setup a connections.js file with your MongoDB URI.

* const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialMediaDb';

## Start the Server

Run the following command to start the Express server:

1. npm start

The server will run on the specified port (default is 3001).

## Warnings

The application currently uses deprecated MongoDB options. Consider updating to the latest MongoDB Node.js driver.

## Contributing

Feel free to contribute to this project. Fork the repository and submit a pull request.