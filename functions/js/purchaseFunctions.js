var amountTendered;

//This function clears search results from the page, so that they don't build up
function clearElementBox(elementId) {
    document.getElementById(elementId).innerHTML = "";
}

function changeAmountEnteredNickel() {
    
    amountTendered = document.getElementById('moneyentered').value;
    if (amountTendered == "") {
        amountTendered = 0;
    }
    var valueOfPrevious = parseFloat(Math.round(amountTendered * 100)/100).toFixed(2);
    var round = (Math.round(valueOfPrevious * 100) / 100);

    document.getElementById('moneyentered').value = "";
    document.getElementById('moneyentered').value = (round + 0.05).toFixed(2);
    amountTendered = round + 0.05; 
}
function changeAmountEnteredDime() {
    amountTendered = document.getElementById('moneyentered').value;
    if (amountTendered == "") {
        amountTendered = 0;
    }
    var valueOfPrevious = parseFloat(Math.round(amountTendered * 100)/100).toFixed(2);
    var round = (Math.round(valueOfPrevious * 100) / 100);
    document.getElementById('moneyentered').value = "";
    document.getElementById('moneyentered').value = (round + 0.10).toFixed(2);
    amountTendered = round + 0.10;    
}
function changeAmountEnteredQuarter() {
    amountTendered = document.getElementById('moneyentered').value;
    if (amountTendered == "") {
        amountTendered = 0;
    }
    var valueOfPrevious = parseFloat(Math.round(amountTendered * 100)/100).toFixed(2);
    var round = (Math.round(valueOfPrevious * 100) / 100);
    document.getElementById('moneyentered').value = "";
    document.getElementById('moneyentered').value = (round + 0.25).toFixed(2); 
    amountTendered = round + 0.25; 
}
function changeAmountEnteredOneDollar() {
    amountTendered = document.getElementById('moneyentered').value;
    if (amountTendered == "") {
        amountTendered = 0;
    }
    var valueOfPrevious = parseFloat(Math.round(amountTendered * 100)/100).toFixed(2);
    var round = (Math.round(valueOfPrevious * 100) / 100);
    document.getElementById('moneyentered').value = "";
    document.getElementById('moneyentered').value = (round + 1.00).toFixed(2);   
    amountTendered = round + 1.00; 
}
function changeAmountEnteredFiveDollar() {
    amountTendered = document.getElementById('moneyentered').value;
    if (amountTendered == "") {
        amountTendered = 0;
    }
    var valueOfPrevious = parseFloat(Math.round(amountTendered * 100)/100).toFixed(2);
    var round = (Math.round(valueOfPrevious * 100) / 100);
    document.getElementById('moneyentered').value = "";
    document.getElementById('moneyentered').value = (round + 5.00).toFixed(2); 
    amountTendered = round + 5.00;   
}

function makePurchase(){

    var elementId = "vending-item-list";

    clearElementBox(elementId);

    var itemCode = document.getElementById("itemcode").value;
    var amountEntered = document.getElementById("moneyentered").value;

    document.getElementById("itemcode").value = "";
    document.getElementById("moneyentered").value = "";

    amountEntered = parseFloat(Math.round(amountEntered * 100)/100).toFixed(2); 

    var db = firebase.firestore();
    var productsRef = db.collection("Product");

    
    var allProducts = productsRef.get().then(snapshot => {
        //foundOne is used as a flag incase the itemCode variable is not matched...
        //with an itemCode found in the database
        var foundOne = false;
        snapshot.forEach(doc => {
          console.log(doc.data().itemCode);

          if (doc.data().itemCode == itemCode) {

            foundOne = true;

            var price = doc.data().price;
            var quantity = doc.data().quantity;
            var itemName = doc.data().itemName;
        
                if(amountEntered >= price && quantity > 0) {

                    document.getElementById("moneyentered").value = (amountEntered - price).toFixed(2);

                    var node = document.createElement("li"); // Create a <li> node
                    node.setAttribute("class","list-group-item d-flex justify-content-between align-items-center"
                    );

                    var itemText = document.createTextNode("Thank you for your purchase of: " + itemName); // Create a text node
                    node.appendChild(itemText); // Append the text to <li>
                    document.getElementById("vending-item-list").appendChild(node); // Append <li> to <ul> with id="myList"

                    
                     quantity = quantity - 1;
                     doc.ref.update({"quantity": quantity});

                }else if(amountEntered < price && quantity > 0) {
                    document.getElementById("moneyentered").value = amountEntered;

                    var nodeErrorMessage = document.createElement("li"); 
                    nodeErrorMessage.setAttribute("class","list-group-item d-flex justify-content-between align-items-center"
                    );

                    var errorText = document.createTextNode("Error, please enter more money! $" + amountEntered + " < $" + price);
                    nodeErrorMessage.appendChild(errorText); 
                    document.getElementById("vending-item-list").appendChild(nodeErrorMessage); 
                }else if(quantity == 0){
                    document.getElementById("moneyentered").value = amountEntered;

                    var nodeErrorMessageTwo = document.createElement("li"); 
                    nodeErrorMessageTwo.setAttribute("class","list-group-item d-flex justify-content-between align-items-center"
                    );

                    var errorText2 = document.createTextNode("Item Out Of Stock: " + itemName + ", Quantity: " + quantity); 
                    nodeErrorMessageTwo.appendChild(errorText2); 
                    document.getElementById("vending-item-list").appendChild(nodeErrorMessageTwo);
                }
            }
        })
    
    //If this executes, it means that the itemCode entered was invalid
    if (!foundOne) {

        document.getElementById("moneyentered").value = amountEntered;

        var nodeErrorMessageThree = document.createElement("li"); // Create a <li> node
        nodeErrorMessageThree.setAttribute("class","list-group-item d-flex justify-content-between align-items-center"
        );

        var errorText3 = document.createTextNode("Error: Invalid Item Code, try again"); // Create a text node
            nodeErrorMessageThree.appendChild(errorText3); // Append the text to <li>
            document.getElementById("vending-item-list").appendChild(nodeErrorMessageThree);

    }}
    )}

function dispenseChange() {

    var elementId = "vending-item-list";
    //Clears any previous change boxes from the page
    clearElementBox(elementId);

    //var itemCode;
    var moneyInput = document.getElementById("moneyentered").value;
    var moneyValue = parseFloat(Math.round(moneyInput * 100)/100).toFixed(2);


    var quarters = 0;
    var nickels = 0;
    var dimes = 0;

    moneyValue = moneyValue * 100;
    

    quarters = Math.floor(moneyValue / 25);
    moneyValue = moneyValue % 25;
   
    dimes = Math.floor(moneyValue / 10);
    moneyValue = moneyValue % 10;
    
    nickels = Math.floor(moneyValue / 5);
   

    var nodeChange = document.createElement("li"); // Create a <li> node
    nodeChange.setAttribute("class","list-group-item d-flex justify-content-between align-items-center"
    );

    var changeText = document.createTextNode("Your Change:   Quarters " + quarters +",   Dimes " + dimes + ",   Nickels " + nickels); // Create a text node
          nodeChange.appendChild(changeText); // Append the text to <li>
          document.getElementById("vending-item-list").appendChild(nodeChange); // Append <li> to <ul> with id="myList"



    document.getElementById("moneyentered").value = "";
}

//Update Snack quantity
function restockSnack() {

    var elementId = "service-item-list";
    clearElementBox(elementId);

    var snackID;
    var serviceKeyEntered;
    var serviceKey = "A1B2C3";

    var db = firebase.firestore();
    var productsRef = db.collection("Product");

    snackID = document.getElementById("snackentered").value;
    serviceKeyEntered = document.getElementById("keycode").value;

    //Clear the fields
    document.getElementById("snackentered").value = "";
    document.getElementById("keycode").value = "";


    var allProducts = productsRef.get().then(snapshot => {
      var serviceNumberFound = false;
      snapshot.forEach(doc => {
      
        if (doc.data().itemCode == snackID && serviceKey == serviceKeyEntered) {
            doc.ref.update({"quantity": "20"});  
            serviceNumberFound = true;
        }
    
      });

      if(!serviceNumberFound) {
        var nodeServiceDenied = document.createElement("li"); // Create a <li> node
        nodeServiceDenied.setAttribute("class","list-group-item d-flex justify-content-between align-items-center"
        );

        var serviceDeniedText = document.createTextNode("Either you entered the item code incorrectly, or you don't have permission to service the machine! "); 
        nodeServiceDenied.appendChild(serviceDeniedText); 
          document.getElementById("service-item-list").appendChild(nodeServiceDenied); 

      }
    });

   
  }