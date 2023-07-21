import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: "Example text"

    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: "Example strong text",
        as: 'strong'
    }
}
