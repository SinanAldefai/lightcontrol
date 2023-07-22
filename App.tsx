import { Image, SafeAreaView, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { useState } from 'react';
import Colors from './src/styles/Colors';
import { Slider } from '@miblanchard/react-native-slider';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const game_room = {
    "room": "game_room",
    "title": "Game Room",
    "roomIcon": "game_room",
    "value": 0,
    "enabled": true,
    "devices":[
      {
      "deviceIcon": "light-led-strip",
      "devceName": "HUE Led Strip",
      "enabled": true,
      "value": 0
      },
      {
      "deviceIcon": "light-standing5",
      "devceName": "Standing Light",
      "enabled": true,
      "value": 0
      },
      {
      "deviceIcon": "light-led-strip",
      "devceName": "Desk Strip",
      "enabled": true,
      "value": 0
      },
    ],
    "zones": [{

    }]
  }

  const [lightState,setLightState] = useState({})
  const [sliderValue, setSliderValue] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [colorBackground, setColorBackground] = useState('');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const selectedColor = Colors.yellow;

  const statusColor = isEnabled ? selectedColor : Colors.white;
  const trackColor = isEnabled ? selectedColor : Colors.gray.light;
  const thumbColor = isEnabled ? Colors.white : Colors.white;

  const setBackground = (value: number[]) => {
    setSliderValue(value);
    setColorBackground(`rgb(255,255,${value[0]*100*2.55})`);
  }


  return (
    <LinearGradient colors={[Colors.yellow, '#11131f']} style={{flex:1}} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} locations={[0,0.5]}>
      <ScrollView>
        <SafeAreaView></SafeAreaView>
          <View style={styles.content}>
            {/* Header */}
              <View style={styles.titleContainer}>
                  <Image style={styles.titleIcon} tintColor={statusColor} source={require('./assets/glyphs/zone-controls/lights.png')} />
                  <Text style={[{color:statusColor},styles.title]}>Lights</Text>
              </View>
            {/* Zone */}
            <View style={styles.rowContent}>
              <View style={styles.flexRow}>
                <View style={styles.roomIconContainer}>
                  <Image style={styles.roomIcon} tintColor={Colors.white} source={require('./assets/glyphs/zone/game_room.png')} />
                </View>
                <Text style={styles.headerText}>Game Room</Text>
              </View>
              <Switch trackColor={{false: Colors.black, true: selectedColor}} ios_backgroundColor={Colors.black} thumbColor={'#fff'} onValueChange={toggleSwitch} value={isEnabled}/>
            </View>
            <Slider containerStyle={styles.sliderContainer} trackStyle={styles.sliderTrackStyle} minimumTrackTintColor={trackColor} thumbTintColor={thumbColor} value={sliderValue} onValueChange={value => setBackground(value)} disabled={!isEnabled}></Slider>
            {/* Devices */}
            <Text style={styles.devicesTitle}>Devices</Text>

            <View style={styles.devicesCard}>
              <View style={styles.rowContent}>
                <View style={styles.flexRow}>
                  <View style={styles.devicesIconContainer}>
                    <Image style={styles.devicesIcon} tintColor={Colors.white} source={require('./assets/glyphs/custom-devices/light-led-strip.png')} />
                  </View>
                  <Text style={styles.devicesCardText}>Game Room</Text>
                </View>
                <Switch trackColor={{false: Colors.black, true: selectedColor}} ios_backgroundColor={Colors.black} thumbColor={'#fff'} onValueChange={toggleSwitch} value={isEnabled}/>
              </View>
              <Slider trackStyle={styles.sliderTrackStyle} minimumTrackTintColor={trackColor} thumbTintColor={thumbColor} value={sliderValue} onValueChange={value => setBackground(value)} disabled={!isEnabled}></Slider>
            </View>
            <View style={styles.devicesCard}>
              <View style={styles.rowContent}>
                <View style={styles.flexRow}>
                  <View style={styles.devicesIconContainer}>
                    <Image style={styles.devicesIcon} tintColor={Colors.white} source={require('./assets/glyphs/custom-devices/light-standing5.png')} />
                  </View>
                  <Text style={styles.devicesCardText}>Game Room</Text>
                </View>
                <Switch trackColor={{false: Colors.black, true: selectedColor}} ios_backgroundColor={Colors.black} thumbColor={'#fff'} onValueChange={toggleSwitch} value={isEnabled}/>
              </View>
              <Slider trackStyle={styles.sliderTrackStyle} minimumTrackTintColor={trackColor} thumbTintColor={thumbColor} value={sliderValue} onValueChange={value => setBackground(value)} disabled={!isEnabled}></Slider>
            </View>

            <View style={styles.devicesCard}>
              <View style={styles.rowContent}>
                <View style={styles.flexRow}>
                  <View style={styles.devicesIconContainer}>
                    <Image style={styles.devicesIcon} tintColor={Colors.white} source={require('./assets/glyphs/custom-devices/light-led-strip.png')} />
                  </View>
                  <Text style={styles.devicesCardText}>Game Room</Text>
                </View>
                <Switch trackColor={{false: Colors.black, true: selectedColor}} ios_backgroundColor={Colors.black} thumbColor={'#fff'} onValueChange={toggleSwitch} value={isEnabled}/>
              </View>
              <Slider trackStyle={styles.sliderTrackStyle} minimumTrackTintColor={trackColor} thumbTintColor={thumbColor} value={sliderValue} onValueChange={value => setBackground(value)} disabled={!isEnabled}></Slider>
            </View>

            <Text style={styles.devicesTitle}>Zones</Text>

            <View style={styles.devicesCard}>
              <View style={styles.rowContent}>
                <View style={styles.flexRow}>
                  <View style={styles.devicesIconContainer}>
                    <Image style={styles.devicesIcon} tintColor={Colors.white} source={require('./assets/glyphs/custom-devices/light-led-strip.png')} />
                  </View>
                  <Text style={styles.devicesCardText}>Game Room</Text>
                </View>
                <Switch trackColor={{false: Colors.black, true: selectedColor}} ios_backgroundColor={Colors.black} thumbColor={'#fff'} onValueChange={toggleSwitch} value={isEnabled}/>
              </View>
              <Slider trackStyle={styles.sliderTrackStyle} minimumTrackTintColor={trackColor} thumbTintColor={thumbColor} value={sliderValue} onValueChange={value => setBackground(value)} disabled={!isEnabled}></Slider>
            </View>

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
  devicesIconContainer:{
    marginRight: 10,
  },
  devicesIcon:{
    width:40,
    height:40,
    marginTop: -7,
  },
  devicesTitle:{
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    marginTop:20,
  },
  devicesCard:{
    width:'100%',
    backgroundColor: 'rgba(255,255,255,0.08)',
    padding:25,
    borderRadius:15,
    marginBottom:15,
  },
  devicesCardText:{
    color: '#fff',
    fontSize: 21,
    fontWeight: '500',
  },
});
