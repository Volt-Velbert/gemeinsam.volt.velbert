import type {Metadata} from "next";
import {Ubuntu} from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

// If loading a variable font, you don't need to specify the font weight
const ubuntu = Ubuntu({weight: ["400", "500", "700"], subsets: ['latin'], variable: "--font-ubuntu"})

export const metadata: Metadata = {
    title: "Wir hören zu und gestalten Velbert",
    description: "Wir hören zu und wollen mit Ihnen gemeinsam Velbert zu einer besseren Stadt machen.",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return <html lang="en">
    <body className={`${ubuntu.className}`}>
    <Container>
        {children}
    </Container>
    </body>
    </html>

}
