# Shield TV Remote Card

Forked from [marrobHD/tv-card](https://github.com/marrobHD/tv-card)


## Demo:


## Options

| Name | Type | Requirement | Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:tv-card`
| entity | string | **Required** | `random` entity
| remote | string | **Optional** | `remote` entity of Roku device. Default assume named like `entity`
| name | string | **Optional** | Card name
| theme | string | **Optional** | Card theme
| tv | boolean | **Optional** | If `true` shows volume and power buttons. Default `false`
| power | `service` | **Optional, Exclusive**| service to call when power button pressed. When `power` defined, `power_on` and `power_off` are disabled, even when defined
| power_on | `service` | **Optional, Exclusive**| service to call when power_on button pressed. Only enabled if no `power` defined.
| power_off | `service` | **Optional, Exclusive**| service to call when power_off button pressed. Only enabled if no `power` defined.
| back | `service` | **Optional**| service to call when back button pressed
| home | `service` | **Optional**| service to call when home button pressed
| menu | `service` | **Optional**| service to call when menu button pressed
| up | `service` | **Optional**| service to call when up button pressed
| left | `service` | **Optional**| service to call when left button pressed
| select | `service` | **Optional**| service to call when select button pressed
| right | `service` | **Optional**| service to call when right button pressed
| down | `service` | **Optional**| service to call when down button pressed
| reverse | `service` | **Optional**| service to call when reverse button pressed
| play | `service` | **Optional**| service to call when play button pressed
| forward | `service` | **Optional**| service to call when forward button pressed
| finder | `service` | **Optional**| service to call when remote finder button pressed
| volume_up | `service` | **Optional**| service to call when volume up button pressed
| volume_down | `service` | **Optional**| service to call when volume down button pressed
| volume_mute | `service` | **Optional**| service to call when volume mute button pressed
| netflix | `service` | **Optional**| service to call when netflix button pressed
| prime_video | `service` | **Optional**| service to call when prime video button pressed
| youtube | `service` | **Optional**| service to call when youtube button pressed
| hulu | `service` | **Optional**| service to call when hulu button pressed
| plex | `service` | **Optional**| service to call when plex button pressed

## `service` Options
| Name | Type | Requirement | Description
| ---- | ---- | ------- | -----------
| service | string | **Required** | Service to call
| service_data | string | **Optional** | Service data to use


## Installation

Install using HACS or [see this guide](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins).

## Nvidia Shield Commands
Here you cna find some adb commands: [NVIDIA Shield Intents](https://gist.github.com/mcfrojd/9e6875e1db5c089b1e3ddeb7dba0f304)

### Example 1:

```yaml
type: custom:shieldtv-card
entity: media_player.bedroom_nvidia_shield
name: false
tv: false
menu:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: >-
      am start -a android.intent.action.VIEW -d -n
      com.android.tv.settings/.MainSettings
home:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: HOME
back:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: BACK
play:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: input keyevent 85
reverse:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: input keyevent 38
forward:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: input keyevent 40
up:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: UP
left:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: LEFT
select:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: ENTER
right:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: RIGHT
down:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: DOWN
finder:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: >-
      am start -a android.intent.action.VIEW -d -n
      com.nvidia.remotelocator/.ShieldRemoteLocatorActivity
plex:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: >-
      am start -a android.intent.action.VIEW -n
      com.plexapp.android/com.plexapp.plex.activities.SplashActivity
youtube:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: >-
      am start -a android.intent.action.VIEW -n
      com.google.android.youtube.tv/com.google.android.apps.youtube.tv.activity.ShellActivity
prime_video:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: >-
      am start -a android.intent.action.VIEW -n
      com.amazon.amazonvideo.livingroom/com.amazon.ignition.IgnitionActivity
hulu:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: >-
      am start -a android.intent.action.VIEW -n
      com.hulu.livingroomplus/.WKFactivity
netflix:
  service: androidtv.adb_command
  service_data:
    entity_id: media_player.bedroom_nvidia_shield
    command: am start -a android.intent.action.VIEW -n com.netflix.ninja/.MainActivity
```
