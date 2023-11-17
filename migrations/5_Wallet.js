
const wallet = artifacts.require('Wallet');

module.exports = (deployer,_network,accounts)=>{
    deployer.deploy(wallet,accounts[0],);
}