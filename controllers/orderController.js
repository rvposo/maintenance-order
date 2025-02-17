const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { description, status, technician } = req.body;
    const newOrder = await Order.create({ description, status, technician });
    res.status(201).send({ message: "Order created", order: newOrder });
  } catch (error) {
    res.status(500).send({ message: "Error creating order", error });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json({ orders });
  } catch (error) {
    res.status(500).send({ message: "Error fetching orders", error });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, status, technician } = req.body;
    const order = await Order.findByPk(id);
    if (order) {
      order.description = description;
      order.status = status;
      order.technician = technician;
      await order.save();
      res.json({ message: `Order ${id} updated`, order });
    } else {
      res.status(404).json({ message: `Order ${id} not found` });
    }
  } catch (error) {
    res.status(500).send({ message: "Error updating order", error });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (order) {
      await order.destroy();
      res.json({ message: `Order ${id} deleted` });
    } else {
      res.status(404).json({ message: `Order ${id} not found` });
    }
  } catch (error) {
    res.status(500).send({ message: "Error deleting order", error });
  }
};
