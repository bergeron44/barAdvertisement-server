const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// דאטה מעודכן עם מיקומים מדויקים, אתר אינטרנט ואינסטגרם
let bars = [
    {
        id: 1,
        name: "SassonBar",
        lat: 31.2401,
        lng: 34.7886,
        website: "https://www.sasson-bar.co.il/",
        videoUrl: "https://example.com/video1.mp4",
        likes: 0,
        imageUrl: "https://example.com/image1.jpg",
        discountOne: "🍷 משחק דייטים : 2 כוסות יין ב-70 ש״ח בלבד ",
        discountSec: "🍺 משחק חברים : 4 כוסות בירה ו-8 שוטים ב-200 ש״ח ",
        discountThi: "🥃 משחק צחוקים : כל שוט שלישי חינם 🥃",
    },
    {
        id: 2,
        name: "benGurionUniversity",
        lat: 31.2622,
        lng: 34.8013,
        website: "https://example.com",
        videoUrl: "https://example.com/video2.mp4",
        likes: 0,
        imageUrl: "https://example.com/image2.jpg",
        description: "A cool place to hang out and have fun.",
    },
    {
        id: 3,
        name: "BarGiora",
        lat: 31.2612,
        lng: 34.7925,
        instagram: "https://www.instagram.com/bar.giora/",
        videoUrl: "https://example.com/video3.mp4",
        likes: 0,
        imageUrl: "https://example.com/image3.jpg",
        discountOne: "🍷 משחק דייטים : 2 כוסות יין ב-50 ש״ח בלבד ",
        discountSec: "🍺 משחק חברים : 4 כוסות בירה ו-8 שוטים ב-200 ש״ח ",
        discountThi: "🥃 משחק צחוקים : כל שוט שלישי חינם 🥃",
    },
];

// מסלול לשליפת נתוני כל הברים
app.get('/api/bars', (req, res) => {
    res.json(bars);
});
// מסלול לשליפת נתוני כל הברים עם הלייקים שלהם
app.get('/api/bars/likes', (req, res) => {
    res.json(bars.map(bar => ({ name: bar.name, likes: bar.likes })));
});


// מסלול להוספת לייק לבר מסוים
app.post('/api/bars/:name/like', (req, res) => {
    const { name } = req.params;
    const bar = bars.find(b => b.name === name);
    
    if (bar) {
        bar.likes += 1; // עדכון הלייק
        return res.json({ success: true, likes: bar.likes }); // מחזירים את הלייקים המעודכנים
    } else {
        return res.status(404).json({ error: "Bar not found" }); // אם לא נמצא ה-bar
    }
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
