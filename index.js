function printUserInfo(user) {
    const { name, age, email } = user;
    console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
}

const user = {
    name: 'Linh',
    age: 22,
    email: 'linh@example.com'
};

// printUserInfo(user);

function logMessages(...messages) {
    console.log(messages.join(' | '));
  }
  
// logMessages('Error', 'Warning', 'Info');

async function fetchProducts() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      
      await new Promise(resolve => setTimeout(resolve, 3000));
  
      console.log("Fetch data successfully!");
    } catch (error) {
      console.error('Error fetching products:', error);
    }
}
  
fetchProducts();
   