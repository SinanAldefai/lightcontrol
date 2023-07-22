import { Image, SafeAreaView, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { useState } from 'react';
import { Colors , selectedColor } from './src/styles/Colors';
import { Slider } from '@miblanchard/react-native-slider';
import { LinearGradient } from 'expo-linear-gradient';
import { Device, DevicesList } from './src/components/DevicesList';
import { room } from './room';

interface Zone {
  // Zone interface
}

export default function App() {

  const [sliderValue, setSliderValue] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [colorBackground, setColorBackground] = useState('#000');
  const colors = isEnabled ?
  {statusColor: selectedColor,trackColor:selectedColor }:
  {statusColor: Colors.white, trackColor:Colors.gray.light }


  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const setBackground = (value: number[]) => {
    setSliderValue(value[0]);
    setColorBackground(`rgb(255,255,${value[0]*100*2.55})`);
  }

  return (
    <LinearGradient colors={[colorBackground, '#11131f']} style={{flex:1}} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} locations={[0,0.5]}>
      <ScrollView>
        <SafeAreaView></SafeAreaView>
          <View style={styles.content}>
            {/* Header */}
            <View style={styles.titleContainer}>
                <Image style={styles.titleIcon} tintColor={colors.statusColor} source={require('./assets/glyphs/zone-controls/lights.png')} />
                <Text style={[{color:colors.statusColor},styles.title]}>Lights</Text>
            </View>

            <View style={styles.rowContent}>
              <View style={styles.flexRow}>
                <View style={styles.roomIconContainer}>
                  <Image style={styles.roomIcon} tintColor={Colors.white} source={require('./assets/glyphs/zone/game_room.png')} />
                </View>
                <Text style={styles.headerText}>{room.title}</Text>
              </View>
              <Switch trackColor={{false: Colors.black, true: selectedColor}} ios_backgroundColor={Colors.black} thumbColor={'#fff'} onValueChange={toggleSwitch} value={isEnabled}/>
            </View>
            <Slider
            containerStyle={styles.sliderContainer}
            trackStyle={styles.sliderTrackStyle}
            minimumTrackTintColor={colors.trackColor}
            thumbTintColor={Colors.white}
            value={sliderValue}
            onValueChange={value => setBackground(value)}
            disabled={!isEnabled}></Slider>

            <Text style={styles.devicesTitle}>Devices</Text>

            <DevicesList devices={room.devices}></DevicesList>

          </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  content:{
    padding: 20,
  },
  titleContainer:{
    justifyContent: 'center',
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
  flexRow:{
    flexDirection: 'row'
  },
  roomIconContainer:{
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    padding:7,
    marginTop:-6,
    marginRight: 10,
  },
  roomIcon:{
    width:30,
    height:30,
  },
  rowContent:{
    flexDirection: 'row',
    width:'100%',
    justifyContent: 'space-between',
  },
  headerText:{
    color: '#fff',
    fontSize: 23,
    fontWeight: '700',
  },
  sliderContainer:{
  },
  sliderTrackStyle:{
    height: 9,
    borderRadius:10,
  },
  devicesTitle:{
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    marginTop:20,
  },
});
