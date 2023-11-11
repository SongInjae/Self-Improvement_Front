import { AUTH } from '../constants/errorMessage';

const validatePwd = (input) => {
  const regex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

  if (regex.test(input)) return true;
  return false;
};

const validatePwdCheck = (a, b) => {
  if (a !== b) return AUTH.PASSWORD_CHECK;
  return '';
};

const validateName = (input) => {
  const regex = /^[ㄱ-ㅎ가-힣]+$/;

  if (regex.test(input)) return true;
  else return false;
};

export { validatePwd, validatePwdCheck, validateName };
