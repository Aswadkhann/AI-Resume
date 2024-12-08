import React from "react";
import { ResumeDataType } from "../../../../../types/resume.type";
import { INITIAL_THEME_COLOR } from "@/lib/helper";
import { SkeletonLoader } from "./PersonalInfo";
type Props = {
	resumeInfo: ResumeDataType | undefined;
	isLoading: boolean;
};

const ExperiencePreview = ({ resumeInfo, isLoading }: Props) => {
	const themeColor = resumeInfo?.themeColor || INITIAL_THEME_COLOR;

	if (isLoading) {
		return <SkeletonLoader />;
	}
	return (
		<div className="w-full my-5">
			<h5
				className="text-center font-bold mb-2"
				style={{
					color: themeColor,
				}}
			>
				Personal Experience
			</h5>
			<hr
				className=" border-[1.5px] my-2"
				style={{
					borderColor: themeColor,
				}}
			/>
			<div className="flex flex-col gap-2 min-h-9">
				{resumeInfo?.experiences?.map((experience, index) => (
					<div key={index}>
						<h5
							className="text-[15px] font-bold"
							style={{
								borderColor: themeColor,
							}}
						>
							{experience.title}
						</h5>
						<div className=" flex items-start justify-between  mb-2">
							<h5 className=" text-[13px]">
								{experience?.companyName}
								{experience?.companyName && experience?.city && ","}
								{experience?.city}
								{experience?.city && experience?.state && ","}
								{experience?.state}
							</h5>
							<span className="text-[13px]">
								{experience?.startDate}
								{experience?.startDate && "-"}
								{experience?.currentlyWorking ? "Present" : experience?.endDate}
							</span>
						</div>
						<div
							style={{
								fontSize: "13px",
							}}
							className="exp-preview  leading-[14.6px] !text-black dark:!text-white"
							dangerouslySetInnerHTML={{
								__html: experience?.workSummary || "",
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExperiencePreview;