# Vana design system

## Styles and theming using [twin.macro](https://github.com/ben-rogerson/twin.macro),  [Tailwind](https://tailwindcss.com/docs/installation) & [Emotion](https://emotion.sh/docs/introduction)

Using twin.macro for styling our components and any HTML we might use. Twin.macro is a wrapper for piping Tailwind utility classes to Emotion. This enables us to use Tailwind as a styling API without losing out on the features that CSS-in-JS provides.

Read the twin.macro [Styled Component documentation](https://github.com/ben-rogerson/twin.macro/blob/master/docs/styled-component-guide.md) for more information.

Read here for an explanation of [why we are using CSS in Javascript](https://www.merriam-webster.com/dictionary/work%20in%20progress).

## UI Primitive Components using [Radix UI](https://radix-ui.com/)

We are Using radix-ui for building compound interactive components. Why why why? Local component state management and accessibility completely taken care (otherwise it's hard, eg. 2000 hours!)

Because we have not chosen a third party interaction library that also handles our styling system (eg.  Chakra, MUI, Mantine, etc.), we are not restricted to any particulr UI interaction "primitives" library. This means we can use, for example, any Headless-UI as well as Radix-UI. But we're going to try and stick with Radix-UI because of it's excellent accessibility and local component state management.

### What does "headless UI" mean and whay are we using it?

Blah blah

## What is the 'system' directory?

### Why are there directories named 'Boxes'?
