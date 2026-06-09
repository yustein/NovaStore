# NovaStore Public Catalog

This public repository hosts NovaStore catalog metadata and public APK release assets for Tony's private Android app store.

NovaStore clients fetch `catalog/index.json`, verify APK SHA-256 after download, and then hand the verified APK to Android's normal package installer. Android still requires user approval for installs and updates.

## NovaStore App

NovaStore is the private Android app store client. It installs and updates our own APKs outside Google Play while preserving Android's install-source permission and package-signature rules.

- Package: `com.novastore.client`
- Version: `0.1.5` / code `6`
- Download: <https://github.com/yustein/NovaStore/releases/download/novastore-v0.1.5/NovaStore-v0.1.5.apk>
- APK SHA-256: `4d53a105466df0aa89bce76816fd0e41126a45b34603a26a992cf30120b23459`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`

## Catalog Apps

### Aurora Weather

- Package: `com.lenomila.auroraweather`
- Version: `3.0.18` / code `55`
- Download: <https://github.com/yustein/NovaStore/releases/download/auroraweather-v3.0.18/AuroraWeather-v3.0.18.apk>
- APK SHA-256: `0b297ae5ca5fb25099abf9c9710e48359c417fa6bffaf2a412474f9a2066ab79`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`

### ClawDeck

- Package: `com.clawdeck`
- Version: `1.0.23` / code `24`
- Download: <https://github.com/yustein/NovaStore/releases/download/clawdeck-v1.0.23/ClawDeck-v1.0.23.apk>
- APK SHA-256: `53e526e14e60754b6b9723667e0ae792576cd65038283c2b294d3ff282d0b95f`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`

## Manifests

- Full catalog: `catalog/index.json`
- NovaStore release: `catalog/novastore.json`
- Aurora Weather release: `catalog/auroraweather.json`
- ClawDeck release: `catalog/clawdeck.json`

## Update Behavior

NovaStore checks this public catalog on launch and three times a day in the background. It notifies for:

- a newer NovaStore APK,
- a newer catalog app already installed on the phone.

It does not silently install updates. The user always confirms in Android's installer.
