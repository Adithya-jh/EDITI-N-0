const prismSale = artifacts.require("prismSale");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("prismSale", function (accounts) {
  it("should assert true", async function () {
    await prismSale.deployed();
    return assert.isTrue(true);
  });

  it("should get the right accounts", async function(){
    const contract = await prismSale.deployed()

    const owner = await contract.owner.call()
    const charity = await contract.charity.call()
    assert.isTrue(owner == 0xBE76F70775E9B8b9ce798BEe10B094B31a6498a6)  
    assert.isTrue(charity == 0xce41cbD16FD67Dc0d190c50e2644fa5114a71886)   
  })

// test for owner 80%

  // it("should split the payment for owner",async function (){
  //   const contract = await prismSale.deployed()
  //   const startBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[2]))
    
  //   const purchase = await contract.buy.sendTransaction({
  //     from: accounts[0],
  //     value: web3.utils.toWei("0.01","ether")
  //   })

  //   const commission = web3.utils.toBN(await web3.utils.toWei("0.008","ether"))

  //   const endBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[2]))

  //   assert.equal(startBalance.add(commission).toString(),endBalance.toString())

  //   // console.log(startBalance);
    
  //   // console.log(endBalance);

  // })

  // test to charity account 20%

  // it("should split the payment the charity",async function (){
  //   const contract = await prismSale.deployed()
  //   const startBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[3]))
    
  //   const purchase = await contract.buy.sendTransaction({
  //     from: accounts[5],
  //     value: web3.utils.toWei("0.01","ether")
  //   })

  //   const commission = web3.utils.toBN(await web3.utils.toWei("0.002","ether"))

  //   const endBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[3]))

  //   assert.equal(startBalance.add(commission).toString(),endBalance.toString())

  //   // console.log(startBalance);
    
  //   // console.log(endBalance);

  // })
});
