import { FC } from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'

interface DialogProps {

}

interface DialogRootProps {

}

const DialogRoot: FC<DialogRootProps> = ({}) => {
    return (
        <RadixDialog.Root>
        </RadixDialog.Root>
    )
}

const Dialog: FC<DialogProps> = ({}) => {
    return (
        <RadixDialog.Root>
            <RadixDialog.Trigger asChild/>
            <RadixDialog.Portal>
                <RadixDialog.Overlay />
                <RadixDialog.Content>
                    <RadixDialog.Title />
                    <RadixDialog.Description />
                    <RadixDialog.Close />
                </RadixDialog.Content>
            </RadixDialog.Portal>
        </RadixDialog.Root>
    )
}

export default Dialog
