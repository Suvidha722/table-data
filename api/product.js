const express = require("express");
const router = express.Router();

router.get("/columns", async (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    res.json([
          { name: 'Name', uid: 'name' },
          { name: 'Role', uid: 'role' },
          { name: 'Level', uid: 'level' },
        ]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

router.get("/rows", async (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    res.json([
          { id: 1, name: 'Michael', role: 'Manager', level: 'P50' },
          { id: 2, name: 'Dwight', role: 'Technical Consultant', level: 'P30' },
          { id: 3, name: 'Jim', role: 'Principal Consultant', level: 'P20' },
        ]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});
module.exports = router;

router.get("/brbApi", async (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    res.json([
      {
            dbId: "0",
            name: "John",
            projects: [
                {
                    pid: "p_id_2",
                    name: "Project Name 2",
                    d3_8_2022: {
                        recordId: "rec_1",
                        entry: "3"
                    },
                    d4_8_2022: {
                        recordId: "rec_2",
                        entry: "10"
                    }
                },
                {
                    pid: "p_id_2",
                    name: "Project Name 4",
                    d5_8_2022: {
                        recordId: "rec_3",
                        entry: "12"
                    },
                    d4_8_2022: {
                        recordId: "rec_4",
                        entry: "8"
                    }
                },
              {
                    pid: "p_id_3",
                    name: "Project Name 1",
                    d3_8_2022: {
                        recordId: "rec_1",
                        entry: "15"
                    },
                    d7_8_2022: {
                        recordId: "rec_2",
                        entry: "8"
                    }
                },
              {
                    pid: "p_id_4",
                    name: "Project Name 3",
                    d5_8_2022: {
                        recordId: "rec_1",
                        entry: "11"
                    },
                    d4_8_2022: {
                        recordId: "rec_2",
                        entry: "11"
                    }
                }
            ],
        },
     ]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});
module.exports = router;
