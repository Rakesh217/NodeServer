module.exports = {
  MongodbURI:
    "mongodb+srv://star_boy:star_boy@cluster0.ewrgw.mongodb.net/StarWars?retryWrites=true&w=majority",
};

//command used to import json file data to a collection
// use --drop at end if you want to drop a collection before importing
//mongoimport --uri "mongodb+srv://star_boy:star_boy@cluster0.ewrgw.mongodb.net/StarWars?retryWrites=true&w=majority" --collection characters --file /Data/data.json --jsonArray
