import { Summary } from "@/data/types";

type SummaryProps = {
    summary: Summary
}

export default function ResumeSummary({ summary }: SummaryProps) {
    return(
        <div className="py-2">
            <span className="text-2xl uppercase">Summary</span>
            <hr/>
            <span className="text-justify">{summary}</span>
        </div>
    );
}