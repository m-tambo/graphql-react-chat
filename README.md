# A chat app built with React, Apollo, and Graphcool

Thanks to [Nikolas Burk](https://github.com/nikolasburk) for the tutorial.


## Get your GraphQL endpoint

### 1. Install Graphcool CLI

You first have to install the [Graphcool CLI](https://www.graph.cool/docs/reference/cli/overview-kie1quohli/):

```sh
npm install -g graphcool
```

### 2. Deploy the GraphQL server

Navigate into the `server` directory and deploy the server:

```sh
cd server
graphcool deploy
```

When prompted, choose any of the **Shared Clusters**, e.g. `eu-west-1`.

### 3. Run the app 🚀

That's it, you can now start the app:

```sh
yarn install
yarn start
```

Go to **http://localhost:3000** in your browser to start chatting 💬

