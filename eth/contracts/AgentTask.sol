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
    
    /// The token address
    address public tokenAddress;
    
    ERC20 public ERC20Interface;
    
    mapping(address => uint256) public agents;

    event Transfer(address indexed from, address indexed to, uint256 amount);
    event Credit(address indexed recvr, uint256 amount);

    /// Constructor
    /// @param _owner the owner of this task
    /// @param _taskId the task id
    /// @param _tknAddr the token address to be claimed from for this task
    constructor(address _owner, bytes32 _taskId, address _tknAddr) public {
        require(_tknAddr != address(0), "Token address cannot be an empty address");
        
        ERC20Interface = ERC20(_tknAddr);
        
        owner = _owner;
        taskId = _taskId;
        tokenAddress = _tknAddr;
    }

    /// Credits an amount of tokens to an address
    ///  can only be called by the contract creator
    /// @param _recvr the recipient address
    /// @param _amnt the amount of token to be allowcated to _recvr
    function allowcateCredits(address _recvr, uint256 _amnt) public onlyOwner {
        require(_amnt <= ERC20Interface.balanceOf(address(this)), "Insufficient balances for this project.");
        require(ERC20Interface.approve(_recvr, _amnt));
        
        agents[_recvr] = _amnt;
        
        emit Credit(_recvr, _amnt);
    }

    /// Transfers an amount of existing tokens
    ///  from any caller to another address
    /// @param _recvr the recipient address
    /// @param _amnt the amount of token to be transferred to _recvr
    function transfer(address _recvr, uint256 _amnt) public {
        require(_amnt <= agents[msg.sender], "Insufficient balance.");
        agents[msg.sender] -= _amnt;
        agents[_recvr] += _amnt;
        emit Transfer(msg.sender, _recvr, _amnt);
    }

    /// Returns the available credits of mine
    function getMyAvailableCredits() public view returns (uint256) {
        return agents[msg.sender];
    }
    
    /// Returns the available balance of this task
    function getTaskAvailableBalance() public view returns (uint256) {
        return ERC20Interface.balanceOf(address(this));
    }

    /// Destroy the contract.
    function kill() public onlyOwner {
        require(ERC20Interface.transferFrom(address(this), msg.sender, getTaskAvailableBalance()));
        selfdestruct(msg.sender);
    }

}
