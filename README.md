# NovaStore Public Catalog

This public repository hosts NovaStore catalog metadata and public APK release assets for Tony's private Android app store.

NovaStore clients fetch `catalog/index.json`, verify APK SHA-256 after download, and then hand the verified APK to Android's normal package installer. Android still requires user approval for installs and updates.

## NovaStore App

NovaStore is the private Android app store client. It installs and updates our own APKs outside Google Play while preserving Android's install-source permission and package-signature rules.

- Package: `com.novastore.client`
- Version: `0.1.4` / code `5`
- Download: <https://github.com/yustein/NovaStore/releases/download/novastore-v0.1.4/NovaStore-v0.1.4.apk>
- APK SHA-256: `28d1b27ede4765ee2ff7d66fbabaed0240206616379088d95ba35fedf971ad8b`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`

## Catalog Apps

### Aurora Weather

- Package: `com.lenomila.auroraweather`
- Version: `3.0.16` / code `53`
- Download: <https://github.com/yustein/NovaStore/releases/download/auroraweather-v3.0.16/AuroraWeather-v3.0.16.apk>
- APK SHA-256: `db9268111edfadd36657f8b8bd7ea47b6bc0d56aaa1332d94431c8c8c8a30534`
- Signing certificate SHA-256: `1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6`

## Manifests

- Full catalog: `catalog/index.json`
- NovaStore release: `catalog/novastore.json`
- Aurora Weather release: `catalog/auroraweather.json`

## Update Behavior

NovaStore checks this public catalog on launch and on a background schedule. It notifies for:

- a newer NovaStore APK,
- a newer catalog app already installed on the phone.

It does not silently install updates. The user always confirms in Android's installer.
