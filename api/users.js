// /api/users.js - This is your free server code

const mongoose = require('mongoose');

// 1. Define the User Schema (structure of a user object in the database)
// We define it here since we are using a single-file serverless function
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String, default: 'A new user.' },
    profilePictureUrl: { type: String, default: 'default-avatar.png' },
    // NOTE: We don't need 'password' here since we are only reading public user data
}, { collection: 'users' }); 

// Avoid re-compiling the model on every request
const User = mongoose.models.User || mongoose.model('User', UserSchema);

// This variable will hold your secret Connection String (URI)
const MONGODB_URI = process.env.MONGODB_URI; 

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        // Only allow requests that are trying to retrieve data
        return res.status(405).send({ message: 'Only GET requests allowed' });
    }

    try {
        // 2. Connect to the database using the secret URI
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(MONGODB_URI);
        }

        // 3. Fetch all users, selecting only the public fields
        const users = await User.find().select('username bio profilePictureUrl');
        
        // Success: Send the user list back as JSON
        res.status(200).json(users);
    } catch (error) {
        console.error('Database/Server Error:', error);
        res.status(500).json({ message: 'Failed to fetch user index.' });
    }
}
