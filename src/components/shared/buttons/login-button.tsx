import React  from "react";
import {Button} from "@/components/ui";
import {cn} from "@/lib/utils";
import {ProfileForm} from "@/components/shared";

interface Props{
    className?: string;
}

export const LoginButton : React.FC<Props> = ({className}) => {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    return(
        <>
            <Button onClick={openDialog} className={''}>Log in</Button>

            {isDialogOpen &&
                <div className={'absolute'}>
                    <ProfileForm onClose={closeDialog}/>
                </div>
            }
        </>



    )
}