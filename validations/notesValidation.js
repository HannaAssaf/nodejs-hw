import { Joi, Segments } from 'celebrate';
import { TAGS } from '../constants/tags.js';

//localhost:3030/notes?tag=Todo&search=hello

export const getAllNotesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(5).max(20).default(10),
    tag: Joi.string().valid(...TAGS),
    search: Joi.string().trim().allow(''),
  }),
};
