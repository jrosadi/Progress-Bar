import AntDesign from '@expo/vector-icons/AntDesign';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';


const MyProgressBar:React.FC = () => {
  const [barVal, setBarVal] = React.useState<number>(0);
  const [isVisible, setIsVisible] = React.useState<boolean>(true);
  const addProgress = (prog:number ) => {
    if(barVal < 0.999){
      setBarVal(barVal+prog)
    }
  }

  const removeProgress = (prog:number ) => {
    if(barVal>0.00000001){
      setBarVal(barVal-prog)
    }
  }

  const toggleVisible = () => {
      setIsVisible(!isVisible)
  }

  return( 
  <View style = {styles.container}>
    <ProgressBar progress={barVal} color={"purple"} visible={isVisible}/>
    <Text>Press to add progress</Text>
    <AntDesign name="plus" size={32} color="green" onPress={()=>addProgress(0.1)}/>
    <AntDesign name="minus" size={32} color="red" onPress={()=>removeProgress(0.1)}/>
    <Text>Press to remove progress</Text>
    <Button title='Press to toggle visibility' onPress={toggleVisible}></Button>
  </View>
  )
};

const styles = StyleSheet.create({

  container: {
          flex : 1,
          padding: 16,
          alignItems: "center",
      },
})

export default MyProgressBar;