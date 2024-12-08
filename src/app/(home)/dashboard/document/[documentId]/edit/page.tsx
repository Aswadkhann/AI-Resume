import React from "react";
import { ResumeInfoProvider } from "../../../../../../../context/resume-info-provider";
import EditResume from "@/app/(home)/_components/EditResume";

const Page = () => {
	return (
		<ResumeInfoProvider>
			<EditResume />
		</ResumeInfoProvider>
	);
};

export default Page;
