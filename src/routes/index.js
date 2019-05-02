import express from 'express';
import userRoutes from './user';
import passport from 'passport';

import './services/passport';

const requireAuth = passport.authenticate('jwt', { session: true });
const requireSignin = passport.authenticate('local', { session: false });

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
    res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

export default router;
