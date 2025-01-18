import { ScriptProps } from "next/script";


export default function RightPanel({children}: ScriptProps) {
    return(
        <div className="inline-block flex-1 align-top grow pl-2">
            {children}
        </div>
    );
}