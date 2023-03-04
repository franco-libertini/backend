const productsArray = [
  {
    id: 1,
    title: "item 1",
    description: "item 1 descripcion",
    price: "00001 $",
    thumbnail:
      "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/26c6e4e18eeaa62590fccd44ea7812f8.png",
    code: "001",
    stock: "1 (uno)",
  },
];

class Productmanager {
  constructor() {
    this.products = productsArray;
  }

  addproduct(newproduct) {
    const product = this.products.find((prod) => prod.code === newproduct.code);
    if (product) {
      return "producto existe";
    }
    this.products.push({ ...newproduct, id: this.products.length + 1 });
  }

  getproducts() {
    return this.products;
  }

  getproductbyid(id) {
    const product = this.products.find((prod) => prod.id === id);
    if (!product) {
      return "producto no encontrado";
    }
    return product;
  }
}

const productos = new Productmanager();
