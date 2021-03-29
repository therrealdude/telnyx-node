# telnyx-node
Before You Start
* Install and setup ngronk: https://developers.telnyx.com/docs/v2/development/ngrok
    * when running the command in the command prompt, use the 80 
* Setup Telnyx Profile
    * https://developers.telnyx.com/docs/v2/account
* Setup Telnyx Portal
    * https://developers.telnyx.com/docs/v2/messaging/quickstarts/portal-setup

To Download
* Run Git Bash
* run: git clone https://github.com/therrealdude/telnyx-node.git

To Get Running
* Open the solution in Visual Studio Code
* run npm install in terminal
* Create file .env and copy the following values into the file
    * replace the API key and number with the values from Telnyx
    TELNYX_API_KEY={Api key from Telnyx}
    TELNYX_NUMBER={Number used in telnyx}
* run npm run start in terminal