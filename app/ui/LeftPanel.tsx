import { ScriptProps } from "next/script";


export default function LeftPanel({children}: ScriptProps) {
    return(
        // <div className="section-3 fill col-md-4">
        <div className="inline-block flex-1 w-1/2 align-top grow pr-2">
            {children}
        </div>
    );
}