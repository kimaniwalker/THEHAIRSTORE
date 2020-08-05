import { Router } from 'express';
import authRouter from './auth';
import usersRouter from './users';
import contactRouter from './contactform';
import stripeDonationsRouter from './stripeDonations';

import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';
import StripeChargesPostRouter from './stripeChargePost';
import ProductsRouter from './products';



let router = Router();

/* 
router.use(tokenMiddleware);
router.use(isLoggedIn);
 */




router.use('/auth', authRouter);
router.use('/donate', stripeDonationsRouter);
router.use('/contact', contactRouter);
router.use('/users', usersRouter);
router.use('/stripecharges', StripeChargesPostRouter);
router.use('/products', ProductsRouter);

router.route('*')
.post(tokenMiddleware, isLoggedIn)
.put(tokenMiddleware, isLoggedIn)
.delete(tokenMiddleware, isLoggedIn)
.get(tokenMiddleware, isLoggedIn);


export default router;