import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarRoot = styled(Avatar.Root, {
    borderRadius: '$full',
    overflow: 'hidden',
    width: '$12',
    height: '$12',
    display: 'inline-block'
})

export const AvatarImage = styled(Avatar.Image, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit'
})


export const AvatarFallback = styled(Avatar.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$gray600',
    color: '$gray800',

    svg: {
        width: '$6',
        height: '$6',
        color: '$white'
    }
})