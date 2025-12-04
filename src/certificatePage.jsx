import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useAuth } from "./AuthContext";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import AppLogo from "./assets/new logo.png";

export default function CertificatePage() {
  const { recordId } = useParams();
  const { currentUser } = useAuth();
  const [data, setData] = useState(null);
  const [moduleName, setModuleName] = useState("");
  const certRef = useRef();

  const [qrDataUrl, setQrDataUrl] = useState("");


  
  // -------------------
  // Load certificate
  // -------------------
  useEffect(() => {
    const loadCert = async () => {
      const ref = doc(db, "completedLearning", recordId);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        setData({ error: "Certificate not found" });
        return;
      }

      const cert = snap.data();

      if (cert.userId !== currentUser.uid) {
        setData({ error: "Unauthorized: You cannot access this certificate." });
        return;
      }

      if (cert.percentage !== 100) {
        setData({ error: "Certificate locked until module is fully completed." });
        return;
      }

      // Fetch module name
      const moduleRef = doc(db, "modules", cert.moduleId);
      const moduleSnap = await getDoc(moduleRef);
      setModuleName(moduleSnap.exists() ? moduleSnap.data().title : cert.moduleId);

      setData(cert);
    };

    loadCert();
  }, [recordId, currentUser]);

  // -------------------
  // Preload QR Code as Base64
  // -------------------
  useEffect(() => {
    const loadQR = async () => {
      const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://culturalhumanity.vercel.app/certificate/${recordId}`);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => setQrDataUrl(reader.result);
      reader.readAsDataURL(blob);
    };
    loadQR();
  }, [recordId]);

  if (!data) return <p>Verifying Certificate...</p>;
  if (data.error) return <p style={{ color: "red" }}>{data.error}</p>;

  // -------------------
  // Download PDF
  // -------------------
  const downloadPDF = async () => {
    const canvas = await html2canvas(certRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "px", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save(`${recordId}.pdf`);
  };


  return (
<div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
    <center>

          {/* Download Button */}
  <button
    onClick={downloadPDF}
    className="cta mini mt-8 px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl text-lg shadow-xl hover:bg-opacity-80 transition"
  >
    Download Certificate (PDF)
  </button>
  <br /><br />
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

      .certificate-wrapper {
        background: white;
        border: 12px solid #0ab0b6ff; /* soft grey outer border */
        border-radius: 20px;

        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
      }

    .certificate-inner {
  position: relative;
  padding: 10px;
  border-radius: 14px;
  height:100px;

  /* Create gradient border using background-clip */
//   background: linear-gradient(135deg, #0e6d85, #42c0db, #0e6d85) border-box;
  -webkit-mask:
//     linear-gradient(#fff 0 0) content-box,
//     linear-gradient(#fff 0 0);
//   -webkit-mask-composite: xor;
  mask-composite: exclude;

  /* Inner white area */
  background-clip: border-box;
}
    `}
  </style>

  {/* ===== Certificate Container ===== */}
  <div
    ref={certRef}
    className="certificate-wrapper relative flex flex-col justify-center items-center p-10"
    style={{ width: "1120px", height: "800px" }}
  >
    <div className="certificate-inner w-full h-full p-10 flex flex-col items-center">

      {/* ---- LOGO & HEADER ---- */}
      <div className="text-center mb-6">
        <img
          src={AppLogo}
          style={{ width: 110, margin: "0 auto" }}
        />
        <h1
          className="text-4xl font-extrabold mt-3"
          style={{ fontFamily: "Cinzel" }}
        >
          Cultural Humility Network
        </h1>
        <p className="text-lg mt-1" style={{ fontFamily: "Playfair Display" }}>
          Fostering Inclusive, Reflective & Culturally Aware Practice
        </p>
      </div>

   <br /><br />   {/* ---- TITLE ---- */}
      <h2
        className="text-6xl font-bold mt-4 tracking-wide"
        style={{ fontFamily: "Cinzel", color: "#0d7e9bff" }}
      >
        Certificate of Achievement
      </h2>


      {/* ---- BODY ---- */}
      <p className="text-xl mt-10" style={{ fontFamily: "Playfair Display" }}>
        This certificate is proudly awarded to
      </p>

<br /><br />
      {/* USER NAME */}
      <p
        className="text-5xl font-extrabold mt-4"
        style={{
          fontFamily: "Playfair Display",
          borderBottom: "3px solid #0d7e9bff",
          paddingBottom: "6px",
          fontSize:"2rem",
        }}
      >
       <b> {currentUser?.name || currentUser?.email}</b>
      </p>
<br />
      {/* MODULE NAME */}
      <p className="text-xl mt-10" style={{ fontFamily: "Playfair Display" }}>
        For successfully completing the module:
      </p>

      <p
        className="text-3xl font-semibold text-center mt-2 max-w-3xl"
        style={{ fontFamily: "Playfair Display", fontSize:"2rem", }}
      >
        {moduleName}
      </p>
<br />
      {/* SCORE & DATE */}
      <div className="mt-10 text-lg text-center space-y-1" style={{ fontFamily: "Playfair Display" }}>
        <p>
          <strong>Final Score:</strong>{" "}
          <span style={{ color: "#0d7e9bff", fontWeight: "bold" }}>
            {data.percentage}%
          </span>
        </p>
        <p>
          <strong>Date of Completion:</strong>{" "}
          {data.completedAt
            .toDate()
            .toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </p>
      </div>

      {/* SIGNATURE AREA */}
      <div className="mt-auto w-full flex justify-between px-20 pt-12">
<br />
        {/* CERT ID */}
        <div className="text-center text-sm" style={{ fontFamily: "Playfair Display" }}>
          <p>Certificate ID:</p>
          <p className="font-bold">{recordId}</p>
          <div className="pl"
          style={{float:'right', marginTop:-100,}}
          >
           <p>verify here</p>
         {qrDataUrl && (
  <img src={qrDataUrl} alt="QR Code" style={{ width: 80, height: 80 }} />
)}

        </div></div>

<br />
        {/* SIGNATURE */}
        <div className="text-center">
          <p
            style={{
              fontFamily: "'Pacifico', cursive",
              fontSize: 42,
              lineHeight: 1,
              marginBottom: 5,
            }}
          >
            Dr. Jesse Enebi Usman
          </p>
          <hr className="w-64 border-t-2 border-gray-800 mx-auto" style={{width:400}} />
          <p className="text-lg mt-1" style={{ fontFamily: "Playfair Display" }}>
            Director of Learning 
          </p>
        </div>

        <br />
      </div>
    </div>
  </div>
<br /> <br />

  </center>
</div>

  );
}
