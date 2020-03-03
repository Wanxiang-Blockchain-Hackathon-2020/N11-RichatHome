pragma solidity >=0.5.0 <0.7.0;

import "./Owned.sol";


interface ERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address who) external view returns (uint256);
    function transfer(address to, uint256 value) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
    function approve(address spender, uint256 value) external returns (bool);

    event Approval(address indexed owner, address indexed spender, uint256 value);  
    event Transfer(address indexed from, address indexed to, uint256 value);
}


contract AgentTask is Owned {
    bytes32 public taskId;
    
    // The token address
    address public tokenAddress;
    // Token amount for this task
    uint256 public totalAmount;
    
    ERC20 public ERC20Interface;
    
    mapping(address => uint256) public agents;

    event Transfer(address indexed from, address indexed to, uint256 amount);
    event Claim(address indexed addr, uint256 amount);
    event Allowcate(address indexed recvr, uint256 amount);

    constructor(address _owner, bytes32 _taskId, address _tknAddr, uint256 _tknAmnt) public {
        require(_tknAddr != address(0), "Token address cannot be an empty address");
        
        ERC20Interface = ERC20(_tknAddr);
        require(ERC20Interface.approve(address(this), totalAmount));
        
        owner = _owner;
        taskId = _taskId;
        tokenAddress = _tknAddr;
        totalAmount = _tknAmnt;
    }

    // Credits an amount of tokens to an address
    //  can only be called by the contract creator
    function allowcateCredits(address _recvr, uint256 _amnt) public onlyOwner {
        agents[_recvr] = _amnt;
        
        require(ERC20Interface.approve(_recvr, _amnt));

        emit Allowcate(_recvr, _amnt);
    }
    
    // Re-allocates the total amount of credits for this task
    function reallowcateTotalAmountOfCredit(uint256 _amnt) public onlyOwner {
        totalAmount = _amnt;
    }

    // Transfers an amount of existing tokens
    //  from any caller to another address
    function transfer(address _recvr, uint256 _amnt) public {
        require(_amnt <= agents[msg.sender], "Insufficient balance.");
        agents[msg.sender] -= _amnt;
        agents[_recvr] += _amnt;
        emit Transfer(msg.sender, _recvr, _amnt);
    }

    // Claims an amount of leftover credits
    function claimCredits(uint256 _amnt) public {
        uint256 amnt = agents[msg.sender];
        require(amnt > 0 && _amnt <= amnt);
        
        // transfer tokens to message sender
        require(ERC20Interface.transferFrom(address(this), msg.sender, _amnt));

        agents[msg.sender] -= _amnt;
        emit Claim(msg.sender, _amnt);
    }

    // Returns the available credits of mine
    function getMyAvailableCredits() public view returns (uint256) {
        return agents[msg.sender];
    }
    
    // Returns the available balance of this task
    function getTaskAvailableBalance() public view returns (uint256) {
        return ERC20Interface.balanceOf(address(this));
    }

    /// Destroy the contract.
    function kill() public onlyOwner {
        require(ERC20Interface.transferFrom(address(this), msg.sender, getTaskAvailableBalance()));
        selfdestruct(msg.sender);
    }

}
