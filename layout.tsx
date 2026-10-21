import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "เซลล์: หน่วยพื้นฐานของชีวิต | Cytology",
  description: "สื่อการเรียนรู้ชีววิทยาเรื่องเซลล์ ทฤษฎีเซลล์ ออร์แกเนลล์ เยื่อหุ้มเซลล์ และแบบทดสอบ",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body>{children}</body></html>;
}