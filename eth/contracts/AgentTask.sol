pragma solidity >=0.4.21 <0.7.0;

import "./Owned.sol";

contract AgentTask is Owned {
    bytes32 public taskId;
    address public tokenAddress;
    
    mapping(address => uint) public agents;

    event Transfer(address indexed from, address indexed to, uint amount);
    event Claim(address indexed addr, uint amount);
    event Credit(address indexed recvr, uint amount);

    constructor(address _owner, bytes32 _taskId, address _tknAddr) public {
        owner = _owner;
        taskId = _taskId;
        tokenAddress = _tknAddr;
    }

    // Credits an amount of tokens to an address
    //  can only be called by the contract creator
    function assignCredit(address _recvr, uint _amount) public onlyOwner {
        agents[_recvr] += _amount;
        emit Credit(_recvr, _amount);
    }

    // Transfers an amount of existing tokens
    //  from any caller to an address
    function transfer(address _recvr, uint _amount) public {
        require(_amount <= agents[msg.sender], "Insufficient balance.");
        agents[msg.sender] -= _amount;
        agents[_recvr] += _amount;
        emit Transfer(msg.sender, _recvr, _amount);
    }

    function claimCredits(uint256 _amount) public {
        uint amount = agents[msg.sender];
        require(amount > 0 && _amount <= amount);
        agents[msg.sender] = 0;
        require(msg.sender.send(_amount));
        emit Claim(msg.sender, _amount);
    }

    /// destroy the contract and reclaim the leftover funds.
    function kill() public {
        require(msg.sender == owner);
        selfdestruct(msg.sender);
    }

}
