import mongoose, {mongo} from "mongoose";
async function conectaNaDatabase(){
    mongoose.connect("mongodb+srv://adm:123@cluster0.gf2tacv.mongodb.net/livraria?retryWrites=true&w=majority");

    return mongoose.connection;

} 
export default conectaNaDatabase