let transactions = [];


function renderTransactions() {
    const transactionList = document.getElementById("transactionList");
    transactionList.innerHTML = ""; 

    
    transactions.forEach(transaction => {
        const li = document.createElement("li");
        li.classList.add(transaction.type); 

        const icon = transaction.type === 'ganancia' ? 'fas fa-arrow-up' : 'fas fa-arrow-down';

        li.innerHTML = `<i class="${icon}"></i> ${transaction.description}: $${transaction.amount} (${transaction.type})`;

        transactionList.appendChild(li);
    });

    
    document.getElementById("balance").innerText = `$${calculateBalance()}`;
}



function calculateBalance() {
    
    return transactions.reduce((sum, transaction) => {
        if (transaction.type === "ganancia") {
            return sum + transaction.amount; 
        } else if (transaction.type === "gasto") {
            return sum - transaction.amount; 
        }
        return sum;
    }, 0).toFixed(2);
}


function addTransaction(description, amount, type) {
    
    amount = parseFloat(amount);

    if (isNaN(amount) || amount === 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

   
    const transaction = {
        id: Date.now(),
        description,
        amount,
        type,
        date: new Date().toISOString()
    };

    
    transactions.push(transaction);

    
    console.log("Transacción agregada:", transaction);

    
    renderTransactions();
}


document.getElementById("addTransactionButton").addEventListener("click", () => {
    const description = document.getElementById("descriptionInput").value.trim();
    const amount = document.getElementById("amountInput").value.trim();
    const type = document.querySelector('input[name="type"]:checked').value;

    if (description === "" || amount === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    addTransaction(description, amount, type);

    document.getElementById("descriptionInput").value = "";
    document.getElementById("amountInput").value = "";
});

renderTransactions();

function updateBalance() {
    const balanceElement = document.getElementById("balance");
    balanceElement.classList.add("changed");

    setTimeout(() => {
        balanceElement.classList.remove("changed");
    }, 300); 
}

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur')
    .then(response => response.json())
    .then(data => {
        const   
     bitcoinPrice = data.bitcoin.eur;
        document.getElementById('bitcoin-price').innerHTML   
     = `El precio actual de Bitcoin es: $${bitcoinPrice}`;
      });
  

