![image](https://user-images.githubusercontent.com/74618481/172228415-5c599bb5-e7de-4c2f-b79e-372989c6ee3b.png)

# React Redux Example
Project taken from site [reactjsexample](https://reactjsexample.com/).
You can find the original example here: [Simple netflix clone using React and TMDB API to pull in movies/tv shows](https://reactjsexample.com/simple-netflix-clone-using-react-and-tmdb-api-to-pull-in-movies-tv-shows/)

Credits to: [Anthony Peruso](https://github.com/perusoa)
- [Demo](https://reactflix.anthonyperuso.me/)
- [Github Repository](https://github.com/perusoa/react-netflix-clone?ref=reactjsexample.com)

**Important**: 
> In orther to accomplish react redux bootcamp, this project was forked, updated its dependencies, refactored and migrated to TypeScript

## Pre-requisites
In order to run the project, you have to make sure to have installed following versions
1. Node version 16.14.0 (suggested version in .nvmrc)
1. Yarn version 1.22.18 (suggested version in .yarnrc)


If node version conflicts with the one you use for your daily work, I strongly suggest you to have installed `nvm`, and follow the next steps to use same version:

```
nvm install 16.14.0
nvm use 16.14.0
npm install --global yarn
```

### The Movie DB
This project uses the API to fetch movies and TV series from [TheMovieDB](https://www.themoviedb.org/). 
1. Enter to [TheMovieDB](https://www.themoviedb.org/).
![image](https://user-images.githubusercontent.com/74618481/174418353-b6ceb6f7-ff2a-48cc-ad3e-83d30a6e9438.png)
1. Click join TMDB
![image](https://user-images.githubusercontent.com/74618481/174418406-aca9fcc6-0bb2-4627-b6a7-4c614b20b271.png)
1. Provide your data in order to sign up for an account (don't worry is free)
1. Once having logged in, go to settings/API and copy **API Read Access Token (v4 auth)**, we will use it later
![image](https://user-images.githubusercontent.com/74618481/174418726-f700d7d0-7250-4370-8f79-14ab06b39713.png)


## Setup
1. Clone the repository
1. Open cloned repository with your favorite IDE and terminal
1. Run `yarn install`
1. Run `yarn start`
1. Replace `API_KEY` value in file `src/utils/key.ts` having as string your **API Read Access Token (v4 auth)** token.
