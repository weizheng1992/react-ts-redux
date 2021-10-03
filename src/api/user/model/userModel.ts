/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  role?: RoleInfo;
}

/**
 * @description: Register interface return value
 */
export interface RegisterParams {
  username: string;
  password: string;
}