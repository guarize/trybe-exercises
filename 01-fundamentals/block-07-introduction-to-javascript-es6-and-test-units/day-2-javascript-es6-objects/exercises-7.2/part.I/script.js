const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Complete the customerInfo() function so that its return is similar to "Hello Ana Silveira, delivery for: Rafael Andrade, Phone: 11-98763-1416, R. Rua das Flores, No: 389, AP: 701".

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNo = order.phoneNumber;
  const address = order.address;
  console.log(`Hello ${deliveryPerson}, delivery for: ${name}, Phone: ${phoneNo}, ${address.street}, Nº:${address.number}, Ap:${address.apartment}.`);
}

customerInfo(order);

// Complete the orderModifier() function so that its return is similar to "Hello Luiz Silva, your order total for marguerita, pepperoni, and Coke Zero is $50.00."

const orderModifier = (order) => {
  const modifier = {
    name: 'Luiz Silva',
    payment: {
      total: 50,
    },
  };
  const newOrder = Object.assign(order, modifier);

  console.log(`Hello ${order.name}, your order total for marguerita, pepperoni, and Coke Zero is $${order.payment.total},00.`);
}

orderModifier(order);