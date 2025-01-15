import { ScriptProps } from "next/script";


export default function RightPanel({children}: ScriptProps) {
    return(
        // <div className="section-4 fill col-md-8" style={{height: '976px'}}>
        <div className="inline-block mx-2 flex-1">
            {children}
        </div>
    );
}