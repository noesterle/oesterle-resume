import { ScriptProps } from "next/script";


export default function RightPanel({children}: ScriptProps) {
    return(
        // <div className="section-4 fill col-md-8" style={{height: '976px'}}>
        <div className="inline-block flex-1 align-top grow pl-3">
            {children}
        </div>
    );
}