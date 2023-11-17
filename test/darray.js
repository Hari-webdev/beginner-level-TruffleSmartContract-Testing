const Darray = artifacts.require('Darray');

// mocha  give ( before(), after(), beforeeach(), aftereach())



contract("A Contract", ()=>{

    // before(()=>{console.log('This is happens Before');})
    // after(()=>{console.log('This is happen After')});
    // beforeEach(()=>{console.log('This is happen Beforeeach');})
    // afterEach(()=>{console.log('this is happen AfterEach');})

    let darray = null;

    before(async()=>{darray = await Darray.deployed()})

it("Should insert an element into an array arr",async()=>{

    // const darrayDeploy = await Darray.deployed();
    await darray.insert(1);
    const result = await darray.arr(0);

    assert(result.toNumber() == 1);


});


it('Should gey a element from arr array', async()=>{
    // let darray = await Darray.deployed();
    await darray.insert(25);

    let result = await darray.arr(1);

    assert(result.toNumber() == 25)


})

it('should return this length of array', async()=>{

    // let darray = await Darray.deployed();
    let length = await darray.length();

    assert(length.toNumber() == 2);

})

it('this return all array',async()=>{
    const arr = await darray.getAll();
    //console.log(arr);

    const elements = arr.map((element)=>element.toNumber())
    console.log(elements);

    assert.deepEqual(elements,[1,25])  
})

});