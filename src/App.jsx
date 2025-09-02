import React, { useState } from "react";


export default function PasswordGenerator() {
const [password, setPassword] = useState("");


const generatePassword = () => {
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
let newPass = "";
for (let i = 0; i < 10; i++) {
const randomIndex = Math.floor(Math.random() * chars.length);
newPass += chars[randomIndex];
}
setPassword(newPass);
};


return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
<h1 className="text-xl font-bold mb-4">Simple Password Generator</h1>
<input
type="text"
value={password}
readOnly
className="border px-3 py-2 rounded mb-3 w-64 text-center"
placeholder="Click Generate"
/>
<button
onClick={generatePassword}
className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
>
Generate Password
</button>
</div>
);
}