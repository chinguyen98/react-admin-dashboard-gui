import * as jwt from 'jsonwebtoken'

const decodeToken = (token) => {
  const { name } = jwt.decode(token);
  return { name };
}

export default decodeToken;