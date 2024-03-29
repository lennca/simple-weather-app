# Simple Weather Application

## About
This is a simple weather application fetching data from [Open Weather Map](https://openweathermap.org/).

The application is built using React on the client-side and Node.js + Express for the server-side part of the application.

API: [Open Weather Map](https://openweathermap.org/)

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Make sure to have the following installed:

* [Node.js](https://nodejs.org/en/)

### Installation

1. Sign up and get a free API Key at [Open Weather Map](https://openweathermap.org/)
2. Clone the repo
  ```sh
  git clone https://github.com/Lennca/SimpleWeatherApp.git
  ```
3. Install NPM packages
  ```sh
  npm install
  ```
4. Create and enter your API-key in the `.env` in the directory /backend
  ```JS
  WEATHER_API_KEY=<YOUR_API_KEY>
  ```
5. Start the application
  ```sh
  npm start
  ```

<!-- Deploy -->
## Deploy (using Docker)

### Prerequisites

Make sure to have the following installed:

* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Environment Variables

* `WEATHER_API_KEY` - Private API-key retrieved from [Open Weather Map](https://openweathermap.org/)

### Build, run, and deploy containers

1. Sign up and get a free API Key at [Open Weather Map](https://openweathermap.org/)
2. Clone the repo
  ```sh
  git clone https://github.com/Lennca/SimpleWeatherApp.git
  ```
3. Replace `<API-KEY>` under `services -> backend -> environment` in the `docker-compose.yml`-file
4. Build images and start containers
  ```sh
  docker-compose up -d
  ```
5. Verify that the containers are up
  ```sh
  docker ps
  ```
6. Application is now up and running at [localhost](http://localhost:3000) on port 3000

## Usage

The application can display the degrees in Celsius (metric) and Fahrenheit (imperial).

The application display the data:
* Degrees
* Location
* Feel like temperature
* Description of weather
* Location (latitude and longitude)
* Wind-speed
* Wind-direction

### Screenshots

![Screenshot of demo app in desktop-view](./desktop_demo.png)
![Screenshot of demo app in mobile-view](./mobile_demo.png)

## License
Distributed under the MIT License. See `LICENSE` for more information.
