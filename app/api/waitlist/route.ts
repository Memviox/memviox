import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );

const resend = new Resend(process.env.RESEND_API_KEY!);

interface WaitlistPayload {
  email: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  submitted_at: string;
}

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { email, first_name, last_name, date_of_birth, submitted_at } = body as WaitlistPayload;

//     if (!email || !first_name || !last_name || !date_of_birth || !submitted_at) {     
//       return NextResponse.json(
//         { error: "All fields are required." },
//         { status: 400 }
//       );
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { error: "Please enter a valid email address." },
//         { status: 400 }
//       );
//     }

//     const { data: existing, error: lookupError } = await supabase
//       .from("waitlist")
//       .select("id")
//       .eq("email", email.toLowerCase().trim())
//       .maybeSingle();

//     if (lookupError) {
//       return NextResponse.json(
//         { error: "Something went wrong. Please try again." },
//         { status: 500 }
//       );
//     }

//     if (existing) {
//       return NextResponse.json(
//         {
//           error: "already_exists",
//           message: "You're already on the Memviox waitlist! 🎉 We'll reach out when it's time.",
//         },
//         { status: 409 }
//       );
//     }

//     const { error: insertError } = await supabase.from("waitlist").insert({
//       email: email.toLowerCase().trim(),
//       first_name: first_name.trim(),
//       last_name: last_name.trim(),
//       date_of_birth,
//       submitted_at,
//     });

//     if (insertError) {
//       if (insertError.code === "23505") {
//         return NextResponse.json(
//           {
//             error: "already_exists",
//             message: "You're already on the Memviox waitlist! 🎉",
//           },
//           { status: 409 }
//         );
//       }
//       return NextResponse.json(
//         { error: "Failed to save your info. Please try again." },
//         { status: 500 }
//       );
//     }

//     await resend.emails.send({
//       from: "Memviox <hello@memviox.com>",
//       to: email.toLowerCase().trim(),
//       subject: "You're on the Memviox waitlist 🧠",
//       html: buildEmail(first_name.trim()),
//     });

//     return NextResponse.json(
//       { success: true, message: "You're on the list! Check your inbox." },
//       { status: 201 }
//     );
//   } catch (err) {
//     console.error("[Waitlist] Unexpected error:", err);
//     return NextResponse.json(
//       { error: "Internal server error." },
//       { status: 500 }
//     );
//   }

  
// }

export async function POST(req: NextRequest) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!supabaseUrl || !supabaseServiceRoleKey || !resendApiKey) {
      return NextResponse.json(
        { error: "Missing required environment variables." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
    const resend = new Resend(resendApiKey);

    const body = await req.json();
    const { email, first_name, last_name, date_of_birth, submitted_at } = body as WaitlistPayload;

    if (!email || !first_name || !last_name || !date_of_birth || !submitted_at) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { data: existing, error: lookupError } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", email.toLowerCase().trim())
      .maybeSingle();

    if (lookupError) {
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    if (existing) {
      return NextResponse.json(
        {
          error: "already_exists",
          message: "You're already on the Memviox waitlist! 🎉 We'll reach out when it's time.",
        },
        { status: 409 }
      );
    }

    const { error: insertError } = await supabase.from("waitlist").insert({
      email: email.toLowerCase().trim(),
      first_name: first_name.trim(),
      last_name: last_name.trim(),
      date_of_birth,
      submitted_at,
    });

    if (insertError) {
      if (insertError.code === "23505") {
        return NextResponse.json(
          {
            error: "already_exists",
            message: "You're already on the Memviox waitlist! 🎉",
          },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: "Failed to save your info. Please try again." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Memviox <hello@memviox.com>",
      to: email.toLowerCase().trim(),
      subject: "You're on the Memviox waitlist 🧠",
      html: buildEmail(first_name.trim()),
    });

    return NextResponse.json(
      { success: true, message: "You're on the list! Check your inbox." },
      { status: 201 }
    );
  } catch (err) {
    console.error("[Waitlist] Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

function buildEmail(firstName: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>You're on the Memviox Waitlist</title>
    </head>
    <body style="margin:0;padding:0;background-color:rgb(24,20,21);font-family:'Segoe UI',Arial,sans-serif;">

      <table width="100%" cellpadding="0" cellspacing="0" style="background:rgb(24,20,21);padding:40px 16px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

              <!-- HEADER -->
              <tr>
                <td style="padding-bottom:32px;text-align:center;">
                  <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                    <tr>
                      <td style="
                        background:rgb(31,25,27);
                        border-radius:50%;
                        width:52px;height:52px;
                        text-align:center;
                        vertical-align:middle;
                        box-shadow:0.02rem 0.02rem 0.4rem rgba(255,255,255,0.15);
                      ">
                        <span style="color:rgb(255,255,255);font-size:22px;font-weight:800;line-height:52px;">M</span>
                      </td>
                      <td style="padding-left:14px;vertical-align:middle;">
                        <span style="color:rgb(255,255,255);font-size:22px;font-weight:700;letter-spacing:-0.3px;">Memviox</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- HERO CARD -->
              <tr>
                <td style="
                  background:rgb(31,25,27);
                  border-radius:8px;
                  padding:40px 36px;
                  text-align:center;
                  box-shadow:0.02rem 0.02rem 0.4rem rgba(255,255,255,0.08);
                ">
                  <p style="margin:0 0 10px;color:rgb(209,209,209);font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">
                    Early Access
                  </p>
                  <h1 style="margin:0 0 16px;color:rgb(255,255,255);font-size:28px;font-weight:700;line-height:1.2;text-shadow:0.02rem 0.02rem 0.08rem white;">
                    You're in, ${firstName}.
                  </h1>
                  <p style="margin:0;color:rgb(209,209,209);font-size:15px;line-height:1.75;max-width:420px;margin:0 auto;">
                    You've claimed your spot on the Memviox waitlist. We're building the AI workspace that actually remembers you — and you'll be first through the door.
                  </p>
                </td>
              </tr>

              <!-- SPACER -->
              <tr><td style="height:16px;"></td></tr>

              <!-- CARDS GRID ROW 1 -->
              <tr>
                <td>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <!-- Card 1 -->
                      <td width="48%" style="
                        background:rgb(31,25,27);
                        border-radius:8px;
                        padding:20px;
                        box-shadow:0.02rem 0.02rem 0.08rem rgba(255,255,255,0.08);
                        vertical-align:top;
                      ">
                        <p style="margin:0 0 6px;color:rgb(255,255,255);font-size:15px;font-weight:600;text-shadow:0.02rem 0.02rem 0.08rem white;">
                          Multi-model chat
                        </p>
                        <p style="margin:0;color:rgb(209,209,209);font-size:13px;line-height:1.6;">
                          Route prompts to the best model for each task — not just one model for everything.
                        </p>
                      </td>
                      <td width="4%"></td>
                      <!-- Card 2 -->
                      <td width="48%" style="
                        background:rgb(31,25,27);
                        border-radius:8px;
                        padding:20px;
                        box-shadow:0.02rem 0.02rem 0.08rem rgba(255,255,255,0.08);
                        vertical-align:top;
                      ">
                        <p style="margin:0 0 6px;color:rgb(255,255,255);font-size:15px;font-weight:600;text-shadow:0.02rem 0.02rem 0.08rem white;">
                          Rare memory
                        </p>
                        <p style="margin:0;color:rgb(209,209,209);font-size:13px;line-height:1.6;">
                          Save what matters, ignore what doesn't. Context that compounds over time.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- SPACER -->
              <tr><td style="height:12px;"></td></tr>

              <!-- CARDS GRID ROW 2 -->
              <tr>
                <td>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <!-- Card 3 -->
                      <td width="48%" style="
                        background:rgb(31,25,27);
                        border-radius:8px;
                        padding:20px;
                        box-shadow:0.02rem 0.02rem 0.08rem rgba(255,255,255,0.08);
                        vertical-align:top;
                      ">
                        <p style="margin:0 0 6px;color:rgb(255,255,255);font-size:15px;font-weight:600;text-shadow:0.02rem 0.02rem 0.08rem white;">
                          Tool use
                        </p>
                        <p style="margin:0;color:rgb(209,209,209);font-size:13px;line-height:1.6;">
                          Expand what AI can do with actions, utilities, and external workflows.
                        </p>
                      </td>
                      <td width="4%"></td>
                      <!-- Card 4 -->
                      <td width="48%" style="
                        background:rgb(31,25,27);
                        border-radius:8px;
                        padding:20px;
                        box-shadow:0.02rem 0.02rem 0.08rem rgba(255,255,255,0.08);
                        vertical-align:top;
                      ">
                        <p style="margin:0 0 6px;color:rgb(255,255,255);font-size:15px;font-weight:600;text-shadow:0.02rem 0.02rem 0.08rem white;">
                          Agents
                        </p>
                        <p style="margin:0;color:rgb(209,209,209);font-size:13px;line-height:1.6;">
                          Move from chat into systems that can help execute tasks on your behalf.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- SPACER -->
              <tr><td style="height:16px;"></td></tr>

              <!-- CTA CARD -->
              <tr>
                <td style="
                  background:rgb(31,25,27);
                  border-radius:8px;
                  padding:32px 36px;
                  text-align:center;
                  box-shadow:0.02rem 0.02rem 0.08rem rgba(255,255,255,0.08);
                ">
                  <p style="margin:0 0 20px;color:rgb(209,209,209);font-size:14px;line-height:1.7;">
                    We'll notify you the moment we launch. Early access members get priority spots and first look at everything we ship.
                  </p>
                  <a href="https://memviox.com" style="
                    display:inline-block;
                    background:rgb(255,255,255);
                    color:rgb(24,20,21);
                    text-decoration:none;
                    padding:13px 32px;
                    border-radius:8px;
                    font-size:14px;
                    font-weight:700;
                    letter-spacing:0.2px;
                  ">
                    Visit Memviox →
                  </a>
                </td>
              </tr>

              <!-- SPACER -->
              <tr><td style="height:32px;"></td></tr>

              <!-- FOOTER -->
              <tr>
                <td style="text-align:center;">
                  <p style="margin:0 0 4px;color:rgb(209,209,209);font-size:12px;opacity:0.5;">
                    Memviox by CloudBrain.AI · Sacramento, CA
                  </p>
                  <p style="margin:0;color:rgb(209,209,209);font-size:12px;opacity:0.4;">
                    You're receiving this because you signed up at memviox.com
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>

    </body>
    </html>
  `.trim();
}