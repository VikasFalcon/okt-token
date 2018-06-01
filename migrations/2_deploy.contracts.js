const IcoToken = artifacts.require('IcoToken');
const IcoContract = artifacts.require('IcoContract');

module.exports = function(deployer){
	deployer.deploy(
			IcoToken,
			'OLA Token',
			'OLAT',
			'18',
			'1.0'
		).then(() => {
			return deployer.deploy(
					IcoContract,
					'0xab0874cB61D83F6B67Dc08141568868102233bef', //Vikas Address-Rinkby(Account1)
					IcoToken.address,
					'100000000000000000000000000', // 100000000 Token
				    '1000', // 1 ETH = 1000 Token
				    '1514764800', // 01/01/2018
				    '1546214400', // 31/12/2018
				    '100000000000000000' // 0.1 ETH
				).then(() => {
					return IcoToken.deployed().then(function(instance){
						return instance.setIcoContract(IcoContract.address);	
					});
				});
		});
};