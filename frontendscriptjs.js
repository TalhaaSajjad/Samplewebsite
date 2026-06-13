function order(product, price) {
  const customerName = prompt("Enter your name:");
  const email = prompt("Enter your email:");

  fetch("http://localhost:5000/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      product,
      price,
      customerName,
      email
    })
  })
  .then(res => res.json())
  .then(data => {
    alert("Order placed successfully!");
  })
  .catch(err => console.log(err));
}