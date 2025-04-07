import express, { json } from 'express';
const app = express();
import { sequelize } from './models';

app.use(json());

// Route imports
import patientRoutes from './routes/patientRoutes';
import doctorRoutes from './routes/doctorRoutes';
import adminRoutes from './routes/adminRoutes';

// Route mounting
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/admin', adminRoutes);

// Start
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('🔥 Server running on http://localhost:3000');
  });
});


