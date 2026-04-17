import {
  Provider,
  defaultTheme,
  ActionButton,
  Button,
  Flex,
  View,
  Heading,
  Text,
  Divider,
  Badge,
  StatusLight,
  TextField,
  SearchField,
  Checkbox,
  Switch,
  ProgressBar,
  Meter,
  TagGroup,
  Item,
  ComboBox,
  Picker,
  DatePicker,
  Avatar,
  Well,
  InlineAlert
} from '@adobe/react-spectrum'
import { parseDate } from '@internationalized/date'
import { useState } from 'react'

const sections = ['Buttons', 'Forms', 'Status', 'Feedback', 'Pickers', 'Tags', 'Avatar']

export default function App() {
  const [checked, setChecked] = useState(false)
  const [switched, setSwitched] = useState(false)
  const [active, setActive] = useState('Buttons')

  const scrollTo = (id: string) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <View
        backgroundColor="gray-50"
        minHeight="100vh"
        width="100%"
        UNSAFE_style={{ margin: 0, padding: 0 }}>

        <Flex width="100%" UNSAFE_style={{ position: 'relative', alignItems: 'flex-start' }}>

          {/* Sidebar: native divs — React Spectrum View does not support onClick */}
          <View
            backgroundColor="gray-100"
            UNSAFE_style={{
              width: '220px',
              flexShrink: 0,
              position: 'sticky',
              top: 0,
              height: '100vh',
              overflowY: 'auto',
              zIndex: 2,
              boxSizing: 'border-box'
            }}
            padding="size-300"
            borderEndWidth="thin"
            borderEndColor="gray-300">
            <Heading level={4} marginBottom="size-300">Components</Heading>
            {sections.map(item => (
              <div
                key={item}
                role="button"
                tabIndex={0}
                onClick={() => scrollTo(item)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    scrollTo(item)
                  }
                }}
                style={{
                  cursor: 'pointer',
                  fontSize: 14,
                  marginBottom: 4,
                  padding: '8px 12px',
                  borderRadius: 4,
                  color: active === item ? '#0265dc' : '#444',
                  background: active === item ? '#e8f0fb' : 'transparent',
                  fontWeight: active === item ? 600 : 400,
                  transition: 'background 0.15s, color 0.15s',
                  outline: 'none'
                }}>
                {item}
              </div>
            ))}
          </View>

          {/* Main content — below sidebar in stacking order */}
          <View
            flex
            padding="size-500"
            UNSAFE_style={{ width: '100%', maxWidth: '100%', minWidth: 0, position: 'relative', zIndex: 1 }}>

            {/* Buttons */}
            <View id="Buttons" marginBottom="size-500" UNSAFE_style={{ scrollMarginTop: 16 }}>
              <Heading level={2} marginBottom="size-200">Buttons</Heading>
              <Well>
                <Flex gap="size-200" wrap>
                  <Button variant="accent" onPress={() => alert('Accent')}>Accent</Button>
                  <Button variant="primary" onPress={() => alert('Primary')}>Primary</Button>
                  <Button variant="secondary" onPress={() => alert('Secondary')}>Secondary</Button>
                  <Button variant="negative" onPress={() => alert('Destructive')}>Destructive</Button>
                  <Button variant="secondary" isDisabled>Disabled</Button>
                  <ActionButton onPress={() => alert('Action')}>Action</ActionButton>
                  <ActionButton isDisabled>Disabled Action</ActionButton>
                </Flex>
              </Well>
            </View>

            <Divider marginBottom="size-400" />

            {/* Forms */}
            <View id="Forms" marginBottom="size-500" UNSAFE_style={{ scrollMarginTop: 16 }}>
              <Heading level={2} marginBottom="size-200">Forms</Heading>
              <Well>
                <Flex gap="size-300" direction="column" maxWidth="size-3600">
                  <TextField label="Email" placeholder="engineer@adobe.com" />
                  <SearchField label="Search components" />
                  <Checkbox isSelected={checked} onChange={setChecked}>
                    Accept terms and conditions
                  </Checkbox>
                  <Switch isSelected={switched} onChange={setSwitched}>
                    Enable notifications
                  </Switch>
                </Flex>
              </Well>
            </View>

            <Divider marginBottom="size-400" />

            {/* Status */}
            <View id="Status" marginBottom="size-500" UNSAFE_style={{ scrollMarginTop: 16 }}>
              <Heading level={2} marginBottom="size-200">Status</Heading>
              <Well>
                <Flex gap="size-300" direction="column">
                  <ProgressBar label="Uploading assets" value={65} />
                  <Meter label="Storage used" value={72} variant="warning" />
                  <Flex gap="size-300" marginTop="size-200">
                    <StatusLight variant="positive">Published</StatusLight>
                    <StatusLight variant="notice">In review</StatusLight>
                    <StatusLight variant="negative">Failed</StatusLight>
                    <StatusLight variant="info">Scheduled</StatusLight>
                  </Flex>
                </Flex>
              </Well>
            </View>

            <Divider marginBottom="size-400" />

            {/* Feedback */}
            <View id="Feedback" marginBottom="size-500" UNSAFE_style={{ scrollMarginTop: 16 }}>
              <Heading level={2} marginBottom="size-200">Feedback</Heading>
              <Well>
                <Flex gap="size-300" direction="column">
                  <InlineAlert variant="info">
                    <Heading>New feature available</Heading>
                    <Text>AI-powered editing is now available in Photoshop.</Text>
                  </InlineAlert>
                  <InlineAlert variant="positive">
                    <Heading>Changes saved</Heading>
                    <Text>Your design has been published successfully.</Text>
                  </InlineAlert>
                  <InlineAlert variant="negative">
                    <Heading>Export failed</Heading>
                    <Text>Please check your file format and try again.</Text>
                  </InlineAlert>
                </Flex>
              </Well>
            </View>

            <Divider marginBottom="size-400" />

            {/* Pickers */}
            <View id="Pickers" marginBottom="size-500" UNSAFE_style={{ scrollMarginTop: 16 }}>
              <Heading level={2} marginBottom="size-200">Pickers</Heading>
              <Well>
                <Flex gap="size-300" wrap>
                  <Picker label="Product">
                    <Item key="photoshop">Photoshop</Item>
                    <Item key="illustrator">Illustrator</Item>
                    <Item key="acrobat">Acrobat</Item>
                    <Item key="express">Adobe Express</Item>
                  </Picker>
                  <ComboBox label="Search product">
                    <Item key="photoshop">Photoshop</Item>
                    <Item key="illustrator">Illustrator</Item>
                    <Item key="acrobat">Acrobat</Item>
                    <Item key="express">Adobe Express</Item>
                  </ComboBox>
                  <DatePicker
                    label="Launch date"
                    defaultValue={parseDate('2026-07-01')} />
                </Flex>
              </Well>
            </View>

            <Divider marginBottom="size-400" />

            {/* Tags */}
            <View id="Tags" marginBottom="size-500" UNSAFE_style={{ scrollMarginTop: 16 }}>
              <Heading level={2} marginBottom="size-200">Tags</Heading>
              <Well>
                <TagGroup
                  label="Adobe products"
                  items={[
                    { id: '1', name: 'Photoshop' },
                    { id: '2', name: 'Illustrator' },
                    { id: '3', name: 'Acrobat' },
                    { id: '4', name: 'Express' },
                    { id: '5', name: 'Experience Cloud' },
                  ]}>
                  {item => <Item key={item.id}>{item.name}</Item>}
                </TagGroup>
              </Well>
            </View>

            <Divider marginBottom="size-400" />

            {/* Avatar */}
            <View id="Avatar" marginBottom="size-500" UNSAFE_style={{ scrollMarginTop: 16 }}>
              <Heading level={2} marginBottom="size-200">Avatar</Heading>
              <Well>
                <Flex gap="size-300" alignItems="center">
                  <Avatar
                    src="https://i.imgur.com/kJOwAdv.png"
                    alt="Adobe engineer"
                    size="avatar-size-700" />
                  <Avatar
                    src="https://i.imgur.com/kJOwAdv.png"
                    alt="Adobe engineer"
                    size="avatar-size-500" />
                  <Avatar
                    src="https://i.imgur.com/kJOwAdv.png"
                    alt="Adobe engineer"
                    size="avatar-size-300" />
                  <Badge variant="info">8,000 engineers</Badge>
                </Flex>
              </Well>
            </View>

          </View>
        </Flex>
      </View>
    </Provider>
  )
}