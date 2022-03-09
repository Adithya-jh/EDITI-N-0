// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract prismSale {
  uint public totalSales;
  uint public maxSales;
  
  address public owner;
  address public charity;

  mapping(address=> bool) sales;



  constructor(){
    totalSales = 0;
    maxSales = 100;

    owner = 0xBE76F70775E9B8b9ce798BEe10B094B31a6498a6; //3rd one
    charity = 0xce41cbD16FD67Dc0d190c50e2644fa5114a71886;//4th one

  }

  function hasAccess() public view returns (bool){ //checks whether the user already bought or not.
      return sales[msg.sender];
  }

  function canBuy() public view returns(bool){
    return totalSales<maxSales;
  }



  function buy() public payable returns(bool){

    require(canBuy(),"cant buy -out of stock");
    require(msg.value == 0.01 ether, "incorrect payment");
    require(hasAccess() == false,"already bought"); //we are only going to sell to the person who hasnt bought it earlier.
    

    payable(owner).transfer(msg.value * 80/100); 
    payable(charity).transfer(msg.value* 20/100); // going to pay/send 20 % to charity.

    totalSales = totalSales+1;

    sales[msg.sender] = true; // it is to keep track of the user whether he bought or not.
    return true;
  }
}
