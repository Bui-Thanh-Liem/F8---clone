import { ICustomer } from "@/interfaces/models/customer.interface";
import { HeaderLayout } from "@/layouts/public/header/Header";
import { NavbarLayout } from "@/layouts/public/navbar/Navbar";
import { authOptions } from "@/lib/auth.nextAuth";
import { getServerSession } from "next-auth";
import { FooterLayout } from "@/layouts/public/footer/Footer";
import { getMe } from "@/services/auth.service";

export default async function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    let customerData: ICustomer | null = null;

    try {
        const sessionCustomer = await getServerSession(authOptions);

        if (sessionCustomer) {
            customerData = sessionCustomer.user as ICustomer;
        } else {
            const customer = await getMe();
            customerData = customer.data;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return (
        <div>
            <HeaderLayout user={customerData as ICustomer} />
            <div className="flex min-h-[60vh]">
                <div className="fixed left-0 top-16">
                    <NavbarLayout />
                </div>
                <div className="ms-32 pt-6 pr-8 w-full">{children}</div>
            </div>
            <FooterLayout />
        </div>
    );
}
