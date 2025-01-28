
const dotenv = require('dotenv');
//using enviornment variables to maintain their secrecy Ex:for api key we cant just show it to all
dotenv.config();
module.exports = {
    PORT:process.env.PORT
}