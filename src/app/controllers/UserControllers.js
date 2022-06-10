
import User from '../models/user';

class UserController{
    async store(req, res){

        const userExists = await User.findOne({where: {email: req.body.email}}); //verifica se o email já existe
        if(userExists){
            return res.status(400).json({error: 'Usuário já existe'});
        }
        const {id , name, email, provider} = await User.create(req.body);
        return res.json({
            id,
            name,
            email,
            provider
        });
    }
}

export default new UserController();