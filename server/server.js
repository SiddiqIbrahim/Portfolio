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

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hakkim Portfolio API is running.",
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

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

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    await transporter.sendMail({
      from: `"Hakkim Portfolio" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: cleanEmail,
      subject: `New Portfolio Message — ${cleanSubject}`,

      text: `
HAKKIM PORTFOLIO

NEW MESSAGE RECEIVED

Received via Portfolio Contact Form.

Name:
${cleanName}

Email:
${cleanEmail}

Subject:
${cleanSubject}

Message:
${cleanMessage}

----------------------------------------

© 2026 Hakkim Portfolio.
All rights reserved.
      `.trim(),

      html: `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <meta
    http-equiv="X-UA-Compatible"
    content="IE=edge"
  />

  <title>Hakkim Portfolio</title>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f5f7f9;
    font-family:Arial,Helvetica,sans-serif;
    color:#18212f;
  "
>
  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="
      width:100%;
      margin:0;
      padding:0;
      background:#f5f7f9;
    "
  >
    <tr>
      <td
        align="center"
        style="padding:40px 15px;"
      >

        <table
          width="650"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            width:100%;
            max-width:650px;
            background:#ffffff;
            border:1px solid #dfe4e8;
            border-radius:16px;
            overflow:hidden;
          "
        >

          <tr>
            <td
              style="
                height:4px;
                background:#39ff14;
                font-size:0;
                line-height:0;
              "
            >
              &nbsp;
            </td>
          </tr>

          <tr>
            <td
              style="
                padding:28px 30px 24px;
                background:#ffffff;
                border-bottom:1px solid #e6eaee;
              "
            >

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >
                <tr>

                  <td
                    width="58"
                    valign="middle"
                    style="
                      width:58px;
                      padding-right:14px;
                    "
                  >
                    <img
                      src="https://hakkimappas-portfolio.vercel.app/h-logo.png"
                      alt="Hakkim Logo"
                      width="52"
                      height="52"
                      style="
                        display:block;
                        width:52px;
                        height:52px;
                        object-fit:contain;
                        border:0;
                        outline:none;
                        text-decoration:none;
                      "
                    />
                  </td>

                  <td valign="middle">

                    <div
                      style="
                        color:#111827;
                        font-size:22px;
                        line-height:26px;
                        font-weight:900;
                        letter-spacing:1px;
                      "
                    >
                      HAKKIM
                    </div>

                    <div
                      style="
                        margin-top:5px;
                        color:#229b32;
                        font-size:9px;
                        line-height:12px;
                        font-weight:700;
                        letter-spacing:3px;
                      "
                    >
                      ─ PORTFOLIO ─
                    </div>

                  </td>

                </tr>
              </table>

            </td>
          </tr>

          <tr>
            <td
              style="
                padding:32px 30px 30px;
                background:#ffffff;
              "
            >

              <table
                cellpadding="0"
                cellspacing="0"
                border="0"
              >
                <tr>
                  <td
                    style="
                      padding:7px 11px;
                      background:#f0f9ef;
                      border:1px solid #cfe9cc;
                      border-radius:20px;
                      color:#258b30;
                      font-size:10px;
                      line-height:12px;
                      font-weight:700;
                      letter-spacing:1px;
                    "
                  >
                    ● NEW MESSAGE
                  </td>
                </tr>
              </table>

              <h1
                style="
                  margin:20px 0 8px;
                  padding:0;
                  color:#172033;
                  font-size:28px;
                  line-height:34px;
                  font-weight:800;
                  letter-spacing:-0.5px;
                "
              >
                New Contact Message
              </h1>

              <p
                style="
                  margin:0 0 28px;
                  padding:0;
                  color:#7b8491;
                  font-size:14px;
                  line-height:22px;
                "
              >
                Someone has contacted you through
                your portfolio website.
              </p>

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  width:100%;
                  background:#f8fafb;
                  border:1px solid #dfe4e9;
                  border-radius:12px;
                "
              >

                <tr>
                  <td
                    style="
                      padding:17px 18px;
                      border-bottom:1px solid #e5e9ed;
                    "
                  >
                    <div
                      style="
                        color:#697586;
                        font-size:9px;
                        line-height:12px;
                        font-weight:700;
                        letter-spacing:1.5px;
                        text-transform:uppercase;
                      "
                    >
                      Name
                    </div>

                    <div
                      style="
                        margin-top:6px;
                        color:#172033;
                        font-size:15px;
                        line-height:20px;
                        font-weight:600;
                      "
                    >
                      ${escapeHtml(cleanName)}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:17px 18px;
                      border-bottom:1px solid #e5e9ed;
                    "
                  >
                    <div
                      style="
                        color:#697586;
                        font-size:9px;
                        line-height:12px;
                        font-weight:700;
                        letter-spacing:1.5px;
                        text-transform:uppercase;
                      "
                    >
                      Email Address
                    </div>

                    <div
                      style="
                        margin-top:6px;
                        font-size:15px;
                        line-height:20px;
                      "
                    >
                      <a
                        href="mailto:${escapeHtml(cleanEmail)}"
                        style="
                          color:#1685ad;
                          text-decoration:none;
                        "
                      >
                        ${escapeHtml(cleanEmail)}
                      </a>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:17px 18px;
                    "
                  >
                    <div
                      style="
                        color:#697586;
                        font-size:9px;
                        line-height:12px;
                        font-weight:700;
                        letter-spacing:1.5px;
                        text-transform:uppercase;
                      "
                    >
                      Subject
                    </div>

                    <div
                      style="
                        margin-top:6px;
                        color:#172033;
                        font-size:15px;
                        line-height:20px;
                        font-weight:600;
                      "
                    >
                      ${escapeHtml(cleanSubject)}
                    </div>
                  </td>
                </tr>

              </table>

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="margin-top:24px;"
              >
                <tr>
                  <td>

                    <div
                      style="
                        color:#697586;
                        font-size:10px;
                        line-height:14px;
                        font-weight:800;
                        letter-spacing:1.8px;
                        text-transform:uppercase;
                      "
                    >
                      Message
                    </div>

                    <div
                      style="
                        width:36px;
                        height:2px;
                        margin-top:7px;
                        background:#39ff14;
                      "
                    >
                      &nbsp;
                    </div>

                  </td>
                </tr>
              </table>

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  width:100%;
                  margin-top:14px;
                  background:#ffffff;
                  border:1px solid #dfe4e9;
                  border-left:3px solid #39ff14;
                  border-radius:10px;
                "
              >
                <tr>
                  <td
                    style="
                      padding:20px;
                      color:#303b4b;
                      font-size:14px;
                      line-height:24px;
                      word-break:break-word;
                    "
                  >
                    ${escapeHtml(cleanMessage).replace(
                      /\n/g,
                      "<br />"
                    )}
                  </td>
                </tr>
              </table>

              <table
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="margin-top:26px;"
              >
                <tr>
                  <td
                    style="
                      border-radius:8px;
                      background:#39ff14;
                    "
                  >
                    <a
                      href="mailto:${escapeHtml(cleanEmail)}"
                      style="
                        display:inline-block;
                        padding:12px 20px;
                        color:#062006;
                        font-size:12px;
                        line-height:16px;
                        font-weight:800;
                        letter-spacing:.5px;
                        text-decoration:none;
                      "
                    >
                      REPLY TO
                      ${escapeHtml(cleanName.toUpperCase())}
                      →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <tr>
            <td
              style="
                padding:0 30px;
                background:#ffffff;
              "
            >
              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >
                <tr>
                  <td
                    style="
                      height:1px;
                      background:#e3e7eb;
                      font-size:0;
                      line-height:0;
                    "
                  >
                    &nbsp;
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td
              align="center"
              style="
                padding:25px 30px 28px;
                background:#f8fafb;
              "
            >

              <div
                style="
                  color:#273142;
                  font-size:13px;
                  line-height:18px;
                  font-weight:800;
                  letter-spacing:2px;
                "
              >
                HAKKIM APPAS MANTHIRI M
              </div>

              <div
                style="
                  margin-top:7px;
                  color:#229b32;
                  font-size:8px;
                  line-height:12px;
                  font-weight:700;
                  letter-spacing:2px;
                "
              >
                FULL STACK DEVELOPER
              </div>

              <div
                style="
                  margin-top:18px;
                  color:#687385;
                  font-size:10px;
                  line-height:16px;
                "
              >
                © 2026 Hakkim Portfolio.
                All rights reserved.
              </div>

              <div
                style="
                  margin-top:5px;
                  color:#9aa3af;
                  font-size:9px;
                  line-height:14px;
                "
              >
                This message was sent through
                the Hakkim Portfolio contact form.
              </div>

            </td>
          </tr>

          <tr>
            <td
              style="
                height:2px;
                background:#39ff14;
                font-size:0;
                line-height:0;
              "
            >
              &nbsp;
            </td>
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
      message:
        "Message sent successfully! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact email error:", error);

    return res.status(500).json({
      success: false,
      message:
        "Unable to send your message. Please try again later.",
    });
  }
});

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});