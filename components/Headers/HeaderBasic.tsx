import NextLink from 'next/link'
import { VanaLogo, Box, Flex, Text, TextVariant } from 'components'
import { tw, apply } from 'twind'

// Pick<TextVariant,
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
  <Flex className={tw('flex-col items-center justify-center gap-1.5')}>
    <NextLink passHref href={logoLink}>
      <Box as="a" className={tw('grow-0 p-1 rounded-md text-slate-900')}>
        <VanaLogo
          className={tw('rounded-md bg-orange-500 h-[42px] w-[42px]')}
        />
      </Box>
    </NextLink>
    {/* titleLarge */}
    <Text
      as="h1"
      variant="title"
      weight="black"
      className={tw('text-white-900')}
    >
      {heading}
    </Text>
    <Text
      as="h2"
      variant={subheadingVariant}
      weight="bold"
      className={tw('text-blueGray-600')}
    >
      {subheading}
    </Text>
  </Flex>
)

export { HeaderBasic }
