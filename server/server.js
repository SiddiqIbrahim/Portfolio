
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("SMTP connection failed:", error.message);
  } else {
    console.log("SMTP server is ready.");
  }
});

// Home route
app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Siddiq Portfolio API is running.",
  });
});

// Contact form route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (!process.env.SMTP_USER || !process.env.CONTACT_RECEIVER) {
      return res.status(500).json({
        success: false,
        message: "Email service is not configured.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeSubject = escapeHtml(cleanSubject);
    const safeMessage = escapeHtml(cleanMessage).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: `"Siddiq Portfolio" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: cleanEmail,
      subject: `New Portfolio Message - ${cleanSubject}`,

      text: `
SIDDIQ PORTFOLIO

NEW MESSAGE RECEIVED

Name: ${cleanName}
Email: ${cleanEmail}
Subject: ${cleanSubject}

Message:
${cleanMessage}

----------------------------------------
© ${new Date().getFullYear()} Siddiq Portfolio.
All rights reserved.
      `.trim(),

      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Siddiq Portfolio</title>
</head>

<body style="
  margin:0;
  padding:0;
  background:#eef6ff;
  font-family:Arial,Helvetica,sans-serif;
  color:#18212f;
">

  <table width="100%" cellpadding="0" cellspacing="0"
    style="background:#eef6ff;padding:35px 12px;">

    <tr>
      <td align="center">

        <table width="650" cellpadding="0" cellspacing="0"
          style="
            width:100%;
            max-width:650px;
            background:#ffffff;
            border:1px solid #d7e8fb;
            border-radius:16px;
            overflow:hidden;
          ">

          <!-- Electric Blue top border -->
          <tr>
            <td style="
              height:5px;
              background:#008cff;
              font-size:0;
            ">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="
              padding:28px 30px;
              border-bottom:1px solid #e3effb;
            ">

              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="
                      width:52px;
                      height:52px;
                      border-radius:14px;
                      background:#007bff;
                      color:#ffffff;
                      text-align:center;
                      font-size:30px;
                      line-height:52px;
                      font-weight:900;
                    ">S</div>
                  </td>

                  <td style="padding-left:14px;">
                    <div style="
                      color:#111827;
                      font-size:22px;
                      font-weight:900;
                      letter-spacing:1px;
                    ">SIDDIQ</div>

                    <div style="
                      margin-top:5px;
                      color:#007bff;
                      font-size:9px;
                      font-weight:700;
                      letter-spacing:3px;
                    ">— PORTFOLIO —</div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Email content -->
          <tr>
            <td style="padding:32px 30px;">

              <span style="
                display:inline-block;
                padding:8px 12px;
                background:#eaf5ff;
                border:1px solid #c9e4ff;
                border-radius:20px;
                color:#006bd6;
                font-size:10px;
                font-weight:700;
                letter-spacing:1px;
              ">● NEW MESSAGE</span>

              <h1 style="
                margin:22px 0 8px;
                color:#172033;
                font-size:28px;
              ">New Contact Message</h1>

              <p style="
                margin:0 0 25px;
                color:#64748b;
                font-size:14px;
                line-height:22px;
              ">
                Someone has contacted you through your portfolio website.
              </p>

              <!-- Contact details -->
              <table width="100%" cellpadding="0" cellspacing="0"
                style="
                  background:#f7fbff;
                  border:1px solid #dbeafe;
                  border-radius:12px;
                ">

                <tr>
                  <td style="
                    padding:17px 18px;
                    border-bottom:1px solid #e1edf9;
                  ">
                    <div style="
                      color:#64748b;
                      font-size:10px;
                      font-weight:700;
                      letter-spacing:1.5px;
                    ">NAME</div>

                    <div style="
                      margin-top:7px;
                      color:#172033;
                      font-size:15px;
                      font-weight:600;
                    ">${safeName}</div>
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:17px 18px;
                    border-bottom:1px solid #e1edf9;
                  ">
                    <div style="
                      color:#64748b;
                      font-size:10px;
                      font-weight:700;
                      letter-spacing:1.5px;
                    ">EMAIL ADDRESS</div>

                    <div style="margin-top:7px;font-size:15px;">
                      <a href="mailto:${safeEmail}"
                        style="color:#007bff;text-decoration:none;">
                        ${safeEmail}
                      </a>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style="padding:17px 18px;">
                    <div style="
                      color:#64748b;
                      font-size:10px;
                      font-weight:700;
                      letter-spacing:1.5px;
                    ">SUBJECT</div>

                    <div style="
                      margin-top:7px;
                      color:#172033;
                      font-size:15px;
                      font-weight:600;
                    ">${safeSubject}</div>
                  </td>
                </tr>

              </table>

              <!-- Message section -->
              <h3 style="
                margin:25px 0 8px;
                color:#64748b;
                font-size:11px;
                letter-spacing:2px;
              ">MESSAGE</h3>

              <div style="
                width:38px;
                height:3px;
                background:#008cff;
                margin-bottom:15px;
              "></div>

              <table width="100%" cellpadding="0" cellspacing="0"
                style="
                  background:#ffffff;
                  border:1px solid #dbeafe;
                  border-left:4px solid #008cff;
                  border-radius:10px;
                ">
                <tr>
                  <td style="
                    padding:20px;
                    color:#303b4b;
                    font-size:14px;
                    line-height:24px;
                    word-break:break-word;
                  ">${safeMessage}</td>
                </tr>
              </table>

              <!-- Reply button -->
              <table cellpadding="0" cellspacing="0"
                style="margin-top:25px;">
                <tr>
                  <td style="
                    background:#007bff;
                    border-radius:8px;
                  ">
                    <a href="mailto:${safeEmail}"
                      style="
                        display:inline-block;
                        padding:13px 20px;
                        color:#ffffff;
                        font-size:12px;
                        font-weight:800;
                        text-decoration:none;
                        letter-spacing:.5px;
                      ">
                      REPLY TO ${safeName.toUpperCase()} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="
              padding:27px 20px;
              background:#f7fbff;
              border-top:1px solid #e3edf8;
            ">

              <div style="
                color:#273142;
                font-size:14px;
                font-weight:800;
                letter-spacing:2px;
              ">SIDDIQ</div>

              <div style="
                margin-top:8px;
                color:#007bff;
                font-size:9px;
                font-weight:700;
                letter-spacing:2px;
              ">FULL STACK DEVELOPER</div>

              <div style="
                margin-top:18px;
                color:#687385;
                font-size:10px;
                line-height:16px;
              ">
                © ${new Date().getFullYear()} Siddiq Portfolio.
                All rights reserved.
              </div>

              <div style="
                margin-top:6px;
                color:#94a3b8;
                font-size:10px;
              ">
                Sent through Siddiq's portfolio contact form.
              </div>

            </td>
          </tr>

          <!-- Bottom Electric Blue border -->
          <tr>
            <td style="
              height:4px;
              background:#008cff;
              font-size:0;
            ">&nbsp;</td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });

  } catch (error) {
    console.error("Contact email error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send your message. Please try again later.",
    });
  }
});

// Escape HTML to protect email template
function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Start server
app.listen(PORT, () => {
  console.log(`Siddiq Portfolio server running on port ${PORT}`);
});
