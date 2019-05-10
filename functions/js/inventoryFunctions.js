function getQuantityCheezits() {
    var itemCode = 101;

    var db = firebase.firestore();
    var productsRef = db.collection("Product");
  
    var allProducts = productsRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().itemCode == itemCode) {
  
         var quantity = doc.data().quantity;
         document.getElementById('cheezits2').value = quantity;
          }})
    })
}
function getQuantityDorito() {
    var itemCode = 102;

    var db = firebase.firestore();
    var productsRef = db.collection("Product");
  
    var allProducts = productsRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().itemCode == itemCode) {
  
         var quantity = doc.data().quantity;
         document.getElementById('dorito2').value = quantity;
          }})
    })
}
function getQuantityFrito() {
    var itemCode = 103;

    var db = firebase.firestore();
    var productsRef = db.collection("Product");
  
    var allProducts = productsRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().itemCode == itemCode) {
  
         var quantity = doc.data().quantity;
         document.getElementById('frito2').value = quantity;
          }})
    })
}
function getQuantityGummyWorm() {
    var itemCode = 104;

    var db = firebase.firestore();
    var productsRef = db.collection("Product");
  
    var allProducts = productsRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().itemCode == itemCode) {
  
         var quantity = doc.data().quantity;
         document.getElementById('gummyworm2').value = quantity;
          }})
    })
}
function getQuantityHoneyBun() {
    var itemCode = 105;

    var db = firebase.firestore();
    var productsRef = db.collection("Product");
  
    var allProducts = productsRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().itemCode == itemCode) {
  
         var quantity = doc.data().quantity;
         document.getElementById('honeybun2').value = quantity;
          }})
    })
}
function getQuantityOreo() {
    var itemCode = 106;

    var db = firebase.firestore();
    var productsRef = db.collection("Product");
  
    var allProducts = productsRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().itemCode == itemCode) {
  
         var quantity = doc.data().quantity;
         document.getElementById('oreo2').value = quantity;
          }})
    })
}
function getQuantityMandM() {
    var itemCode = 107;

    var db = firebase.firestore();
    var productsRef = db.collection("Product");
  
    var allProducts = productsRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().itemCode == itemCode) {
  
         var quantity = doc.data().quantity;
         document.getElementById('MnM2').value = quantity;
          }})
    })
}
function getQuantityReece() {
    var itemCode = 108;

    var db = firebase.firestore();
    var productsRef = db.collection("Product");
  
    var allProducts = productsRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().itemCode == itemCode) {
  
         var quantity = doc.data().quantity;
         document.getElementById('reece2').value = quantity;
          }})
    })
}
function getQuantityTrident() {
    var itemCode = 109;

    var db = firebase.firestore();
    var productsRef = db.collection("Product");
  
    var allProducts = productsRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().itemCode == itemCode) {
  
         var quantity = doc.data().quantity;
         document.getElementById('trident2').value = quantity;
          }})
    })
}
function getQuantityTwix() {
    var itemCode = 110;

    var db = firebase.firestore();
    var productsRef = db.collection("Product");
  
    var allProducts = productsRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().itemCode == itemCode) {
  
         var quantity = doc.data().quantity;
         document.getElementById('twix2').value = quantity;
          }})
    })
}
function getQuantityLays() {
    var itemCode = 111;

    var db = firebase.firestore();
    var productsRef = db.collection("Product");
  
    var allProducts = productsRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().itemCode == itemCode) {
  
         var quantity = doc.data().quantity;
         document.getElementById('lays2').value = quantity;
          }})
    })
}
function getQuantityLifeSaver() {
    var itemCode = 112;

    var db = firebase.firestore();
    var productsRef = db.collection("Product");
  
    var allProducts = productsRef.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().itemCode == itemCode) {
  
         var quantity = doc.data().quantity;
         document.getElementById('lifesaver2').value = quantity;
          }})
    })
}

          