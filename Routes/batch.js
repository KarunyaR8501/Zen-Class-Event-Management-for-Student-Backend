const express = require("express") ;
const { assignCapstone, batchCreate, getCapstone, giveBatch, studentBatches, studentDetails } = require("../Controllers/batch.js") ;
const {authenticates} = require( '../Controllers/authenticate.js')
const router = express.Router();

router.post("/batchCreate", authenticates,batchCreate);
router.get("/giveBatches",authenticates, giveBatch);
router.post("/studentBatches",authenticates, studentBatches)
router.post("/assignCapstone/:userId",authenticates, assignCapstone)
router.get("/studentDetails/:userId",authenticates, studentDetails)
router.get("/getCapstone", getCapstone)

module.exports= router;