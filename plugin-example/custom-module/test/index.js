const { Client, Authenticator } = require('../../../index');
const CustomModule = require('../index');
const path = require('path');
const launcher = new Client();

launcher.use(CustomModule)

let opts = {
    clientPackage: null,
    // For production launchers, I recommend not passing 
    // the getAuth function through the authorization field and instead
    // handling authentication outside before you initialize
    // MCLC so you can handle auth based errors and validation!
    authorization: Authenticator.getAuth("test"),
    root: path.resolve("./minecraft"),
    version: {
        number: "1.12.2",
        type: "release"
    },
    memory: {
        max: "2048",
        min: "512"
    },
    customModule: {
        // Args for the module "Custom Module"
    }
}

launcher.launch(opts);

launcher.on('debug', (e) => console.log(e));
launcher.on('data', (e) => console.log(e));