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
		      var mnemonic = 'steel neither fatigue dismiss repair verb grit expire feature slim mouse flight';	
		      return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/8wTMv9HfDF5dwfIKqziz");
		    },
		    network_id: '4',
		}  
    }
};