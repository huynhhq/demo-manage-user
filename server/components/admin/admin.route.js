import * as Admin_Controller from './admin.controller';
import { Router } from 'express';
import { AdminLogin, AdminAddUser, AdminEditUser, AdminDeleteUser, AdminGetListUser } from "./admin.validation";
import {isAdmin} from "../../util/JWT/jwt";
const router = new Router();

router.route('/login')
  .post(
    AdminLogin,
    Admin_Controller.adminLogin
  );

router.route('/user/add-user')
  .post(
    isAdmin.auth(),
    AdminAddUser,
    Admin_Controller.adminAddUser
  );

router.route('/user/:id')
  .put(
    isAdmin.auth(),
    AdminEditUser,
    Admin_Controller.editUserByAdmin
  )
  .delete(
    isAdmin.auth(),
    AdminDeleteUser,
    Admin_Controller.adminDeleteUser
  );

router.route('/user/get-all-user')
  .get(
    isAdmin.auth(),
    AdminGetListUser,
    Admin_Controller.adminGetListUser
  );

export default router;
