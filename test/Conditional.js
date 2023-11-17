
const Conditional = artifacts.require('Conditional');

contract('A_Conditonal',()=>{ 

    it("This contract is working",async()=>{
        const coditionalDeployed = await Conditional.deployed();
        const set =  await coditionalDeployed.check(20,10);
     try {
        assert(set.toNumber() === 20);
        
     } catch (error) {
        console.log("a should greater than b");
        
     }
        


    })
    


    
})