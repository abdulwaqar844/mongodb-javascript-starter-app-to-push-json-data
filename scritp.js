
const Linguist = require('./model');

const mongoose = require("mongoose");
const UpdatedJson = require('./NEWlinguistRevisedJSON.json')

const dbConnection = (URI) => {
    try {
        mongoose.connect('MONGODB STring', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const dbConnection = mongoose.connection;
        dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
        dbConnection.once("open", () =>
            console.log("Successfully connected to your DB!")
        );

    } catch (error) {
        setTimeout(dbConnection, 4000);
    }
};
dbConnection()

UpdatedJson.map(async (linguist) => {

    const id = linguist._id.$oid;
    const { _id, ...data } = linguist;
    console.log("Data", data)
    console.log("linguist", linguist)
    console.log("_id", _id)
    const newData = await Linguist.findByIdAndUpdate({ _id: id }, { ...data }, { new: true });
    console.log("Returned Data", newData)


})
