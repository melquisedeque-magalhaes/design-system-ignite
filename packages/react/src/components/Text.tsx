import { ComponentProps } from "@stitches/react";
import { styled } from "../styles";
import { ElementType } from "react";

export const Text = styled('p', {
    fontFamily: '$default',
    lineHeight: '$base',
    margin: '0',
    color: '$gray100',
    variants: {
        size: {
            xxs: { fontSize: '0.625rem' },
            xs: { fontSize: '0.75rem'  },
            sm: { fontSize:    '0.875rem'},
            md: {fontSize:  '1rem'},
            lg: {fontSize:  '1.125rem'},
            xl: { fontSize: '1.25rem' },
            '2xl': { fontSize: '1.5rem'},
            '4xl':{fontSize: '2rem' },
            '5xl': { fontSize:  '2.25rem' },
            '6xl': { fontSize: '3rem' },
            '7xl': { fontSize: '4rem' },
            '8xl': { fontSize:   '4.5rem' },
            '9xl': { fontSize: '6rem' }
        }
    },

    defaultVariants: {
        size: 'md'
    }
})

export interface TextProps extends ComponentProps<typeof Text> {
    as?: ElementType
}