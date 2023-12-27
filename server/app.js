const express = require("express")
const app = express()
const cors = require('cors')
const db = require('./configs/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userHistoryRoutes = require('./routes/userHistoryRoutes');
const adminDashboardRoutes = require('./routes/adminDashboardRoutes');
const servicesRoutes = require('./routes/servicesRoutes');

//middlewares
app.use(express.json())
app.use(cors())

//DB Connection
db()

//routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/user/history', userHistoryRoutes);
app.use('/api/admin', adminDashboardRoutes);
app.use('/api/services', servicesRoutes);

//server
const port = 5000
app.listen(port, ()=>console.log(`Server listnening on ${port}`))
