import React  from "react";
import {Button} from "@/components/ui";
import {cn} from "@/lib/utils";
import {ProfileForm} from "@/components/shared";
import {useNavigate} from "react-router-dom";
import {LogIn} from "lucide-react";

interface Props{
    className?: string;
}

export const LoginButton : React.FC<Props> = ({className}) => {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    const onClose = ()=>{
        closeDialog();
    }

    return(
        <>
            <Button onClick={openDialog} className={''}> Log in</Button>

            {isDialogOpen &&
                <div className={'absolute'}>
                    <ProfileForm onClose={onClose}/>
                </div>
            }
        </>



    )
}