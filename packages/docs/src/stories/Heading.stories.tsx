import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
    title: 'Typography/Heading',
    component: Heading,
    args: {
        children: "Custom Title"

    }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: "H1 Heading",
        as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrao o heading e um `h2`, mas podemos alterar passando a propriedade `as`'
            }
        }
    }
}
