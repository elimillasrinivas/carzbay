import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>{navigate("/admin/data-entry")}}>Enter Data</button>
    </div>
  )
}

export default AdminDashboard