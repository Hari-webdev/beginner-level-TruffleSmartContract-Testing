const { default: Web3 } = require("web3");

const Wallet =artifacts.require("Wallet");


contract("Wallet",(accounts)=>{
    let Deployed = null;
    before(async()=>{ Deployed = await  Wallet.deployed()});

    it('Should set accounts[0] as owner', async()=>{

        const owner = await Deployed.owner();

        assert(owner == accounts[0] )


    })

    it('Should deposit ether to wallet', async() =>{
        await Deployed.deposit({from:accounts[0], value: 100 }); // this is structure of deposit 
        const balance = await web3.eth.getBalance(Deployed.address) // For finding balance ether help of web3.js
        //console.log( balance);
        assert(parseInt(balance) === 100);
    })

    it('Should return balance of wallet', async()=>{
        const balance = await Deployed.balanceOf();
        assert(parseInt(balance) === 100);
    })


    it('Should transfer ether to another address', async()=>{
        const recevier_beforeBalance = await Web3.getBalance(accounts[1]);
        console.log("Before Balance :",recevier_beforeBalance);

        await Deployed.send(accounts[1],10, {from : accounts[0]});
        const receiver_afterBalance = await Web3.eth.getBalance(accounts[1]);
        console.log("After Balance :", receiver_afterBalance);
        const finalBalance = Web3.utils.toBN(receiver_afterBalance);
        const initialBalance= web3.utils.toBN(recevier_beforeBalance);
        assert(finalBalance.sub(initialBalance).toNumber()===10);


    })


})
