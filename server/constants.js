/**
 * The global constants
 */
const MEGABYTE = 1024 * 1024;
export const CODE_ERROR = {
  /**
   * Admin Error
   * */
  ADMIN_NOT_FOUND: 'ADMIN_NOT_FOUND',
  INVALID_PARAMS: 'INVALID_PARAMS',
  NOT_PERMISSION: 'NOT_PERMISSION',
  /**
   * User Error
   * */
  USER_EXISTS: 'USER_EXISTS',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  PASSWORD_NOT_MATCH: 'PASSWORD_NOT_MATCH'
};

export const ADMIN_ROLE = {
  ROOT: 'root',
  ADMIN: 'admin'
};
