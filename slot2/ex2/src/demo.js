let tong = (a, b) => a + b;
console.log(tong(5, 3));

let chao = () => console.log("Xin chào!");
//gọi hàm chao để in ra lời chào
console.log(chao());

//1. viết hàm chao1 nhận 1 tham số tên và in ra lời chào với tên đó
let chao1 = (ten) => console.log(`Xin chào ${ten}!`);
console.log(chao1("Nguyễn An"));

//2. viết hàm chao2 in ra lời chào nhận 1 tham số là 1 đối tượng Person 
// có các thuộc tính id, name, age, address, 
// sau đó in ra lời chào với tên của đối tượng đó, gọi hàm chao2 với 1 đối tượng Person mẫu
let Person = {
    id: 1,
    name: "Võ Văn Phúc",
    age: 21,
    address: "Đà Nẵng"
}
let chao2 = (person) => console.log(`Xin chào ${person.name}!`);
console.log(chao2(Person));