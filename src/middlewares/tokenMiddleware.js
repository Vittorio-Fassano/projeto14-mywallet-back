import {sessionsCollection, usersCollection} from "../database/db.js"  // usersCollection, 

export async function validatingToken (req, res, next) {
    const { authorization } = req.headers;

    const token = authorization?.replace("Bearer ", ""); //take out the word "bearer" and just get the token

    if (!token) {
        return res.sendStatus(401);
      }

      try {
        const session = await sessionsCollection.findOne({token});
        if (!session) {
            return res.sendStatus(401);
        }
        
        const user = await usersCollection.findOne({_id: session?.userId}); //there will only be a token (session) if have a login

        if (!user) {
            return res.sendStatus(404);
        }
        
        delete user.password;
        delete user._id;

        res.locals.user = user;
        //this is a local response, we don't send it to the client, we just store it to pass on to the next middleware
        
        next(); //move to the next function, in this case it's the validatingNewTransaction middleware function

      } catch (err) {
        console.log(err);
        return res.sendStatus(500);
      }
}