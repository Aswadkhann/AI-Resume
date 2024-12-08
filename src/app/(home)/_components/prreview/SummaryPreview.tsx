import React from "react";
import { ResumeDataType } from "../../../../../types/resume.type";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
	resumeInfo: ResumeDataType | undefined;
	isLoading: boolean;
};

const SummaryPreview = ({ resumeInfo, isLoading }: Props) => {
	return (
		<div className="w-full min-h-10">
			{isLoading ? (
				<Skeleton className="h-6 w-full" />
			) : (
				<p className="text-[13px] !leading-4">
					{resumeInfo?.summary ||
						"Enter a brief summary about your professional experience"}
				</p>
			)}
		</div>
	);
};

export default SummaryPreview;
