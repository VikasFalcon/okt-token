var HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = 
{
    networks: 
    {
	    development: 
		{
	   		host: "localhost",
	   		port: 8545,
	   		network_id: "*" // Match any network id
		},
    	rinkeby: {
		    provider: function() {
		      var mnemonic = 'steel neither fatigue dismiss .............';	
		      return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/8wTMv9HfDF.........");
		    },
		    network_id: '4',
		}  
    }
};