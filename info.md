**Sample overview:**

![demo](https://i.imgur.com/dcR9U2S.png)


### Example 1:
Fully built for Nvidia Shield.
Change each entity/entity_id to your own media_player.shield
```yaml
type: custom:shieldtv-card
entity: media_player.living_room_nvidia_shield
name: false
tv: true
power: 
  service: media_player.turn_on
  service_data:   
    entity_id: media_player.living_room_nvidia_shield
back:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: BACK
home:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: HOME
menu:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: >-
      am start -a android.intent.action.VIEW -d -n
      com.android.tv.settings/.MainSettings
up:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: UP
left:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: LEFT
select:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: ENTER
right:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: RIGHT
down:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: DOWN
reverse:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: input keyevent 38
play:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: input keyevent 85
forward:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: input keyevent 40
finder:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: >-
      am start -a android.intent.action.VIEW -d -n
      com.nvidia.remotelocator/.ShieldRemoteLocatorActivity
hulu:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: >-
      am start -a android.intent.action.VIEW -n
      com.hulu.livingroomplus/.WKFactivity
prime_video:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: >-
      am start -a android.intent.action.VIEW -n
      com.amazon.amazonvideo.livingroom/com.amazon.ignition.IgnitionActivity
netflix:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: am start -a android.intent.action.VIEW -n com.netflix.ninja/.MainActivity
plex:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: >-
      am start -a android.intent.action.VIEW -n
      com.plexapp.android/com.plexapp.plex.activities.SplashActivity
youtube:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.living_room_nvidia_shield
    command: >-
      am start -a android.intent.action.VIEW -n
      com.google.android.youtube.tv/com.google.android.apps.youtube.tv.activity.ShellActivity
```

Look at [README](https://github.com/gangoke/shieldtv-card/blob/master/README.md) for more information
