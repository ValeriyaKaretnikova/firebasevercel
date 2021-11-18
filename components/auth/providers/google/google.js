import Image from "next/image";

import {ProviderButton} from 'components/ui/buttons';
import google from "./google.png";

function GoogleProvider({label, ...props}){

    //auth with Google
    return (
        <ProviderButton>
            <Image 
                src={google} 
                alt="google logo"
                layout="fixed"
                width={24}
                height={20}      
            />
            <span>{label || "sign up with google"}</span>
        </ProviderButton>
    )
}

export default GoogleProvider