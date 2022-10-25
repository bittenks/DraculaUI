import React, { Component } from 'react'
import 'dracula-ui/styles/dracula-ui.css'
import { Paragraph , Avatar,Card, Badge ,Divider,Text,Box,Switch,Anchor} from 'dracula-ui'
import { useEffect , useState} from 'react';
export default function Perfil() {
  
    var check = document.getElementById("purple"); 
    var [Name, setName] = useState("Select one 👆");
    var [imagem, setimagem] = useState("");
    var [bio, setbio] = useState("");
    var [bdg1, setbdg1] = useState("");
    var [bdg2, setbdg2] = useState("");
    var [bdg3, setbdg3] = useState("");
    useEffect(() => {
      document.title = "Dracula UI"
   }, []);
    return (
        <Box className='Cardw'>
        <Card variant="subtle"  color="purple" p="md" >
        <label htmlFor="purple" className="drac-text drac-text-white">
          Hunter 
        </label>
        <label> </label>
        <Switch id="purple" defaultChecked={false} color="purple" name="demo"
        onChange={()=>{
          if(check.checked == false){
          console.info("foi alterado")
          setName("Abraham Van Helsing ")
          setimagem("https://media.fstatic.com/MhIwI04V3tqHwgnWm5Ty_IKLlqk=/full-fit-in/290x478/media/artists/avatar/2021/11/edward-van-sloan_a56729.jpg")
          setbio(`Van Helsing is a Dutch doctor with a wide range of interests and accomplishments, partly attested by the string of letters that follows his name: "M.D., D.Ph., D.Litt., etc." The character is best known as a vampire hunter, and the arch-enemy of Count Dracula.`)
            setbdg1("Human")
            setbdg2("Doctor")
            setbdg3("Hunter")
          }
          if(check.checked == true){
            console.info("foi alterado")
            setName("Count Dracula")
            setimagem("https://ui.draculatheme.com/static/images/avatar.png")
            setbio(`Count Dracula (his first name is never given) is a centuries-old vampire, sorcerer and Transylvanian nobleman, who claims to be a Székely descended from Attila the Hun. He inhabits a decaying castle in the Carpathian Mountains near the Borgo Pass. Unlike the vampires of Eastern European folklore, which are portrayed as repulsive, corpse-like creatures. `)
              setbdg1("Count")
              setbdg2("Nobleman")
              setbdg3("Vampire")
            }
          
          }} />
        <label htmlFor="purple" className="drac-text drac-text-white">
          Vampire
        </label>
        <Paragraph color="white"> {Name} </Paragraph>
        <Box className='Bio'>
        <Avatar
      title="None"
      src={imagem}
      borderVariant='large'
      color='purple'
      m='md'
      width={"30rem"}
    ></Avatar>
    <Text>{bio}</Text>
    </Box>
      <Divider m='md' color="purple" />
        <Box className='BadgeArea'>
        <Badge m='sm'  color="animated">{bdg1}</Badge>
        <Badge m='sm'  color="animated">{bdg2}</Badge>
        <Badge m='sm'  color="animated">{bdg3}</Badge>
        </Box>
        </Card>
        <Anchor m='sm' href="https://github.com/bittenks/DraculaUI">Github</Anchor>
        </Box>
    )
  }
