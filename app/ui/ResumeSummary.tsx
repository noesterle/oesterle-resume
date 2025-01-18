import { Summary } from "@/data/types";

type SummaryProps = {
    summary: Summary
}

export default function ResumeSummary({ summary }: SummaryProps) {
    return(
        <div className="py-2">
            <span className="uppercase resume-header">Summary</span>
            <hr/>
            <div className="text-justify resume-desc">{summary}</div>
        </div>
    );
}