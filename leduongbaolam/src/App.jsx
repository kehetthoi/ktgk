// import React, { useState } from "react";

// function App() {
//   // Lưu giá trị email
//   const [email, setEmail] = useState("");
//   // Trạng thái hợp lệ của email
//   const [isValid, setIsValid] = useState(true);

//   // Hàm kiểm tra định dạng email
//   const validateEmail = (email) => {
//     // Biểu thức chính quy kiểm tra email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // Kiểm tra email khớp với regex
//     return emailRegex.test(email);
//   };
//   // Hàm xử lý khi người dùng nhập giá trị trên ô input
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     // Cập nhật email vào state
//     setEmail(value);
//     // Kiểm tra email hợp lệ hay không
//     setIsValid(validateEmail(value));
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Kiểm tra định dạng Email</h1>
//       <input
//         type="text"
//         placeholder="Nhập email của bạn"
//         // mỗi khi state email thay đổi, component sẽ thực hiện re-render
//         // và cung cấp giá trị mới cho ô input
//         value={email}
//         onChange={handleInputChange}
//         style={{
//           padding: "10px",
//           fontSize: "16px",
//           border: `2px solid ${isValid ? "green" : "red"}`,
//         }}
//       />
//       <p style={{ color: isValid ? "green" : "red", marginTop: "10px" }}>
//         {email
//           ? isValid
//             ? "Email hợp lệ!"
//             : "Email không hợp lệ. Vui lòng kiểm tra lại."
//           : "Vui lòng nhập email để kiểm tra."}
//       </p>
//     </div>
//   );
// }

// export default App;


//lesson 5
import React from 'react';
import { Space, Table } from 'antd';

const App = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <div>
      <h1 className="text-center">Demo tailwind</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default App;

