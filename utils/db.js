import mongoose from 'mongoose';

const connectDB = async () => {
    try {
    
        const uri = 'mongodb+srv://khathatsomashongoane98:K53449007@api-testing.tjevt.mongodb.net/?retryWrites=true&w=majority&appName=API-Testing';
        
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); 
    }
};

export default connectDB;
