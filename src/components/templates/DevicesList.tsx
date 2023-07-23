import { Slider } from "@miblanchard/react-native-slider";
import { Image, StyleSheet, Switch, Text, View } from "react-native";
import { Colors, selectedColor } from "../../styles/Colors";
import { Icon, IconProps } from "../atoms/Icon";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export interface Device {
  icon: string;
  name: string;
  enabled: boolean;
  value: number;
}

interface Props {
  devices: Device[];
  onUpdateDevices: (updatedDevices: Device[]) => void;
  enabled: boolean;
}

export const DevicesList: React.FC<Props> = ({ devices,onUpdateDevices,enabled }) => {

  const [devicesState, setDevicesState] = useState(devices);

  useEffect(() => {
    setDevicesState(devices);
  }, [devices]);


  const editToggles = (index: number, value: any) => {
    const updatedDevices = [...devices];
    updatedDevices[index].enabled = value;
    setDevicesState(updatedDevices);
    onUpdateDevices(updatedDevices);
  };

  const editSliders = (index: number, value: number[]) => {
    const updatedDevices = [...devices];
    updatedDevices[index].value = value[0];
    setDevicesState(updatedDevices);
    onUpdateDevices(updatedDevices);
  };

  return (
    <>
      {devicesState.map((device, index) => { // Get the device object from the devices object
        return (
          <View key={index} style={styles.devicesCard}>
            <LinearGradient
              colors={[device.enabled ? `hsl(40, 100%, ${(device.value*100)/2}%)`: Colors.gray.dark, Colors.gray.dark]}
              style={{flex:1,borderRadius:15}}
              start={{ x: 0, y: -1 }}
              end={{ x: 0, y: 1.5 }}
              locations={[0,0.8]}
              >
              <View style={styles.padding}>
                <View style={styles.rowContent}>
                  <View style={styles.flexRow}>
                    <View style={styles.devicesIconContainer}>
                      <Icon size={40} color={'#FFF'} glyph={device.icon} />
                    </View>
                    <Text style={styles.devicesCardText}>{device.name}</Text>
                  </View>
                  <Switch
                    trackColor={{ false: Colors.black, true: selectedColor }}
                    ios_backgroundColor={Colors.black}
                    thumbColor={'#fff'}
                    onValueChange={(value) =>
                      editToggles(index, value)
                    }
                    value={device.enabled}
                  />

                </View>
                <Slider
                    trackStyle={styles.sliderTrackStyle}
                    minimumTrackTintColor={device.enabled ? selectedColor : Colors.gray.darkest }
                    maximumTrackTintColor={Colors.black }
                    thumbTintColor={device.enabled ? Colors.white : Colors.gray.normal}
                    value={device.value}
                    onValueChange={(value) =>
                      editSliders(index, value)
                    }
                    disabled={!device.enabled}
                  />
              </View>
            </LinearGradient>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  flexRow:{
    flexDirection: 'row'
  },
  rowContent:{
    flexDirection: 'row',
    width:'100%',
    justifyContent: 'space-between',
  },
  devicesIconContainer:{
    marginRight: 10,
  },
  devicesCard:{
    width:'100%',
    borderRadius:15,
    marginBottom:15,
  },
  padding:{
    // borderRadius:20,
    padding:25,
  },
  devicesCardText:{
    color: '#fff',
    fontSize: 21,
    fontWeight: '500',
  },
  sliderTrackStyle:{
    height: 9,
    borderRadius:10,
  },
})
