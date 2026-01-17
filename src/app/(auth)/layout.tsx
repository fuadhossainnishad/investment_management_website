// app/auth/layout.tsx

import Image from "next/image";
import AuthDynamicContent from "./_components/AuthDynamicContent";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen flex flex-col md:flex-row">
            {/* Left: Handled by client component for dynamic updates */}
            <AuthDynamicContent>{children}</AuthDynamicContent>

        </main>
    );
}