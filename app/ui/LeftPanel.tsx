import { ScriptProps } from "next/script";


export default function LeftPanel({children}: ScriptProps) {
    return(
        // <div className="section-3 fill col-md-4">
        <div className="inline-block mx-2 flex-1">
            {children}
        </div>
    );
}