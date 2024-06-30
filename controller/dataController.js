const Data = require("../model/temp-humSchema");
const dataController = {
  postData: async (req, res) => {
    const { temperature, humidity } = req.body;
    const newData = new Data({ temperature, humidity });
    try {
      await newData.save();
      res.status(201).send("Data stored successfully");
    } catch (error) {
      res.status(500).send("Error storing data: " + error.message);
    }
  },
  getData:async (req,res)=>{
    try {
        const data = await Data.find();
        res.json(data);
      } catch (error) {
        res.status(500).send('Error retrieving data: ' + error.message);
      }
  }
};
module.exports = dataController;