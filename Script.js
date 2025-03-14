// Get elements
const walletBalanceElement = document.getElementById('wallet-balance');
const sendPiButton = document.getElementById('send-pi-button');
const receivePiButton = document.getElementById('receive-pi-button');
const recipientAddressInput = document.getElementById('recipient-address');
const amountInput = document.getElementById('amount');

// Set API endpoint and token
const apiEndpoint = 'https://api.pi.network/v1/';
const apiToken = 'YOUR_API_TOKEN';

// Add event listeners
sendPiButton.addEventListener('click', sendPi);
receivePiButton.addEventListener('click', receivePi);

// Functions
function sendPi() {
    // Get recipient address and amount
    const recipientAddress = recipientAddressInput.value;
    const amount = amountInput.value;

    // Validate input
    if (recipientAddress === '' || amount === '') {
        alert('Please enter recipient address and amount');
        return;
    }

    // Send Pi API call
    fetch(apiEndpoint + 'send', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + apiToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'recipient_address': recipientAddress,
            'amount': amount
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

function receivePi() {
    // Receive Pi API call
    fetch(apiEndpoint + 'receive', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + apiToken,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
              }
          
