"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useResumeContext } from "../../../../context/resume-info-provider";
import PersonalInfo from "./prreview/PersonalInfo";
import SummaryPreview from "./prreview/SummaryPreview";
import ExperiencePreview from "./prreview/ExperiencePreview";
import EducationPreview from "./prreview/EducationPreview";
import SkillPreview from "./prreview/SkillPreview";

const ResumePreview = () => {
	const { resumeInfo, isLoading } = useResumeContext();

	return (
		<div
			id="resume-preview-id"
			className={cn(`
        shadow-lg bg-white w-full flex-[1.02]
        h-full p-10 !font-open-sans
        dark:border dark:bg-card 
        dark:border-b-gray-800 
        dark:border-x-gray-800
        `)}
			style={{
				borderTop: `13px solid ${resumeInfo?.themeColor}`,
			}}
		>
			{/* {Personnal Info} */}
			<PersonalInfo isLoading={isLoading} resumeInfo={resumeInfo} />

			{/* {Summary} */}
			<SummaryPreview isLoading={isLoading} resumeInfo={resumeInfo} />

			{/* {Professional Exp} */}
			<ExperiencePreview isLoading={isLoading} resumeInfo={resumeInfo} />

			{/* {Educational Info} */}
			<EducationPreview isLoading={isLoading} resumeInfo={resumeInfo} />

			{/* {Skills} */}
			<SkillPreview isLoading={isLoading} resumeInfo={resumeInfo} />
		</div>
	);
};

export default ResumePreview;
