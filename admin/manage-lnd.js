const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "AccessGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "AccessRequested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "AccessRevoked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_landlordName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_apartmentType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_totalArea",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_rentPerMonth",
				"type": "uint256"
			}
		],
		"name": "addProperty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "grantAccess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "tenant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "propertyId",
				"type": "uint256"
			}
		],
		"name": "InterestShown",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "requestAccess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "revokeAccess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			}
		],
		"name": "submitFeedback",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "addressowner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "feedbacks",
		"outputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getFeedbacks",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "message",
						"type": "string"
					}
				],
				"internalType": "struct SimpleElection.Feedback[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPendingRequests",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProperties",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "landlordName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "apartmentType",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "totalArea",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "rentPerMonth",
						"type": "uint256"
					}
				],
				"internalType": "struct SimpleElection.Property[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "isLandlord",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "landlords",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pendingRequests",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "properties",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "landlordName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "apartmentType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalArea",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "rentPerMonth",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
    const address = "0xf5502f23c9420652ff714ec7f9344b0515021211";

    fetch("admin-navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));
    
$('#approve').click(async function() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            const contract = new web3.eth.Contract(abi, address);
            const test = await contract.methods.getPendingRequests().call();
            console.log(test);

        } catch (error) {
        console.error("test:", error);
        }
    }
});

async function getPendingRequests() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            const contract = new web3.eth.Contract(abi, address);
            const requests = await contract.methods.getPendingRequests().call();
            const addresses = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const currentUserAddress = addresses[0];
            console.log("Access requirements:", requests);
            
            const tableBody = document.getElementById('pendingRequestsTable');
            tableBody.innerHTML = '';

            requests.forEach(async(address) => {
                const row = document.createElement('tr');
                const addressCell = document.createElement('td');

                addressCell.textContent = address;

                const actionCell = document.createElement('td');
                const actionButton = document.createElement('button');
                
                const isApproved = await contract.methods.isLandlord(address).call();

                actionButton.textContent = isApproved ? "Disapprove" : "Approve";
                actionButton.className = "btn btn-sm btn-action";
                actionButton.style.backgroundColor = isApproved ? "red" : "green";

                actionButton.onclick = async () => {
                    try {
                        if (isApproved) {
                            await contract.methods.revokeAccess(address).send({ from: currentUserAddress });
                            alert(`Access revoked for ${address}`);
                            actionButton.textContent = "Approve";
                            actionButton.style.backgroundColor = "green";
                        } else {
                            await contract.methods.grantAccess(address).send({ from: currentUserAddress });
                            alert(`Access granted to ${address}`);
                            actionButton.textContent = "Disapprove";
                            actionButton.style.backgroundColor = "red";
                        }
                    } catch (error) {
                        console.error("Error toggling access:", error);
                    }
                };
                actionCell.appendChild(actionButton);
                row.appendChild(addressCell);
                row.appendChild(actionCell);
    
                tableBody.appendChild(row);
            })
        } catch (error) {
            console.error("Error getting request:", error);
    }       }
}

window.onload = async function() {
    await getPendingRequests();
};