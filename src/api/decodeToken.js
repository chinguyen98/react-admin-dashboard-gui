import * as jwt from 'jsonwebtoken'

const decodeToken = (token) => {
  const data = jwt.decode(token);
  return data;
}

export default decodeToken;