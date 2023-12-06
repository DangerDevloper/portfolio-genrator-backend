const { Router } = require("express");
const { ProductModel } = require("../models/product.model");
const { UserModel } = require("../models/user.model");
const product_router = Router();
// get product .....

product_router.get("/", async (req, res) => {
  const result = await ProductModel.find();
  res.status(201).json(result);
});

//create product ...
console.log("Hello");
product_router.post("/create", async (req, res) => {
  const {
    name,
    username,
    description,
    email,
    MobNo,
    resume,
    github,
    twitter,
    linkedin,
    hashnode,
    dribble,
    median,
    Html,
    Css,
    Js,
    Express,
    React,
    Nextjs,
    Typescript,
    MongoDB,
    Bootstrap,
    Python,
    Cp,
    C,
    Java,
    PHp,
    Swift,
    Go,
    Kotlin,
    Ruby,
    Dart,
    Lua,
    Perl,
    Mysql,
    Sqlite,
    Redis,
    influxDB,
    ArangoDB,
    Prisma,
    Realm,
    CockrochLabs,
    AmazonDynamo,
    Superbase,
    ElasticSearch,
    CouchBase,
    Cassandra,
    PosgreSQL,
    MicrosoftSQL,
    MariaDB,
    RabbitMQ,
    Puppeteer,
    Erlang,
    Numba,
    Rust,
    Pug,
    Json,
    Leaflet,
    Haskell,
    PyToarch,
    PyToarchLighting,
    StreamLit,
    Latex,
    Plotly,
    Pandas,
    Numpy,
    Scipy,
    Solidity,
    Crystel,
    CoffeeScript,
    Keras,
    Scikit,
    Tensorflow,
    Delphi,
    Groovi,
    Clojure,
    Tailwind,
    MaterialUI,
    Nodejs,
    Npm,
    Yarn,
    Jest,
    Socket,
    Saas,
    Net,
    MarkDown,
    Svelte,
    Vuejs,
    Angular,
    AngularJs,
    Styles,
    ChackraUI,
    Redux,
    JQuery,
    Drupal,
    Laraval,
    SpringBoot,
    Spring,
    Flask,
    GraphQL,
    Docker,
    Firebase,
    Git,
    Threejs,
    Mocha,
    Webpack,
    JWT,
    Babel,
    Chai,
    Nestjs,
    AmazonAWS,
    Heroku,
    Netlify,
    Vercel,
    Shopify,
    Nuxtjs,
    SAP,
    RubyonRails,
    Django,
    FastAPI,
    Electron,
    Vite,
    GatsBy,
    Jupyter,
    Scala,
    Stylus,
    MicrosoftExcel,
    Tableau,
    PowerBi,
    Looker,
    NoSQL,
    Hadoop,
    Pyspark,
    R,
    Julia,
    Hive,
  } = req.body;
  console.log(name);
  // const creator_id = req.user_id;

  // const user = await UserModel.findOne({ _id: creator_id });
  const new_product = new ProductModel({
    name,
    username,
    email,
    MobNo,
    github,
    twitter,
    linkedin,
    hashnode,
    dribble,
    description,
    median,
    Html,
    Css,
    resume,
    Js,
    Express,
    React,
    Nextjs,
    Typescript,
    MongoDB,
    Bootstrap,
    Python,
    Cp,
    C,
    Java,
    PHp,
    Swift,
    Go,
    Kotlin,
    Ruby,
    Dart,
    Lua,
    Perl,
    Mysql,
    Sqlite,
    Redis,
    influxDB,
    ArangoDB,
    Prisma,
    Realm,
    CockrochLabs,
    AmazonDynamo,
    Superbase,
    ElasticSearch,
    CouchBase,
    Cassandra,
    PosgreSQL,
    MicrosoftSQL,
    MariaDB,
    RabbitMQ,
    Puppeteer,
    Erlang,
    Numba,
    Rust,
    Pug,
    Json,
    Leaflet,
    Haskell,
    PyToarch,
    PyToarchLighting,
    StreamLit,
    Latex,
    Plotly,
    Pandas,
    Numpy,
    Scipy,
    Solidity,
    Crystel,
    CoffeeScript,
    Keras,
    Scikit,
    Tensorflow,
    Delphi,
    Groovi,
    Clojure,
    Tailwind,
    MaterialUI,
    Nodejs,
    Npm,
    Yarn,
    Jest,
    Socket,
    Saas,
    Net,
    MarkDown,
    Svelte,
    Vuejs,
    Angular,
    AngularJs,
    Styles,
    ChackraUI,
    Redux,
    JQuery,
    Drupal,
    Laraval,
    SpringBoot,
    Spring,
    Flask,
    GraphQL,
    Docker,
    Firebase,
    Git,
    Threejs,
    Mocha,
    Webpack,
    JWT,
    Babel,
    Chai,
    Nextjs,
    AmazonAWS,
    Heroku,
    Netlify,
    Vercel,
    Shopify,
    Nuxtjs,
    SAP,
    RubyonRails,
    Django,
    FastAPI,
    Electron,
    Vite,
    GatsBy,
    Jupyter,
    Scala,
    Stylus,
    MicrosoftExcel,
    Tableau,
    PowerBi,
    Looker,
    NoSQL,
    Hadoop,
    Pyspark,
    R,
    Julia,
    Hive,
  });

    const isuser = await ProductModel.findOne({ username });
    console.log(isuser);
    if (isuser) {
      res.send("userName already exist");
    } else {
        await new_product.save();
        res.send("product created successfully.......");
      
  }
  
  router.get("/:username", async (req, res) => {
    try {
      const username = req.params.username; // Get the username from the URL parameter
      console.log(username)
      const user = await ProductModel.findOne({ username }); // Use findOne to retrieve user by username
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user); // Send the retrieved user as JSON response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });


  
});

// update product...
product_router.put("/edit/:productID", async (req, res) => {
  const product_id = req.params.productId;
  const payload = req.body;
  console.log(payload);
  const user_id = req.user_id;
  const isuser = await UserModel.findOne({ _id: user_id });
  const email = isuser.email;
  const product = await ProductModel.findOne({ _id: product_id });

  const product_creator = isuser.email;
  if (product_creator !== email) {
    res.send("you are not authorsised to update this product");
  } else {
    await ProductModel.findOneAndUpdate({ _id: product_id }, payload);
    res.send("product updated sucsessfully........");
  }
});

product_router.delete("/delete/:productId", async (req, res) => {
  const product_id = req.params.productId;

  const user_id = req.user_id;
  const isuser = await UserModel.findOne({ _id: user_id });
  const email = isuser.email;
  const product = await ProductModel.findOne({ _id: product_id });

  const product_creator = isuser.email;
  if (product_creator !== email) {
    res.send("you are not authorsised to delete this product");
  } else {
    await ProductModel.findOneAndDelete(product_id);
    res.send("Product deleted sucsessfully........");
  }
});

module.exports = { product_router };
