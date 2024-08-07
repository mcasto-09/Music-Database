import express from 'express';
import { Router } from 'express';
import axios from 'axios';

const musicRouter = Router();
const apiUrl = 'https://api.discogs.com';
const apiToken = 'nKepWJqiAZriBaesDcoyaJSPZOiXRujeFvYOKlfr';

musicRouter.get('/songs', async (req, res) => {
    try {
        const musicResponse = await axios.get(`${apiUrl}/database/search`, {
            params: {
                type: 'release',
                token: apiToken,
                per_page: 50,
                page: 1
            }
        });

        const releases = musicResponse.data.results;
        const songs = [];

        for (const release of releases) {
            const releaseDetails = await axios.get(release.resource_url, {
                params: { token: apiToken }
            });
            const tracklist = releaseDetails.data.tracklist;
            songs.push(...tracklist.map(track => track.title));
        }

        res.json(songs);
    } catch (error) {
        console.error('Error fetching data from Discogs:', error);
        res.status(500).json({ error: 'An error occurred while fetching data from Discogs' });
    }
});

export default musicRouter