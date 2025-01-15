import { ScriptProps } from "next/script";


export default function PageWrapper({children}: ScriptProps) {
    return(
        <div id="page-wrapper">
            <div className="container document-container pages" style={{height: '1100px !important'}}>
                <div className="page page-1" style={{height: '1100px !important', overflow: 'hidden'}}>
                    <div className="page-content" style={{marginLeft: '35px', marginRight: '35px', height: '1085px'}}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}