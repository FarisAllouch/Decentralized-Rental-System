// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;
 
contract SimpleElection {
    struct Candidate {
        uint id;
        string name;
        uint votes;
    }
 
    address public owner;

    mapping(address => bool)public landlords;

    address[] public pendingRequests;

    event AccessRequested(address indexed user);
    event AccessGranted(address indexed user);
    event AccessRevoked(address indexed user);
 
    constructor() {
        owner = msg.sender;
    }

      function requestAccess() public {
        require(!landlords[msg.sender], "Already a landlord.");
        require(!_isPending(msg.sender), "Access request already pending.");
        
        pendingRequests.push(msg.sender);
        emit AccessRequested(msg.sender);
    }

    function grantAccess(address _user) public {
    require(msg.sender == owner, "Only the owner can grant access.");
    landlords[_user] = true;
    emit AccessGranted(_user);
    }

    function revokeAccess(address user) external {
    require(landlords[user], "User does not have access");
    landlords[user] = false;
    emit AccessRevoked(user);
    }

    function isLandlord(address _user) public view returns (bool) {
    return landlords[_user];
    }

    function _isPending(address _user) private view returns (bool) {
        for (uint i = 0; i < pendingRequests.length; i++) {
            if (pendingRequests[i] == _user) {
                return true;
            }
        }
        return false;
    }

    function getPendingRequests() public view returns (address[] memory) {
        return pendingRequests;
    }

    function addressowner() public view returns (address) {
        return owner;
    }
}