import Users from "../models/User.model.js";

class UserRepository {
    static async createUser(name, email, password) {
    const user_created = await Users.create({
        name,
        email,
        password,
    })
    return user_created
    }
    static async getAll (){

        const users = await Users.find()
        return users
    }
    static async getById (user_id){
        const user_found = await Users.findById(user_id)
        return user_found
    }
    
    static async deleteById (user_id){
        await Users.findByIdAndDelete(user_id)
        return true
    }
    static async updateById (user_id, new_values){
        const user_updated = await Users.findByIdAndUpdate(
            user_id, 
            new_values, 
            {
                new: true //Cuando se haga la actualizacion nos traiga el objeto actualizado
            } 
        )
        return user_updated
    }

    static async getByEmail (email){
        const user = await Users.findOne({email: email})
        return user
    } 

    }


export default UserRepository
