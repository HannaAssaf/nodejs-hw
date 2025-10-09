import { Router } from 'express';
import {
  getNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import { getAllNotesSchema } from '../../validations/NotesValidation.js';
import { celebrate } from 'celebrate';

const router = Router();

router.get('/notes', celebrate(getAllNotesSchema), getNotes);

router.get('/notes/:noteId', getNoteById);

router.post('/notes', createNote);

router.delete('/notes/:noteId', deleteNote);

router.patch('/notes/:noteId', updateNote);

export default router;
