const express = require('express');
const router = express.Router();

router.get("/columns" , async (req, res) => {
    try {
        res.json([
            { name: 'Name', uid: 'name' },
            { name: 'Type', uid: 'type' },
            { name: 'Date Modified', uid: 'date' },
          ]);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
});


router.get("/rows" , async (req, res) => {
    try {
        res.json([
            { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },
            {
              id: 2,
              name: 'Program Files',
              date: '4/7/2021',
              type: 'File folder',
            },
            { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },
            {
              id: 4,
              name: 'log.txt',
              date: '1/18/2016',
              type: 'Text Document',
            },
          ]);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
});
module.exports = router;