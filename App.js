import React,{useState} from 'react'
import { StyleSheet,
  TextInput,
  Button,
  View,
  ScrollView} from 'react-native'
import Publication from './component/Publication';
import GlobalStyle from './Styles.js'

const App = () => { 
  const [data, setData] = useState([]);
  const [title,setTitle] = useState("");
  let counter = 0;

  const handleChange = async () => {
    const rep = await fetch('http://coffee.alexflipnote.dev/random.json');
    const rep2 = await rep.json();
    setData([...data, { id : counter++, value: [title, rep2.file]}]);
    alert("message publié");
  };


  return (
      <ScrollView style={{marginHorizontal: 40,marginVertical:80}}>     
        <TextInput style={style.input} placeholder="Quoi de neuf ?" type="text" id="title" name="title"  onChangeText={e => setTitle(e)}/>
          <View style={style.buttonContainer}>
            <Button color= '#FFFFFF' title='publier' onPress={() => handleChange()} ></Button>
          </View>
        {data.map(e => <Publication {...{ id : e.id , value: (e.value)}}/>)}  
      </ScrollView>
    );
  }; 
  
  const style = StyleSheet.create(GlobalStyle);
  
  export default App;

