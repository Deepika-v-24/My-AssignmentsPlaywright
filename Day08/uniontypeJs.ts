type paymentMethod = "UPI" | "CreditCard" | "PayPal";


function makePayment(method: paymentMethod): void {
  console.log(`Payment method chosen:` +method)
}

makePayment("UPI");
makePayment("CreditCard");