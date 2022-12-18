const noblox = require('noblox.js')
const express = require('express')
const app = express()

//configs
const cookie = "add your cookie here"
const port = 8808

console.log(`made by Dhirk07`)
console.log(`github: https://github.com/Dhirk07`)
async function buyasset(assetid) {
  try {
    const UserCurrent = await noblox.setCookie(cookie) 
    console.log(`Logged in as ${UserCurrent.UserName} ID: [${UserCurrent.UserID}]`)
    await noblox.buy(assetid)
    console.log(`success buying: ${assetid}`)
  }catch (err) {
     console.log(`failed buying: ${assetid}`)
     console.log(`error: ${err}`)
    }
}

app.get("/api/buy/:assetid", async (req, res) => {
     if (!req.params?.assetid) return res.json({error: "no assetid input"})
     if(req.params.assetid){
     try {
     await buyasset(req.params.assetid)
     res.json({success: true, message: `success buying a asset using the id: ${req.params.assetid}`, github: "https://github.com/Dhirk07"})
     }else{
     res.json({success: false, message: `failed buying a asset using the id: ${req.params.assetid}`, github: "https://github.com/Dhirk07"})
     }
     }
})

//start the api
app.listen(port, function(){
    console.log(`Listening on port ${port}`);
})
