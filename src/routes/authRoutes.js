import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
  requestResetEmail,
  resetPassword,
} from '../controllers/authController.js';
import {
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validations/authValidation.js';

const router = Router();

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags: [Auth Routes]
 *     summary: Register user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, password]
 *             properties:
 *               name:
 *                 type: string
 *                 example: Hanna
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: qwerty123
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 *       409:
 *         description: Conflict (email already exists)
 */

router.post('/auth/register', celebrate(registerUserSchema), registerUser);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth Routes
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: qwerty123
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 */

router.post('/auth/login', celebrate(loginUserSchema), loginUser);
/**
 * @openapi
 * /api/auth/refresh:
 *   post:
 *     tags: [Auth Routes]
 *     summary: Refresh user session
 *     description: Typically uses refresh token (cookie or header depending on implementation).
 *     responses:
 *       200:
 *         description: OK
 *       401:
 *         description: Unauthorized
 */

router.post('/auth/refresh', refreshUserSession);
/**
 * @openapi
 * /api/auth/logout:
 *   post:
 *     tags: [Auth Routes]
 *     summary: Logout user
 *     responses:
 *       204:
 *         description: No Content
 *       401:
 *         description: Unauthorized
 */

router.post('/auth/logout', logoutUser);
/**
 * @openapi
 * /api/auth/request-reset-email:
 *   post:
 *     tags: [Auth Routes]
 *     summary: Request password reset email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email]
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request
 */

router.post(
  '/auth/request-reset-email',
  celebrate(requestResetEmailSchema),
  requestResetEmail,
);
/**
 * @openapi
 * /api/auth/reset-password:
 *   post:
 *     tags: [Auth Routes]
 *     summary: Reset password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [token, password]
 *             properties:
 *               token:
 *                 type: string
 *                 example: "reset-token-from-email"
 *               password:
 *                 type: string
 *                 example: newStrongPass123
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized / Invalid token
 */

router.post(
  '/auth/reset-password',
  celebrate(resetPasswordSchema),
  resetPassword,
);
export default router;
