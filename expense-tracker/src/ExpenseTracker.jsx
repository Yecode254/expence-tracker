import React, { useState } from 'react';
import './ExpenseTracker.css'; 



function ExpenseTracker() {
  const [form, setForm] = useState({});
  const [expenses, setExpenses] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, form]);
    setForm({});
  };

  return (
    <div style={{ padding: '20px', width: '50%', margin: 'auto', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)',color: '#333' }}>
      
      <form onSubmit={handleSubmit}>
        <h2>Add Expense</h2>
        {['title', 'description', 'category', 'amount', 'date'].map((field) => (
          <input
            key={field}
            name={field}
            value={form[field] || ''}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            type={field === 'amount' ? 'number' : field === 'date' ? 'date' : 'text'}
            required
          />
        ))}
        <button type="submit">Submit</button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp, i) => (
            <tr key={i}>
              <td>{exp.title}</td>
              <td>{exp.description}</td>
              <td>{exp.category}</td>
              <td>{exp.amount}</td>
              <td>{exp.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTracker;



