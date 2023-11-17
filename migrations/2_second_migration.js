const contract = artifacts.require("second");

module.exports = (deployer)=>{
    deployer.deploy(contract);
}