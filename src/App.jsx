import { useState } from 'react'
import './App.css'
import 'dracula-ui/styles/dracula-ui.css'
import { Paragraph , Avatar,Card, Badge ,Divider,Text,Box,Switch} from 'dracula-ui'
function App() {

  return (
    <Box className='Card'>
  
    <Card variant="subtle"  color="purple" p="md" >
    <Switch id="purple" defaultChecked={false} color="purple" name="demo" />
    <label htmlFor="purple" className="drac-text drac-text-white">
      Vampire
    </label>
    <Paragraph color="white">Hello Cond </Paragraph>
    <Box className='Bio'>
    <Avatar
  title="Count Dracula"
  src="https://ui.draculatheme.com/static/images/avatar.png"
  borderVariant='large'
  color='purple'
  m='md'
></Avatar>
<Text>The quick vampire jumps over the lazy human</Text>
<Text>The quick vampire jumps over the lazy human</Text>

</Box>
  <Divider m='md' color="purple" />
    <Box className='BadgeArea'>
    <Badge m='sm'  color="animated">Human Killer</Badge>
    <Badge m='sm'  color="animated">Human Killer</Badge>
    <Badge m='sm'  color="animated">Human Killer</Badge>
    </Box>
    </Card>
    </Box>
  )
}

export default App
