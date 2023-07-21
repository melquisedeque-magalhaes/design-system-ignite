import { AvatarImage, AvatarRoot, AvatarFallback } from "./styles";
import { User } from '@phosphor-icons/react'
import { ComponentProps } from "@stitches/react";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
    return(
        <AvatarRoot>
            <AvatarImage {...props} />

            <AvatarFallback delayMs={600}>
                <User />
            </AvatarFallback>
        </AvatarRoot>
    )
}