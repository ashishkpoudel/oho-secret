import express from 'express';
import 'reflect-metadata';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { DomainEventMessenger } from 'core/domain/domain-event-messenger';
import { globalErrorHandler } from 'common/infrastructure/express/middleware/global-error-handler';
import { validationErrorHandler } from 'common/infrastructure/express/middleware/validation-error-handler';
import { commonRouter } from 'common/infrastructure/express/route';
import { secretRouter } from 'catalog/secret/infrastructure/express/route';

const app = express();

/**
 * Initial setup.
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config({ path: '.env' });

/**
 * Domain Event Messenger
 */
app.set('domainMessenger', new DomainEventMessenger());

/**
 * App routes.
 */
app.use(commonRouter);
app.use(secretRouter);

/**
 * Register middlewares.
 */
app.use(validationErrorHandler);
app.use(globalErrorHandler);

export default app;
