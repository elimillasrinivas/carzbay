import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate = useNavigate()
  return (
   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <button
    style={{
      padding: '10px',
      backgroundColor: '#3498db', // Background color
      color: '#ffffff', // Text color
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    }}
    onClick={() => {
      navigate("/admin/data-entry");
    }}
    onMouseOver={(e) => {
      e.target.style.backgroundColor = '#2980b9'; // Hover background color
    }}
    onMouseOut={(e) => {
      e.target.style.backgroundColor = '#3498db'; // Restore background color on hover out
    }}
  >
    Enter Data
  </button>
</div>

  )
}

export default AdminDashboard
