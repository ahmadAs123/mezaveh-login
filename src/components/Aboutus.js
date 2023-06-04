
import React from "react";
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router";
import myPhoto from "../photo/img.jpeg";

const Aboutus = () => {
  // const navigate = useNavigate();
  // const handleLogout = async () => {
  //   try {
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <>
     <div className="">
      <div className="con">
        <h1>המזווה</h1>
        <p>
          המזווה נועד לייצר אלטרנטיבה צרכנית ירושלמית - מאפשר צרכנות שלוקחת בחשבון שיקולים סביבתיים, חברתיים וכלכליים, תוך יצירת קולקטיב קהילתי ושותפויות
        </p>
        <img src={myPhoto} alt="" className="profile-picture" />
        <p className="intro">
         <strong> ברוכים/ות הבאות/ים למזווה! </strong>
          <br />
          <br />
        
          <strong>מה זה "המזווה"</strong>
          <br />
          <br />
          קולקטיב ירושלמי שמנגיש אורח חיים סביבתי, בריא, מקיים וקהילתי!
          המזווה מקדם צרכנות חברתית מקומית בשאיפה לאפס פסולת.
          <br />
          <br />
          <strong>איך זה עובד</strong>
          <br />
          נפגשות אחת לכמה שבועות באירועים שונים בירושלים, בהן המזווה פותח חנות פופאפ למכירת קטניות ומוצרים יבשים.
          באים מהבית עם כלים רב פעמיים ורוכשים במחיר חברתי ובמינימום פוסלת.
          <br />
          <br />
          <strong>מי אנחנו?</strong>
          <br />
          אנחנו זה אתם/ן!
          פעילות המזווה מבוססת על מתנדבים ומתנדבות שביחד מפעילות את הקולטקטיב.
          מוזמנים/ות להיות חלק: לקנות יבשים / לתנדב באירועים / להיות חלק מהקהילה 💜
        </p>
      </div>
      </div>
      <br/>
      {/* <div className="button-container">
        <div className="d-grid gap-2">
          <Button variant="primary" className="butreturn" onClick={handleLogout}>
            חזור
          </Button>
        </div>
      </div> */}
     
    </>
  );
};

export default Aboutus;
