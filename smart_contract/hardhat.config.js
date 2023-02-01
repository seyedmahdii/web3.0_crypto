// a plugin to build smart contract tests
require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.0",
    networks: {
        ropsten: {
            url: "ALCHEMY HTTPS KEY",
            accounts: ["METAMASK EXTERNAL KEY"],
        },
    },
};
