import pkg from 'jsonwebtoken';
const { verify } = pkg;


const getAuthTokenFromRequest = (req)=> {
  const header = req.get('Authorization') || '';
  const [bearer, token] = header.split(' ');
  return bearer === 'Bearer' && token ? token : null;
};



/** 
 *  ############## TASK #############
 * HANDLE FOLLOWING POTENTIAL ERRORS
 * 
 * Authentication token not foud
 * 
 * Authentication token is invalid
 * 
 * Authentication token is invalid: User not found
 * 
 */



function authenticateToken(req, res, next) {
  const secret=process.env.SECRET
  const token = getAuthTokenFromRequest(req)
    //console.log(secret)
  if (token == null) return res.sendStatus(401)
  verify(token,secret, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}

export default authenticateToken