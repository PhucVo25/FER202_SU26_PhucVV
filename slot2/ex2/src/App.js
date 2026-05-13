import logo from './logo.svg';
import './App.css';

function App() {
  let chao1 = (name) => console.log(`Xin chào, ${name}`);
  //Khai báo 1 đối tượng Person có các thuộc tính id, name, age, address
  let Person = {
    id: 1,
    name: "Võ Văn Phúc",
    age: 21,
    address: "Đà Nẵng"
}
  return (
    <><h1>Xin chào, đây là bài tập về hàm trong React!</h1>
    <h2>Tôi là PhucVV</h2>
    <button onClick = {()=>chao1("Phuc")}>Gọi hàm chao1</button>
    <div className = "card">
      <h3>Thông tin Person</h3>
      <p>ID: {Person.id}</p>
      <p>Name: {Person.name}</p>
      <p>Age: {Person.age}</p>
      <p>Address: {Person.address}</p>
    </div>
    </>
  );
}

export default App;
