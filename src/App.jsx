import { useState } from 'react'
import './App.css'
import 'dracula-ui/styles/dracula-ui.css'
import { Paragraph , Avatar,Card} from 'dracula-ui'
function App() {

  return (
    <Card variant="subtle" color="yellow" p="md" m="md">
    <Paragraph color="white">Hello Vampire</Paragraph>
    <Avatar
  title="Count Dracula"
  src="https://ui.draculatheme.com/static/images/avatar.png"
/>
    </Card>
  )
}

export default App
