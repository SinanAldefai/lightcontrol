import { Slider } from "@miblanchard/react-native-slider";
import { Image, StyleSheet, Switch, Text, View } from "react-native";
import { Colors, selectedColor } from "../styles/Colors";
import { Icon, IconProps } from "./Icon";
import { useEffect, useState } from "react";
import { room } from "../../Room";

export interface Device {
  icon: string;
  name: string;
  enabled: boolean;
  value: number;
}

interface Props {
  devices: Device[];
}

export const DevicesList: React.FC<Props> = ({ devices }) => {

  const [devicesState, setDevicesState] = useState(devices);

  const editToggles = (index: number, value: any) => {
    const updatedDevices = [...devices];
    updatedDevices[index].enabled = value;
    setDevicesState(updatedDevices);
  };
  const editSliders = (index: number, value: any) => {
    const updatedDevices = [...devices];
    updatedDevices[index].value = value;
    setDevicesState(updatedDevices);
  };

  useEffect(()=>{
    setDevicesState(room.devices);
  },[room])

  return (
    <>
      {devicesState.map((device, index) => { // Get the device object from the devices object
        return (
          <View key={index} style={styles.devicesCard}>
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
  sliderTrackStyle:{
    height: 9,
    borderRadius:10,
  },
})
