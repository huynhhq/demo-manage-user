import UserModel from '../../database/mongo/model/user.model';
import logger from '../../api/logger';
import APIError from '../../util/APIError';
import {jwt} from "../../util/JWT/jwt";
import {ValidationHelpers} from "../../util/Helper";
import {ADMIN_ROLE, CODE_ERROR} from "../../constants";

/**
 * Create new user
 * @param user
 * @param {string} user.userName
 * @param {string} user.passWord
 * @param {string} user.email
 * @param {string} user.phoneNumber
 * @param {string} user.fullName
 * @returns {Promise<*>}
 */
export async function registry(user) {
  try {
    const existedUser = await UserModel.findOne({$or: [{email: user.email}, {userName: user.userName}]});
    if (existedUser) {
      return Promise.reject(new APIError(403, [
        {
          msg: 'email/userName account already created',
          param: CODE_ERROR.USER_EXISTS,
        },
      ]));
    }
    user.passWord = ValidationHelpers.createHash(user.passWord);
    let userCreated = await UserModel.create(user);
    return userCreated.toJSON();
  } catch (error) {
    logger.error('error userRegistry : ', error);
    return Promise.reject(new APIError(error.statusCode || 500, error.message || error.errors || 'Server Internal Error.'))
  }
}

/**
 * User Login
 * @param options
 * @param {string} options.email
 * @param {string} options.password
 * @returns {Promise<*>}
 * */

export async function login(options) {
  try {
    let user = await UserModel.findOne({email: options.email});
    if(!user){
      return Promise.reject(new APIError(404, [
        {
          msg: 'USER_NOT_FOUND',
          params: CODE_ERROR.USER_NOT_FOUND
        }
      ]));
    }
    if(ValidationHelpers.comparePassword(user.password, options.password)){
      return {
        data: user,
        token: jwt.issue({_id: user._id}),
        expiredTime: jwt.getExpiredTime()
      };
    } else {
      return Promise.reject(new APIError(400, [
        {
          msg: 'PASSWORD_NOT_MATCH',
          params: CODE_ERROR.PASSWORD_NOT_MATCH
        }
      ]));
    }
  } catch (error) {
    logger.error('error login : ', error);
    return Promise.reject(new APIError(error.statusCode || 500, error.message || error.errors || 'Server Internal Error.'))
  }
}
