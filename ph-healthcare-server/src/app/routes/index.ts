import express from 'express';
import { userRoutes } from '../modules/User/user.routes';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
    // {
    //     path: '/admin',
    //     route: AdminRoutes
    // },
    // {
    //     path: '/auth',
    //     route: AuthRoutes
    // },
    // {
    //     path: '/specialties',
    //     route: SpecialtiesRoutes
    // },
    // {
    //     path: '/doctor',
    //     route: DoctorRoutes
    // },
    // {
    //     path: '/patient',
    //     route: PatientRoutes
    // },
    // {
    //     path: '/schedule',
    //     route: ScheduleRoutes
    // },
    // {
    //     path: '/doctor-schedule',
    //     route: DoctorScheduleRoutes
    // },
    // {
    //     path: '/appointment',
    //     route: AppointmentRoutes
    // },
    // {
    //     path: '/payment',
    //     route: PaymentRoutes
    // },
    // {
    //     path: '/prescription',
    //     route: PrescriptionRoutes
    // },
    // {
    //     path: '/review',
    //     route: ReviewRoutes
    // },
    // {
    //     path: '/meta',
    //     route: MetaRoutes
    // }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;