import NextLink from 'next/link'
import { VanaLogo, Text, TextVariant } from 'components'
import tw, { styled } from 'twin.macro'

// How can we use Pick<TextVariant on a type?
type SubheadingVariant = 'headingMeta' | 'heading' | 'subheading'
interface HeaderBasicProps {
  heading: string
  logoLink?: string
  subheading: string
  subheadingVariant?: SubheadingVariant
}

const HeaderBasic = ({
  heading,
  logoLink = '/vault',
  subheading,
  subheadingVariant = 'headingMeta',
}: HeaderBasicProps) => (
  <div tw="flex flex-col items-center justify-center gap-1.5">
    <NextLink passHref href={logoLink}>
      <a tw="grow-0 p-1 rounded-md text-slate-900">
        <VanaLogo boxSize="42px" tw="rounded-md bg-orange-500" />
      </a>
    </NextLink>
    {/* titleLarge */}
    <Text as="h1" variant="display" weight="black" color="label">
      {heading}
    </Text>
    <Text
      as="h2"
      variant={subheadingVariant}
      weight="bold"
      color="labelTertiary"
    >
      {subheading}
    </Text>
  </div>
)

export { HeaderBasic }
