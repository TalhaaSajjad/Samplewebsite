const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/order", async (req, res) => {
  const { product, price, customerName, email } = req.body;

  // Email setup
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourgmail@gmail.com",
      pass: "your_app_password"
    }
  });

  let mailOptions = {
    from: email,
    to: "yourgmail@gmail.com",
    subject: "New Order Received",
    text: `
      Customer Name: ${customerName}
      Email: ${email}
      Product: ${product}
      Price: ${price}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Order email sent" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});