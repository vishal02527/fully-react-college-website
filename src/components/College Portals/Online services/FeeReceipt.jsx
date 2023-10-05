import React from "react";
import PropTypes from "prop-types";
import sign from "../../images/signature-png.png";
import logo from "../../images/logo.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function FeeReceipt({ studentId, amount, paymentMethod }) {
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleDownloadFeeReceipt = () => {
    const FeeReceiptSection = document.getElementById("FeeReceiptSection"); // ID of the fee receipt section

    if (!FeeReceiptSection) {
      console.error("Fee receipt section not found.");
      return;
    }

    // Use html2canvas to capture the fee receipt section as an image
    html2canvas(FeeReceiptSection, { allowTaint: true, useCORS: true }).then(
      (canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // Calculate the page size based on the fee receipt section's size
        const pageWidth = 210; // A4 page width in mm
        const pageHeight =
          (FeeReceiptSection.clientHeight * pageWidth) /
          FeeReceiptSection.clientWidth;
        const orientation = "p"; // Portrait

        // Create a new jsPDF instance
        const pdf = new jsPDF(orientation, "mm", "a4");

        // Add the captured image to the PDF
        pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);

        // Download the PDF with a unique filename (e.g., based on the student's id)
        pdf.save(`VDU_Fee_Receipt_${studentId}.pdf`);
      }
    );
  };

  const handlePrintFeeReceipt = () => {
    // Hide the header when printing
    const header = document.querySelector(".header");
    if (header) {
      header.style.display = "none";
    }

    // Add the "printOnly" class to elements you want to print
    const elementsToPrint = document.querySelectorAll("#FeeReceiptSection");
    elementsToPrint.forEach((element) => {
      element.classList.add("printOnly");
    });

    // Use the print window to print the content
    const printWindow = window.open("", "", "width=600,height=600");
    printWindow.document.open();
    printWindow.document.write("<html><head><title>Print</title></head><body>");

    elementsToPrint.forEach((element) => {
      printWindow.document.write(element.outerHTML);
    });

    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();

    // Close the print window after printing
    printWindow.close();

    // Remove the "printOnly" class and reset the header visibility after printing
    elementsToPrint.forEach((element) => {
      element.classList.remove("printOnly");
    });
    if (header) {
      header.style.display = "block";
    }
  };

  return (
    <>
      <div
        id="FeeReceiptSection"
        style={{
          margin: "0 auto 1%",
          backgroundColor: "rgb(247, 247, 138)",
          width: "400px",
          padding: "8px 0px 2px 0px",
        }}
      >
        <div>
          <img
            src={logo}
            width={50}
            height={50}
            style={{ marginBottom: "-8px" }}
          />
          <h2
            style={{
              color: "#0084ff",
              fontSize: "22px",
              marginBottom: "0",
              marginTop: "0",
            }}
          >
            Vishal Digital University, Aligarh
          </h2>
          <h2 style={{ fontSize: "20px" }}>Fee Receipt</h2>
          <div style={{ margin: "0" }}>
            <p
              style={{
                margin: "0 0 10px 0",
                textDecoration: "underline",
                color: "#000",
                fontSize: "17px",
              }}
            >
              Payment Details:
            </p>
            <p style={{ margin: "2px", color: "#000" }}>
              Student ID:{" "}
              <span style={{ color: "#000", fontWeight: "500" }}>
                {studentId}
              </span>
            </p>
            <p style={{ margin: "2px", color: "#000" }}>
              Payment Amount:{" "}
              <span style={{ color: "#000", fontWeight: "500" }}>{amount}</span>
            </p>
            <p style={{ margin: "2px", color: "#000" }}>
              Payment Method:{" "}
              <span style={{ color: "#000", fontWeight: "500" }}>
                {paymentMethod}
              </span>
            </p>
            <p style={{ margin: "5px", color: "#000" }}>
              Payment status:{" "}
              <span
                style={{ color: "green", fontSize: "18px", fontWeight: "600" }}
              >
                PAID
              </span>
            </p>
            <div
              style={{ display: "flex", marginLeft: "20px", marginTop: "10px" }}
            >
              <p style={{ color: "#000" }}>
                Date: {currentDate}/{currentMonth + 1}/{currentYear}
              </p>
              <p
                style={{
                  margin: "-15px 0px 0px 34%",
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Signature: <img src={sign} width={60} height={30} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "3%" }}>
        {/* ... Download fee receipt as pdf ... */}
        <button
          onClick={handleDownloadFeeReceipt}
          style={{
            padding: "12px 15px",
            color: "#fff",
            backgroundColor: "#009688",
            border: "none",
            borderRadius: "5px",
            fontSize: "15px",
          }}
        >
          Download Fee Receipt (PDF)
        </button>
        <button
          onClick={handlePrintFeeReceipt}
          style={{
            padding: "12px 15px",
            color: "#fff",
            backgroundColor: "rgb(250, 66, 66)",
            border: "none",
            borderRadius: "5px",
            fontSize: "15px",
            marginLeft: "25px",
          }}
        >
          Print Fee Receipt
        </button>
      </div>
    </>
  );
}

FeeReceipt.propTypes = {
  studentId: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  paymentMethod: PropTypes.string.isRequired,
};

export default FeeReceipt;
