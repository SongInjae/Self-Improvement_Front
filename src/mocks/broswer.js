import { setupWorker } from 'msw/browser';
import authHandler from './authHandlers';
import calendarHandler from './calendarHandler';

export const worker = setupWorker(...authHandler, ...calendarHandler);
