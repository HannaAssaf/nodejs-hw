import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import {
  createNoteSchema,
  getAllNotesSchema,
  noteIdSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';
import { celebrate } from 'celebrate';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.use('/notes', authenticate);
/**
 * @openapi
 * /api/notes:
 *   get:
 *     tags: [Notes]
 *     summary: Get all user notes
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 *       401:
 *         description: Unauthorized
 */

router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
/**
 * @openapi
 * /api/notes/{noteId}:
 *   get:
 *     tags: [Notes]
 *     summary: Get note by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 *       401:
 *         description: Unauthorized
 */

router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
/**
 * @openapi
 * /api/notes:
 *   post:
 *     tags: [Notes]
 *     summary: Create note
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, content]
 *             properties:
 *               title:
 *                 type: string
 *                 example: My first note
 *               content:
 *                 type: string
 *                 example: Some note text
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 */

router.post('/notes', celebrate(createNoteSchema), createNote);
/**
 * @openapi
 * /api/notes/{noteId}:
 *   delete:
 *     tags: [Notes]
 *     summary: Delete note
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No Content
 *       404:
 *         description: Not Found
 *       401:
 *         description: Unauthorized
 */

router.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
/**
 * @openapi
 * /api/notes/{noteId}:
 *   patch:
 *     tags: [Notes]
 *     summary: Update note
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: noteId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 *       401:
 *         description: Unauthorized
 */

router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

export default router;
