import React from 'react';
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Button from "@src/components/Button/Button";
import { useTheme } from '@src/theme/ThemeProvider';


interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: '-228px',
        width: '100%',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingVertical: '40px',
        paddingHorizontal: '32px',

      }}
    >
      {children}
    </Box>
  )
}

Feed.Header = () => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        marginBottom: '24px',
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px'
        }}
      >
        <Image
          styleSheet={{
            width: { xs: '100px', md: '128px' },
            height: { xs: '100px', md: '128px' },
            borderRadius: '100%',
          }}
          src="https://github.com/SamuelPiasecki.png"
          alt="Imagem de perfil do Mario Souto"
        />
        <Box
          styleSheet={{
            justifyContent: 'space-between'
          }}
        >
          <Box styleSheet={{ flex: '1', justifyContent: 'space-between', display: { xs: 'none', md: 'flex' } }}>
            <Button fullWidth colorVariant='primary' size='xl' href='/'>Newsletter</Button>
            <Button fullWidth colorVariant='neutral' size='xl' href='/'>Buy me a coffee</Button>
          </Box>
          <Box styleSheet={{ flex: '1', justifyContent: 'space-between', display: { xs: 'flex', md: 'none' } }}>
            <Button fullWidth colorVariant='primary' size='xs' href='/'>Newsletter</Button>
            <Button fullWidth colorVariant='neutral' size='xs' href='/'>Buy me a coffee</Button>
          </Box>
        </Box>
      </Box>
      <Button.Base href="https://github.com/SamuelPiasecki">
        <Text tag="h1" variant='heading4'>
          Samuel Piasecki
        </Text>
      </Button.Base>
      <Text
        styleSheet={{
          color: theme.colors.neutral.x500
        }}
      >
        @samucapiasecki - Samuel Piasecki - Brasil <br />
        Frontend Developer
      </Text>
      <Box
        styleSheet={{
          flexDirection: 'row',
          gap: '14px',
          paddingVertical: '24px'
        }}
      >
        <Link href="https://www.linkedin.com/in/samuel-piasecki/">
          <Icon name="linkedin" />
        </Link>
        <Link href="https://www.instagram.com/samucapiasecki/">
          <Icon name="instagram" />
        </Link>
        <Link href="https://github.com/SamuelPiasecki">
          <Icon name="github" />
        </Link>
      </Box>
    </Box>
  )
}

Feed.Posts = () => {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  )
}
