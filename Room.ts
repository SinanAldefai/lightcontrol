
import { Device } from "./src/components/DevicesList"

interface Zone{

}

export interface Room {
  name: string;
  title: string;
  icon: string;
  color: string;
  value: number;
  enabled: boolean;
  devices: Device[];
  zones: Zone[];
}

export const room: Room = {
  "name": "game_room",
  "title": "Game Room",
  "icon": "game_room",
  "color": "yellow",
  "value": 0,
  "enabled": true,
  "devices":[
    {
    "icon": "light-led-strip",
    "name": "HUE Led Strip",
    "enabled": true,
    "value": 0
    },
    {
    "icon": "light-standing5",
    "name": "Standing Light",
    "enabled": true,
    "value": 0
    },
    {
    "icon": "light-led-strip",
    "name": "Desk Strip",
    "enabled": true,
    "value": 0
    },
  ],
  "zones": [{

  }]
}