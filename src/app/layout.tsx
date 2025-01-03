"use client"
import "./globals.css";
import {Container} from "@mui/material";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <Container maxWidth="lg">
                    {children}
                </Container>
            </body>
        </html>
    );
}
