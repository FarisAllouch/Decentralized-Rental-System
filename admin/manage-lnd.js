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
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "_removePendingRequest",
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
	}
];
    const address = "0x59e646001e8b900c624f07445ac7530ba03d4889";

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