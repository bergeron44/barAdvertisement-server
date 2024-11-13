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
        discountOne: "🍷 משחק דייטים : 2 כוסות יין ב-50 ש״ח בלבד ",
        discountSec: "🍺 משחק חברים : 4 כוסות בירה ו-8 שוטים ב-200 ש״ח ",
        discountThi: "🥃  נחש מי אני : כל שוט שלישי חינם 🥃",
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
        website: "https://www.instagram.com/bar.giora/",
        instagram: "https://www.instagram.com/bar.giora/",
        videoUrl: "https://example.com/video3.mp4",
        likes: 0,
        imageUrl: "https://example.com/image3.jpg",
        discountOne: "🍷 משחק דייטים : 2 קוקטלים ב-80 ש״ח בלבד ",
        discountSec: "🍺  משחק חברים :5 שוטים ב-40 ש״ח כל כוס חמישית חינם ",
        discountThi: "🥃  נחש מי אני : כל שוט רביעי חינם 🥃",
    },
    {
        id: 4,
        name: "Mileva",
        lat: 31.2617, 
        lng: 34.7965,
        website: "https://mileva.co.il/",
        instagram: "https://www.instagram.com/mileva.br7/",
        videoUrl: "https://example.com/video4.mp4",
        likes: 0,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsR1WMKuBr6hfqRKcFiDtBPeBIDe9v1n1nuw&s",
        discountOne: "🍷 משחק דייטים : 2 כוסות יין ב-50 ש״ח בלבד ",
        discountSec: "🍻 משחק חברים : 3 בירות ו-5 שוטים ב-150 ש״ח",
        discountThi: "🥃  נחש מי אני : כל שוט שלישי חינם 🥃",
    },
    {
        id: 5,
        name: "Roots",
        lat: 31.2679,
        lng: 34.8000,
        instagram: "https://www.instagram.com/rootsbarkitchen/",
        videoUrl: "https://example.com/video11.mp4",
        likes: 0,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3-R6lwS-UvfwtCtPgS2cTIvDX_yIYCuqlg&s",
        discountOne: "🍷 משחק דייטים : 2 כוסות יין ב-50 ש״ח בלבד ",
        discountSec: "🍻 משחק חברים : 3 בירות ב-90 ש״ח",
        discountThi: "🥃  נחש מי אני : כל שוט שלישי חינם 🥃",
    },
    {
        id: 6,
        name: "Masada31",
        lat: 31.2589,
        lng: 34.7935,
        website: "https://www.facebook.com/p/%D7%9E%D7%A6%D7%93%D7%94-31-100084933198419/",
        instagram: "",  // אם יש חשבון אינסטגרם ניתן להוסיף כאן
        videoUrl: "https://example.com/video13.mp4",  // ניתן להוסיף קישור לסרטון אם יש
        likes: 0,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpAH51toe9nLLrlGejnUzJgyr3dnxFtc8dw&s",  // ניתן להוסיף תמונת ברירת מחדל או כתובת לתמונה מתאימה
        discountOne: "🍸 מבצע 1: 2 קוקטיילים ב-70 ש״ח בלבד",
        discountSec: "🍻 מבצע 2: 3 בירות ו-4 שוטים ב-130 ש״ח",
        discountThi: "🥃  נחש מי אני : כל שוט שלישי חינם 🥃",
    },
    {
        id: 7,
        name: "Friends",
        lat: 31.2584, // עדכן עם קואורדינטות מדויקות אם נדרש
        lng: 34.7952, // עדכן עם קואורדינטות מדויקות אם נדרש
        website: "https://www.facebook.com/friends1malabi/", // קישור לפייסבוק של הבר
        instagram: "",  // אם יש אינסטגרם, ניתן להוסיף קישור כאן
        videoUrl: "",  // אם יש סרטון, ניתן להוסיף קישור כאן
        likes: 0,
        imageUrl: "https://example.com/image15.jpg",  // תמונה מתאימה לבר
        discountOne: "🍷 משחק דייטים : 2 כוסות יין ב-50 ש״ח בלבד ",
        discountSec: "🍻 1+1 על בירות בימי ראשון",
        discountThi: "🥃  נחש מי אני : כל שוט שלישי חינם 🥃",
    },
    {
        id: 8,
        name: "BarBaSaba",
        lat: 31.2476, 
        lng: 34.7988, 
        website: "https://www.facebook.com/BarBaSaba",  // קישור חדש לפייסבוק
        instagram: "https://www.instagram.com/explore/locations/238247954/barbasaba-beer-garden/",  // קישור לאינסטגרם
        videoUrl: "",  // הוסף סרטון אם יש
        likes: 0,
        imageUrl: "https://example.com/imageBarBaSaba.jpg",  // הוסף תמונה מתאימה
        discountOne: "🍷 משחק דייטים : 2 כוסות יין ב-50 ש״ח בלבד ",
        discountSec: "🍻 הנחה על בירות",
        discountThi: "🥃  נחש מי אני : כל שוט שלישי חינם 🥃",
    },
    {
        id: 9,
        name: "JEMS",
        lat: 31.2634, 
        lng: 34.8106, 
        website: "https://www.jems.co.il/branches/beer-sheva/",  // קישור לאתר הרשמי
        facebook: "https://www.facebook.com/p/Jems-Beer-Sheva-%D7%92%D7%9E%D7%A1-%D7%91%D7%90%D7%A8-%D7%A9%D7%91%D7%A2-100063714934152/?_rdr",  // קישור לפייסבוק
        videoUrl: "",  // הוסף סרטון אם יש
        likes: 0,
        imageUrl: "https://example.com/imageJems.jpg",  // הוסף תמונה מתאימה
        discountOne: "🍷 משחק דייטים : 2 כוסות יין ב-50 ש״ח בלבד ",
        discountSec: "🍻 הנחה על בירות",
        discountThi: "🥃  נחש מי אני : כל שוט שלישי חינם 🥃",
    },
    {
        id: 10,  // Update the ID as needed
        name: "Giza",
        lat: 31.2547, 
        lng: 34.7909, 
        website: "https://www.gizabar.com/",  // Link to official website
        facebook: "https://www.instagram.com/giza.bar/",  // Link to Instagram (Facebook if needed)
        videoUrl: "",  // Add video URL if available
        likes: 0,
        imageUrl: "https://example.com/imageGiza.jpg",  // Replace with an actual image URL
        discountOne: "🍷 משחק דייטים : 2 כוסות יין ב-50 ש״ח בלבד ",
        discountSec: "🍻 הנחה על בירות",
        discountThi: "🥃  נחש מי אני : כל שוט שלישי חינם 🥃",
    }
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


app.get('/', (req, res) => {
    res.send('Bar Advertisement Server is Running');
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
