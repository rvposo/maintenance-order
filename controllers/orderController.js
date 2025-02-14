exports.createOrder = (req, res) => {
  //to do: add database logic
  res.status(201).send({ message: "Order created" });
};

exports.getAllOrders = (req, res) => {
  res.json({ orders: [] });
};

exports.updateOrder = (req, res) => {
  const { id } = req.params;
  const { description, status, technician } = req.body;

  res.json({ message: `Order ${id} updated` });
};

exports.deleteOrder = (req, res) => {
  const { id } = req.params;
  res.json({ message: `Order ${id} deleted` });
};
