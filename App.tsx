import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Background from './src/components/Background';
import Colors from './src/styles/Colors';
import { Slider } from '@miblanchard/react-native-slider';

export default function App() {
  const [brightness, setBrightness] = useState(100);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const statusColor = isEnabled ? Colors.yellow : Colors.white;

  return (
    <Background brightness={brightness}>
        <SafeAreaView>
          <View style={styles.content}>
            {/* Header */}
            <View style={styles.titleContainer}>
                <Image style={styles.titleIcon} tintColor={statusColor} source={require('./assets/glyphs/zone-controls/lights.png')} />
                <Text style={[{color:statusColor},styles.title]}>Lights</Text>
            </View>
            {/* Room */}
            <View style={styles.rowContent}>
              <Text style={styles.headerText}>Game Room</Text>
              <Switch
                 trackColor={{false: Colors.black, true: Colors.yellow}}
                 ios_backgroundColor={Colors.black}
                 thumbColor={'#fff'}
                 onValueChange={toggleSwitch}
                 value={isEnabled}
                 />
            </View>
            <Slider trackStyle={styles.sliderTrackStyle}></Slider>
            {/* Devices */}
          </View>
        </SafeAreaView>
      </Background>
  );
}

const styles = StyleSheet.create({
  content:{
    padding: 20,
  },
  titleContainer:{
    flexDirection: 'row',
    paddingBottom: 20,
  },
  titleIcon:{
    width:25,
    height:25,
  },
  title:{
    fontSize: 22,
    paddingLeft:10,
  },
  titleOn:{
    color: Colors.yellow
  },
  titleOff:{
    color: Colors.white
  },
  rowContent:{
    flexDirection: 'row',
    width:'100%',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  headerText:{
    color: '#fff',
    fontSize: 20,
  },
  sliderTrackStyle:{
    height: 9,
    borderRadius:10
  }
});
