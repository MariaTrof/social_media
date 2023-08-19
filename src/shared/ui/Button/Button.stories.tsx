import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss';
import './Button.module.scss';

const meta = {
    title: 'shared/Button',
    component: Button,
    // tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' },
        color: { control: 'color' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};
export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};
