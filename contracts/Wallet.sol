// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Wallet {
    address payable public owner;

    constructor(address payable _owner) {
        owner = _owner;
    }

    function deposit() public payable {}

    function balanceOf() public view returns (uint256) {
        return address(this).balance;
    }

    function send(address payable to, uint256 amount) public {
        if (msg.sender == owner) {
            to.transfer(amount);
            return;
        }

        revert("Sender is not allowed");
    }
}
