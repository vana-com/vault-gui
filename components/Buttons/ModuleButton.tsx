import { Button, ButtonProps, VaultDataLogo } from 'components'
import { CarbonSecurity } from 'components/Icons'
import NextLink from 'next/link'
import { useState } from 'react'
import tw from 'twin.macro'

type Props = ButtonProps & {
  name: string
  isLarge?: boolean
  isStored?: boolean
}

const largeStyle = {
  height: '100%',
  width: '100%',
  borderRadius: '1',
  outline: 'white solid 1px',
}

const ModuleButton = ({ name, isLarge, isStored }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const link = isStored
    ? `/${name.toLowerCase()}`
    : `/store/${name.toLowerCase()}`

  return (
    <NextLink passHref href={link}>
      <Button
        size="lg"
        // variant="orange"
        style={
          isLarge
            ? largeStyle
            : {
                flex: '1',
              }
        }
        prefix={<VaultDataLogo name={name} />}
        isLoading={isLoading}
        onClick={() => {
          setIsLoading(true)
        }}
      >
        {isLarge && (
          <div tw="absolute top-3 right-3 text-white">
            <CarbonSecurity />
          </div>
        )}
        {name}
      </Button>
    </NextLink>
  )
}

export { ModuleButton }
