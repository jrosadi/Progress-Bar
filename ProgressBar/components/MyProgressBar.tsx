import * as React from 'react';
import { Button, View } from 'react-native';
import { MD3Colors, ProgressBar } from 'react-native-paper';

const MyProgressBar:React.FC = () => {
  const [barVal, setBarVal] = React.useState<number>(0);
  const addProgress = (prog:number ) => {
    if(barVal < 1){
      setBarVal(barVal+prog)
    }
  }

  const removeProgress = (prog:number ) => {
    if(barVal>0){
      setBarVal(barVal-prog)
    }
  }
  return( 
  <View>
    <ProgressBar progress={barVal} color={MD3Colors.error50} />
    <Button title='Press to add progress' onPress={()=>addProgress(0.1)}></Button>
    <Button title='Press to remove progress' onPress={()=>removeProgress(0.1)}></Button>
  </View>
  )
};

export default MyProgressBar;