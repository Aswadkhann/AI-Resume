import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Header from "../_components/common/Header";

const MainLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const { isAuthenticated } = getKindeServerSession();
	const isUserAuthenticated = await isAuthenticated();

	if (!isUserAuthenticated) {
		redirect("/");
	}

	return (
		<div className="w-full h-auto min-h-screen !bg-customBackground dark:!bg-background">
			<Header />
			{children}
		</div>
	);
};

export default MainLayout;
