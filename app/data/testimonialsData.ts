import { google } from "googleapis";

export interface TestimonialsData {
    id: number;
    profileImage: string;
    name: string;
    rating: number;
    text: string;
}

export async function fetchTestimonialsFromSheet(sheetId: string, range: string, apiKey: string): Promise<TestimonialsData[]> {
    const sheets = google.sheets({ version: "v4", auth: apiKey });
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range,
    });

    const rows = response.data.values;
    if (!rows || rows.length < 2) return [];

    // Assuming first row is header
    return rows.slice(1).map((row, idx) => ({
        id: Number(row[0]) || idx + 1,
        profileImage: row[1] || "",
        name: row[2] || "",
        rating: Number(row[3]) || 0,
        text: row[4] || "",
    }));
}

export const testimonialsData: TestimonialsData [] = [
    {
        id: 1,
        profileImage: "/clara.png",
        name: "Client One",
        rating: 5,
        text: "This service was outstanding! I couldn't be happier with the results. Highly recommend to anyone looking for quality work.",
    },{
        id: 2,
        profileImage: "/clara.png",
        name: "Client Two",
        rating: 3,
        text: "This service was outstanding! I couldn't be happier with the results. Highly recommend to anyone looking for quality work.",
    },{
        id: 3,
        profileImage: "/clara.png",
        name: "Client Three",
        rating: 5,
        text: "This service was outstanding! I couldn't be happier with the results. Highly recommend to anyone looking for quality work.",
    },{
        id: 4,
        profileImage: "/clara.png",
        name: "Client Four",
        rating: 5,
        text: "This service was outstanding! I couldn't be happier with the results. Highly recommend to anyone looking for quality work.",
    },{
        id: 5,
        profileImage: "/clara.png",
        name: "Client Five",
        rating: 4,
        text: "This service was outstanding! I couldn't be happier with the results. Highly recommend to anyone looking for quality work.",
    },
];