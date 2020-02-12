import {ExpressValidation} from '@k-will/core-validation';
import UserModel from '../../database/mongo/model/user.model';
const AdminValidation = new ExpressValidation();

export const AdminLogin = AdminValidation.validation({
  body: {
    userName: { type: 'String', required: true },
    passWord: { type: 'String', required: true }
  }
});

export const AdminAddUser = AdminValidation.validation({
  body: {
    userName: { type: 'String', required: true },
    fullName: { type: 'String', required: true },
    passWord: { type: 'String', required: true },
    email: { type: 'Email', required: true },
    phoneNumber:  { type: 'String', required: true }
  }
});

export const AdminEditUser = AdminValidation.validation({
  params: {
    id: { type: 'ObjectId', required: true, model: UserModel }
  },
  body: {
    userName: { type: 'String' },
    fullName: { type: 'String' },
    passWord: { type: 'String' },
    email: { type: 'Email' },
    phoneNumber:  { type: 'String' }
  }
});

export const AdminDeleteUser = AdminValidation.validation({
  params: {
    id: { type: 'ObjectId', required: true, model: UserModel }
  }
});

export const AdminGetListUser = AdminValidation.validation({
  query: {
    page: { type: 'Number', options: {min: 1} },
    limit: { type: 'Number', options: {min: 1} },
    text: { type: 'String' }
  }
});
