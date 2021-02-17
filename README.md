# Squad Management Tool

This is the code for the Squad Management Tool, a tool that guides users toward creating and configuring soccer teams. It also shows statistics about the current teams.

<br />

## Features and specifications

### Phase 1

1. Implement Page Layout.
2. Implement "My teams" section.
3. Ability to Create/Edit and Remove a team.
4. Ability to see what player was the most/less picked on.

<br />

### Phase 2

1. Ability to search for a player name and see the list of players who matched the criteria.
2. Ability to add a player to a field position through drag n drop.
3. Save must store the team's players into application state.

<br />

### Phase 3

1. Implement "Top 5" section to the dashboard.
2. Ability to configure and display a given formation from the list (Soccer field must display the positions accordingly).
3. Ability to see player information on hover (on soccer field)

<br />

## Getting Started

To develop the application you will need npm or yarn installed in your computer.

1. Clone the repository
   ```sh
   git clone https://github.com/felipemmendes/squad-management-tool.git
   ```
2. Install NPM packages

   ```sh
   npm install
   ```

   or

   ```sh
   yarn
   ```

3. Rename `.env.example` to `.env` and edit the variables with your own environment configuration (API url).

4. Start the development API for fetching data.

   This project uses `json-server` and already have an `.json` with data for fetching in during development.
   To start the API, run:

   ```sh
   npx json-server db.json -p PORT
   ```

   Change `PORT` with port number, e.g., 3333. This will start the server on http://localhost:3333.

5. Start the React server in development mode:

   ```sh
   npm run start
   ```

   or

   ```sh
   yarn start
   ```

6. Access the application on http://localhost:3000.

<br />

## Testing

To test the application run:

```sh
 npm run test
```

or

```sh
  yarn test
```

<br />

## Deployment

Before deployment, make sure the fetching data params on [src/store/players/slice.js](src/store/players/slice.js`) match those of the API you will be using in production.

After this, you can deploy the application on any host service that supports a Node.js server. I suggest [Vercel](https://vercel.com/guides/deploying-react-with-vercel-cra) or [Netlify](https://docs.netlify.com/site-deploys/overview/)as they have free tiers for Personal use and are super easy to deploy and maintain. You can also use a VM, like the [Droplets from Digital Ocean](https://www.digitalocean.com/products/droplets/).

When deploying, make sure to set the environment variables for your production server (instructions for [Vercel](https://vercel.com/docs/environment-variables) or [Netlify](https://docs.netlify.com/configure-builds/environment-variables/#declare-variables)).
You will need to configure the redirects of your pages (instructions for [Vercel](https://vercel.com/docs/configuration?query=redirect#introduction/configuration-reference) or [Netlify](https://docs.netlify.com/routing/redirects/)).
