import { Router } from 'express';
import * as UserController from './user.controller';
import { registry } from './user.validator';
import {isUser, isAdmin} from "../../util/JWT/jwt";
const router = new Router();

router.route('/registry')
  .post(
    registry,
    UserController.registry
  );

export default router;
