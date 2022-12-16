import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const startConnection = async () => {
    try {
        console.log();
        const db = await mongoose.connect(`mongodb+srv://test:${process.env.PASS}@cluster0.b2vl73t.mongodb.net/?authMechanism=DEFAULT`);
        mongoose.plugin((schema: any) => { schema.options.usePushEach = true; schema.options.useUnifiedTopology = true;  schema.options.useNewUrlParser = true;  });



        if(db) {
            console.log('MongoDB is connected');
        }
    } catch (error) {
        console.log('error MongoDB is not connected');
        // console.log(error);
    }

}
