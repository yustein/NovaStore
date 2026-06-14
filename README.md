# NovaStore Public Catalog

This public repository hosts NovaStore catalog metadata and public APK release assets for Tony's private Android app store.

NovaStore clients fetch `catalog/index.json`, verify its detached RSA/SHA-256 signature, show pinned APK SHA-256/signing metadata, and install GitHub-hosted APK downloads only through Android user consent.

## Catalog Summary

- Generated: `2026-06-14T07:38:49Z`
- Apps: `25` total (`1` current store app, `1` legacy store updater, `23` managed apps)
- Excluded: companion sample APKs, Windows packages, recovered duplicate projects, and AAB-only artifacts.

## NovaStore App

NovaStore is the private Android app catalog/update client.

- Package: `com.lenomila.novastore`
- Version: `0.2.14` / code `34`
- Description: NovaStore is Tony's private Android app store for signed APK releases hosted on GitHub. It shows trusted app listings, checks installed versions, verifies catalog signatures plus APK hashes, and hands installs or updates to Android with normal user approval.
- Download: <https://github.com/yustein/NovaStore/releases/download/novastore-v0.2.14/NovaStore-v0.2.14.apk>
- APK SHA-256: `c940724bbc312c403a9b8b08eb6eaef4ecc8bd6adc13e3feff3a41f04a0983a1`
- Signing certificate SHA-256: `115e50cb2f2b7bfdff1d7a0bf3e9cc7b3bfd2ca719587727672a82b09680d34c`

## NovaStore Legacy Updater

This entry is only for old NovaStore 0.1.x installations that still use the original `com.novastore.client` package.

- Package: `com.novastore.client`
- Version: `0.1.14` / code `15`
- Description: This NovaStore entry is a compatibility bridge for older NovaStore 0.1.x installations that used the original com.novastore.client package. It lets those installs update to the final old-package build before moving to the modern NovaStore package.
- Download: <https://github.com/yustein/NovaStore/releases/download/novastore-v0.1.14/NovaStore-v0.1.14.apk>
- APK SHA-256: `9b2218469afd71809942bab1ca0ada4414f87cae2083d97e3fda960195c5b547`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`

## Catalog Apps

### Antikythera

- Package: `com.lenomila.antikythera`
- Category: `Science`
- Version: `0.1.1` / code `2`
- Description: Antikythera is an interactive reconstruction and learning tool for the ancient Antikythera mechanism. It lets you operate a 3D-style gear-and-dial model, change time, inspect calendar and eclipse-cycle readouts, and compare evidence-backed parts with more speculative reconstruction layers.
- Download: <https://github.com/yustein/NovaStore/releases/download/antikythera-v0.1.1/Antikythera-v0.1.1.apk>
- APK SHA-256: `5705333fbbbc1864234dc5eb68ed5c5db8f6e20bc7213df847b75212685a1a33`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### Aurora Weather

- Package: `com.lenomila.auroraweather`
- Category: `Weather`
- Version: `3.0.29` / code `66`
- Description: Aurora Weather is a local weather app focused on clear current conditions, forecasts, rain awareness, widgets, and location-aware updates. It can follow the phone's current position, actively refresh widget weather after movement, cache recent results, and support practical daily/weather-alert workflows without requiring an account.
- Download: <https://github.com/yustein/NovaStore/releases/download/auroraweather-v3.0.29/AuroraWeather-v3.0.29.apk>
- APK SHA-256: `d75202bfc49dca7011c5908ec790cbb88ff9d4812d7fdcd69c804053089c814b`
- Signing certificate SHA-256: `a2d688bd7db1138915692fd294c629545988524ff1a1d65dfee5263fc11a7cd3`
### Backgammon LAN

- Package: `com.lenomila.backgammon`
- Category: `Games`
- Version: `0.1.10` / code `11`
- Description: Backgammon LAN is a local-network backgammon game for Android and Windows players on the same LAN. It provides a playable board, dice, legal move handling, match state sync, reconnect behavior, and local discovery so two devices can play directly without an online account.
- Download: <https://github.com/yustein/NovaStore/releases/download/backgammonlan-v0.1.10/BackgammonLAN-v0.1.10.apk>
- APK SHA-256: `b92063e76ba776b953c51a415afebfe67d421f13034062b04e0c4df65b84369d`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### CalcFX

- Package: `com.lenomila.calcfx`
- Category: `Tools`
- Version: `0.1.1` / code `2`
- Description: CalcFX combines a polished scientific calculator with a currency exchange workspace. It supports expression preview, memory, history, degree/radian mode, advanced functions, reusable results, currency pair selection, rate refresh, offline/stale-rate display, and favorite comparison currencies.
- Download: <https://github.com/yustein/NovaStore/releases/download/calcfx-v0.1.1/CalcFX-v0.1.1.apk>
- APK SHA-256: `74d23e3ef0e646b35ea1b4fdd3bf32a9aacd92d4548510356601b7d0a3cbf733`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### Carpet Measure

- Package: `com.lenomila.carpetmeasure`
- Category: `Tools`
- Version: `0.1.9` / code `10`
- Description: Carpet Measure is an AR measurement prototype for estimating carpet and floor dimensions with the phone camera. It helps mark corners, inspect measured spans, and work toward area estimates using ARCore-style spatial tracking and segmentation-assisted measurement workflows.
- Download: <https://github.com/yustein/NovaStore/releases/download/carpetmeasure-v0.1.9/CarpetMeasure-v0.1.9.apk>
- APK SHA-256: `0be6bff3f3eb412d40d03c5ff07946874b8d117581f575efd413b4de5e9fc338`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### ClawDeck

- Package: `com.clawdeck`
- Category: `Tools`
- Version: `1.0.26` / code `27`
- Description: ClawDeck is an Android-first OpenClaw operations console. It keeps saved server targets, SSH command surfaces, safe command templates, local operator notes, chat with OpenClaw, background chat keepalive, logs, redaction, and a setup flow for managing Tony's own infrastructure from a phone.
- Download: <https://github.com/yustein/NovaStore/releases/download/clawdeck-v1.0.26/ClawDeck-v1.0.26.apk>
- APK SHA-256: `07c0a3135d92649829525613300cbea2b1271eedce8881cce7d51958923c0a43`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### Echo Atlas

- Package: `com.lenomila.echoatlas`
- Category: `Tools`
- Version: `0.1.5` / code `6`
- Description: Echo Atlas is an experimental sensor-driven exploration game. It blends touch, motion, microphone, camera light, GPS, battery, and device-state signals into an anomaly-hunting interface where the player tunes signals, stabilizes or harvests discoveries, and reads changing visual feedback.
- Download: <https://github.com/yustein/NovaStore/releases/download/echoatlas-v0.1.5/EchoAtlas-v0.1.5.apk>
- APK SHA-256: `2179287c1ae7e89f5df7bd5c2411e2de639da25007e1e10773c219a413e4e342`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### File Atlas

- Package: `com.lenomila.fileatlas`
- Category: `Tools`
- Version: `0.1.4` / code `5`
- Description: File Atlas is a phone file manager for browsing local storage with a practical dashboard, folders, file categories, search, sort modes, recent/storage context, file details, open/share actions, rename, delete, and path copying. It is designed for direct on-device file work.
- Download: <https://github.com/yustein/NovaStore/releases/download/fileatlas-v0.1.4/FileAtlas-v0.1.4.apk>
- APK SHA-256: `004308b0c70009fe44d51fea5e67226bf683d8bb546246af374eef39fb0a4b4a`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### Gateway Fieldbook

- Package: `com.lenomila.gatewayfieldbook`
- Category: `Reference`
- Version: `1.3.0` / code `5`
- Description: Gateway Fieldbook is a field journal and training companion rebuilt from Tony's recovered APK. It includes focus timers, guided sessions, tone/audio exercises, profile and log tools, remote-viewing style practice targets, and structured notes for recording observations during sessions.
- Download: <https://github.com/yustein/NovaStore/releases/download/gatewayfieldbook-v1.3.0/GatewayFieldbook-v1.3.0.apk>
- APK SHA-256: `29964a09beffeff9617b02da7479fe48a12dd65b700980d356fc76255618e813`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### MuzoPlay

- Package: `com.lenomila.muzoplay`
- Category: `Media`
- Version: `0.1.24` / code `25`
- Description: MuzoPlay is a neutral IPTV/media player for user-supplied playlists. It imports M3U/M3U8 and XMLTV-style guide data, plays streams with Media3/ExoPlayer, supports favorites and search, and intentionally includes no bundled channels, subscriptions, provider credentials, or public stream lists.
- Download: <https://github.com/yustein/NovaStore/releases/download/muzoplay-v0.1.24/MuzoPlay-v0.1.24.apk>
- APK SHA-256: `1958c4ff905d867c3c29359258b0099f7dddc8bc50394694b2e587406443c56e`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### PhantomXRay

- Package: `com.lenomila.phantomxray`
- Category: `Entertainment`
- Version: `0.1.2` / code `3`
- Description: PhantomXRay is an entertainment camera AR app that overlays a stylized skeleton and skull effect on people in the camera preview. It uses on-device pose/face tracking for spooky visual play and is not medical imaging, diagnosis, security scanning, or a real X-ray tool.
- Download: <https://github.com/yustein/NovaStore/releases/download/phantomxray-v0.1.2/PhantomXRay-v0.1.2.apk>
- APK SHA-256: `4d0a8d0897a7e2e6738b2b053bce820016ca48b99108fcfc57c320de4f2370ad`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### Quake Globe

- Package: `com.lenomila.quakeglobe`
- Category: `Science`
- Version: `0.1.7` / code `8`
- Description: Quake Globe is an earthquake monitor with a live 3D globe, recent USGS earthquake feeds, selectable event markers, event details, and configurable local notifications. It visualizes magnitude, depth, location, and recency while keeping alerts local and source-honest.
- Download: <https://github.com/yustein/NovaStore/releases/download/quakeglobe-v0.1.7/QuakeGlobe-v0.1.7.apk>
- APK SHA-256: `8025eafbc83621c473a723d400c802fbc7a2c67bafcbdc6f4aa4e0317f1264fe`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### Resonance Finder

- Package: `com.lenomila.resonancefinder`
- Category: `Science`
- Version: `0.1.0` / code `1`
- Description: Resonance Finder is a science prototype for exploring frequency, vibration, and resonance ideas on Android. It is intended as a lightweight companion for finding or thinking through resonant behavior, experiments, and signal relationships rather than as a calibrated laboratory instrument.
- Download: <https://github.com/yustein/NovaStore/releases/download/resonancefinder-v0.1.0/ResonanceFinder-v0.1.0.apk>
- APK SHA-256: `a2771ddef4bdc0cf5209d4bec2eac99b5feaf2df85ca970c71e59e2d0929b671`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### Resonance Lab

- Package: `fyi.metatron.resonancelab`
- Category: `Science`
- Version: `0.1.3` / code `4`
- Description: Resonance Lab is an acoustic resonance field prototype. It plays controlled sine sweeps, records microphone response, estimates the strongest local response peak, and can play detected frequencies back with steady, pulsed, or wobbling output for visible small-object experiments.
- Download: <https://github.com/yustein/NovaStore/releases/download/resonancelab-v0.1.3/ResonanceLab-v0.1.3.apk>
- APK SHA-256: `92fef8233be2354a0c7bfeb023aecb4a6d6814555c3278d482ac1ab5dcdae6f1`
- Signing certificate SHA-256: `2f251bc0a8c8ee73f48e88b31889c834035f83ce9281d9b16e7a7fb0010ae395`
### Solar Flyover

- Package: `com.lenomila.solarflyover`
- Category: `Science`
- Version: `0.1.0` / code `1`
- Description: Solar Flyover is an offline 3D solar system model built for practical accuracy. It computes realtime or accelerated planet positions from JPL/NASA-style orbital elements, lets users fly around the system, inspect planets, follow Earth or selected bodies, view orbit trails, and switch between accurate AU distances and a phone-friendly compressed display.
- Download: <https://github.com/yustein/NovaStore/releases/download/solarflyover-v0.1.0/SolarFlyover-v0.1.0.apk>
- APK SHA-256: `fe42182dd304131463c54c50b047eb1b2a6901dd002445e5856b1ce3a72bc4c9`
- Signing certificate SHA-256: `000c29c806e7c126947e4289a3ca7c4e6a3331f883f22d819ff544a43a6199e0`
### SpeedCockpit

- Package: `com.lenomila.speedcockpit`
- Category: `Navigation`
- Version: `0.1.13` / code `14`
- Description: SpeedCockpit is a driving cockpit with GPS speed, map context, speed-limit focused display, warning tones, and multiple map/cockpit modes. It is built for glanceable travel use with reduced map flicker and stricter speed-limit presentation.
- Download: <https://github.com/yustein/NovaStore/releases/download/speedcockpit-v0.1.13/SpeedCockpit-v0.1.13.apk>
- APK SHA-256: `33368b1bbb81b58b514b40e89d8f0eb39334d2b5605898e807958bebbd0d0d0e`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### Speed Test Lab

- Package: `com.lenomila.speedtest`
- Category: `Tools`
- Version: `0.1.5` / code `6`
- Description: Speed Test Lab measures network latency, jitter, download speed, upload speed, active Wi-Fi/mobile transport details, public IP/provider metadata when reachable, and local test history. It uses public endpoints and presents results for comparing network quality over time.
- Download: <https://github.com/yustein/NovaStore/releases/download/speedtestlab-v0.1.5/SpeedTestLab-v0.1.5.apk>
- APK SHA-256: `d7ec76ae5b07dad6686939f392692189695cf55a701e14a7a8e8c200a678b7ba`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### TorrentAtlas

- Package: `com.lenomila.torrentatlas`
- Category: `Tools`
- Version: `0.1.8` / code `9`
- Description: TorrentAtlas is a torrent search and download manager for legal/open torrents and user-provided magnet or .torrent files. It can browse supported sources, add downloads, track progress, and use a pure-Java BitTorrent engine without bundling native libtorrent components.
- Download: <https://github.com/yustein/NovaStore/releases/download/torrentatlas-v0.1.8/TorrentAtlas-v0.1.8.apk>
- APK SHA-256: `00c3ae20dca9b94f03d269aea2bf8382f0e224cb0bcd6108b54cbb3832829840`
- Signing certificate SHA-256: `77bd7b32711738bf4837f604e00b8c137675755cbe199611e8612b410d68841f`
### Turkey Tourism

- Package: `fyi.metatron.turkeytourist`
- Category: `Travel`
- Version: `1.4.7` / code `12`
- Description: Turkey Tourism is a travel guide for exploring Turkey with place information, guide-style profiles, travel scoring, weather context, detail pages, images, and in-app web references. It is built for trip planning and quick tourist orientation while staying inside the app.
- Download: <https://github.com/yustein/NovaStore/releases/download/turkeytourism-v1.4.7/TurkeyTourism-v1.4.7.apk>
- APK SHA-256: `cbeed03a5b423ef93ef0d7d694eee7e62f8e7c98b07a77d7960d97ce8038771b`
- Signing certificate SHA-256: `2f251bc0a8c8ee73f48e88b31889c834035f83ce9281d9b16e7a7fb0010ae395`
### Visit Video Logger

- Package: `com.lenomila.visitvideologger`
- Category: `Travel`
- Version: `0.1.27` / code `28`
- Description: Visit Video Logger records driving or travel videos with a composed camera, map, GPS, heading, speed, timestamp, and optional front-camera picture-in-picture overlay. It includes stationary GPS/compass smoothing, camera-aspect-safe recording composition, rear driving camera controls, a black-screen recording mode, and readable location/story panels for travel narration.
- Download: <https://github.com/yustein/NovaStore/releases/download/visitvideologger-v0.1.27/VisitVideoLogger-v0.1.27.apk>
- APK SHA-256: `a1837c3f6140ea59781256a01b8e3b2a625587fdc9f26fe51368ffcd0e2edb57`
- Signing certificate SHA-256: `d7b7bcd3e7f71979811709cbca98e3f984c43cdcf8c96b3ba808ef9972139ec6`
### WaveVid

- Package: `com.lenomila.wavevid`
- Category: `Media`
- Version: `0.1.3` / code `4`
- Description: WaveVid turns one image plus one audio file into a 720p MP4 with a full-width blue waveform along the bottom. It runs encoding on-device with Android media codecs, saves output to Movies/WaveVid, and can continue rendering in a foreground service.
- Download: <https://github.com/yustein/NovaStore/releases/download/wavevid-v0.1.3/WaveVidAndroid-v0.1.3.apk>
- APK SHA-256: `a1995b27a22afaddbec35177e150cbf10c15ffbcf1285730c5868e7c24f0e1a7`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`
### Whisper Scribe

- Package: `com.lenomila.whisperscribe`
- Category: `Productivity`
- Version: `0.2.1` / code `3`
- Description: Whisper Scribe records or imports audio on Android and turns speech into editable text. It supports high-quality OpenAI API transcription plus free local offline Whisper via whisper.cpp after downloading or importing a model, then lets users copy, save, or share transcripts.
- Download: <https://github.com/yustein/NovaStore/releases/download/whisperscribe-v0.2.1/WhisperScribe-v0.2.1.apk>
- APK SHA-256: `9c2e821045c46c77c30fb2d97c809dd7cb68ffdfe89891bfb63a07c4664ea58c`
- Signing certificate SHA-256: `34b116221abae424c6d63d867303037ac43b826f6e95a092f79994e67f23a2aa`
### World Cup 2026

- Package: `com.lenomila.worldcup2026`
- Category: `Sports`
- Version: `0.1.4` / code `5`
- Description: World Cup 2026 is a tournament companion for fixtures, kickoff times, teams, venues, match status, results, news, and daily brief-style schedule checks. It is designed to show real local-time match information and open related web content inside the app.
- Download: <https://github.com/yustein/NovaStore/releases/download/worldcup2026-v0.1.4/WorldCup2026-v0.1.4.apk>
- APK SHA-256: `482b66a79b72649d8a23a6b678fd9c55b26f0ff4dcd1aedfa922968567401383`
- Signing certificate SHA-256: `574ab287ee443e3c6474aaf8372bce70fc33712dd063bc73198c38139f255243`
## Catalog Files

- Full catalog: `catalog/index.json`
- NovaStore: `catalog/novastore.json`
- NovaStore Legacy Updater: `catalog/novastore-legacy.json`
- Antikythera: `catalog/antikythera.json`
- Aurora Weather: `catalog/auroraweather.json`
- Backgammon LAN: `catalog/backgammonlan.json`
- CalcFX: `catalog/calcfx.json`
- Carpet Measure: `catalog/carpetmeasure.json`
- ClawDeck: `catalog/clawdeck.json`
- Echo Atlas: `catalog/echoatlas.json`
- File Atlas: `catalog/fileatlas.json`
- Gateway Fieldbook: `catalog/gatewayfieldbook.json`
- MuzoPlay: `catalog/muzoplay.json`
- PhantomXRay: `catalog/phantomxray.json`
- Quake Globe: `catalog/quakeglobe.json`
- Resonance Finder: `catalog/resonancefinder.json`
- Resonance Lab: `catalog/resonancelab.json`
- Solar Flyover: `catalog/solarflyover.json`
- SpeedCockpit: `catalog/speedcockpit.json`
- Speed Test Lab: `catalog/speedtestlab.json`
- TorrentAtlas: `catalog/torrentatlas.json`
- Turkey Tourism: `catalog/turkeytourism.json`
- Visit Video Logger: `catalog/visitvideologger.json`
- WaveVid: `catalog/wavevid.json`
- Whisper Scribe: `catalog/whisperscribe.json`
- World Cup 2026: `catalog/worldcup2026.json`
