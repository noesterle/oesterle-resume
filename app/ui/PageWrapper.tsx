import { ScriptProps } from "next/script";


export default function PageWrapper({children}: ScriptProps) {
    return(
        <div id="page-wrapper">
            <div className="mx-auto my-12 h-[1100px] w-[780px] bg-background border-[1px] border-gray-500 document-container pages">
                <div className="h-[1100px] overflow-hidden page page-1">
                    <div className="mx-[35px] h-[1085px] page-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}