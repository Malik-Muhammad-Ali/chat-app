const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res)=>{
    const { username } = req.body;
    
    try {
        const response = await axios.put(
            'https://api.chatengine.io/users/', 
            {
                username: username,
                secret: username,
                first_name: username
            },
            {
                headers: {
                    "private-key": "6a566f12-d37f-4a10-bb67-954a116f732d"
                }
            }
        )

        return res.status(response.status).json(response.data)
    } catch (error) {
        return res.status(500);
    }

    return res.json({ username: username, secret: "sha256.." });
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})