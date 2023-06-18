import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import theme from "@src/theme/theme";

export default function Footer() {
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        height: '120px',
        width: '100%',
        paddingHorizontal: '24px',
        paddingVertical: '24px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Text
        variant="body2"
      >
        Feito por Samuel Piasecki
      </Text>
    </Box>
  )
}
