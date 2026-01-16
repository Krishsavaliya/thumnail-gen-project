import { Request, Response } from 'express';
import Thumbnail from '../models/Thumbnail.js';

// Controllers fot all user thumbnails

export const getUserThumbnails = async (req:Request, res:Response) => {
    try {
        const { userId } = req.session;
        const thumbnails = await Thumbnail.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json({ thumbnails });

    } catch (error) {
        console.error('Error fetching user thumbnails:', error);
        res.status(500).json({ message: 'Failed to fetch user thumbnails', error });
    }
}


// Controller get single thumbnail of a user

export const getThumbnailbyId = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const { userId } = req.session;

        const thumbnail = await Thumbnail.findOne({ userId, _id: id  });
        res.status(200).json({ thumbnail });

    } catch (error) {
        console.error('Error fetching thumbnail by ID:', error);
        res.status(500).json({ message: 'Failed to fetch thumbnail by ID', error });
    }
}