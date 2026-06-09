import { Injectable, NotFoundException } from "@nestjs/common";
import { ulid } from "ulid";
import type {
  AdminRole,
  AppStatus,
  AppVisibility,
  ReleaseChannel,
  ReleaseState
} from "@novastore/shared-types";

export interface AdminContext {
  actorUserId: string;
  role: AdminRole;
  organizationId: string;
}

export interface AppRecord {
  id: string;
  organizationId: string;
  packageName: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  publisherName: string;
  visibility: AppVisibility;
  status: AppStatus;
  trustedSigningCertSha256: string | null;
  developerVerificationPackageStatus: "unknown" | "registered" | "pending" | "blocked";
  createdAt: Date;
  updatedAt: Date;
}

export interface ArtifactRecord {
  id: string;
  appId: string;
  artifactType: "apk" | "aab" | "apks";
  originalFileName: string;
  releaseStorageKey: string;
  publicDownloadUrl: string | null;
  sizeBytes: number;
  sha256: string;
  state: "ready_for_review" | "promoted";
  createdAt: Date;
  updatedAt: Date;
}

export interface ReleaseRecord {
  id: string;
  appId: string;
  artifactId: string;
  channel: ReleaseChannel;
  versionCode: number;
  versionName: string;
  packageName: string;
  releaseNotes: string;
  state: ReleaseState;
  rolloutPercent: number;
  minSdk: number | null;
  targetSdk: number | null;
  signingCertSha256: string;
  artifactSha256: string;
  artifactSizeBytes: number;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuditRecord {
  id: string;
  organizationId: string | null;
  actorUserId: string | null;
  action: string;
  targetType: string;
  targetId: string;
  metadata: Record<string, unknown>;
  createdAt: Date;
}

export interface DeviceRecord {
  id: string;
  clientInstallationIdHash: string;
  firstSeenAt: Date;
  lastSeenAt: Date;
  lastApiLevel: number | null;
  lastStoreVersionCode: number | null;
  createdAt: Date;
  updatedAt: Date;
}

interface DemoReleaseSeed {
  id: string;
  artifactId: string;
  releaseId: string;
  packageName: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  publisherName: string;
  trustedSigningCertSha256: string;
  developerVerificationPackageStatus: "unknown" | "registered" | "pending" | "blocked";
  originalFileName: string;
  releaseStorageKey: string;
  publicDownloadUrl: string;
  sizeBytes: number;
  sha256: string;
  channel: ReleaseChannel;
  versionCode: number;
  versionName: string;
  minSdk: number;
  targetSdk: number;
  releaseNotes: string;
}

const demoReleaseSeeds: DemoReleaseSeed[] = [
  {
    id: "app_novastore",
    artifactId: "art_novastore_10",
    releaseId: "rel_novastore_10",
    packageName: "com.novastore.client",
    name: "NovaStore",
    shortDescription: "Private Android app store for our own APKs.",
    fullDescription: "NovaStore installs and updates Tony's Android apps from a verified public catalog while respecting Android installer approval and package-signature rules.",
    category: "Store",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "NovaStore-v0.1.9.apk",
    releaseStorageKey: "github:yustein/NovaStore:novastore-v0.1.9/NovaStore-v0.1.9.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/novastore-v0.1.9/NovaStore-v0.1.9.apk",
    sizeBytes: 18502661,
    sha256: "be30faebac18e9c4872fa9fee6456d55097b2cbaee23a94293023ffa8b08dd12",
    channel: "stable",
    versionCode: 10,
    versionName: "0.1.9",
    minSdk: 26,
    targetSdk: 36,
    releaseNotes: "Checks GitHub contents API on every foreground return and adds pull-to-refresh on Apps and Updates.",
  },
  {
    id: "app_antikythera",
    artifactId: "art_antikythera_2",
    releaseId: "rel_antikythera_2",
    packageName: "com.lenomila.antikythera",
    name: "Antikythera",
    shortDescription: "Interactive Antikythera mechanism reconstruction prototype.",
    fullDescription: "Native Java Antikythera mechanism reconstruction with animated gears, dials, evidence tiers, exploded view, Learn/Gallery/Sources tabs, and source-honest uncertainty copy.",
    category: "Science",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "Antikythera-v0.1.1.apk",
    releaseStorageKey: "github:yustein/NovaStore:antikythera-v0.1.1/Antikythera-v0.1.1.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/antikythera-v0.1.1/Antikythera-v0.1.1.apk",
    sizeBytes: 903445,
    sha256: "5705333fbbbc1864234dc5eb68ed5c5db8f6e20bc7213df847b75212685a1a33",
    channel: "stable",
    versionCode: 2,
    versionName: "0.1.1",
    minSdk: 26,
    targetSdk: 36,
    releaseNotes: "Adds the source-honest Antikythera mechanism reconstruction prototype with animated gear/dial surfaces, evidence-tier overlays, and learn/gallery/source views.",
  },
  {
    id: "app_auroraweather",
    artifactId: "art_auroraweather_57",
    releaseId: "rel_auroraweather_57",
    packageName: "com.lenomila.auroraweather",
    name: "Aurora Weather",
    shortDescription: "Weather, radar, alerts, widgets, and space-weather tools.",
    fullDescription: "Aurora Weather combines Open-Meteo forecasts, RainViewer radar, USGS earthquake alerts, NOAA space weather, widgets, favorites, cached refresh state, and local notification checks.",
    category: "Weather",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "AuroraWeather-v3.0.20.apk",
    releaseStorageKey: "github:yustein/NovaStore:auroraweather-v3.0.20/AuroraWeather-v3.0.20.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/auroraweather-v3.0.20/AuroraWeather-v3.0.20.apk",
    sizeBytes: 2408458,
    sha256: "bd2b04f034d2e46c446ba39140fd7c00f1f6a31e2e98838ec5e3e0201809e03a",
    channel: "stable",
    versionCode: 57,
    versionName: "3.0.20",
    minSdk: 26,
    targetSdk: 35,
    releaseNotes: "Fixes app and widget rain prediction by ignoring past hourly rows and tiny trace signals.",
  },
  {
    id: "app_backgammonlan",
    artifactId: "art_backgammonlan_11",
    releaseId: "rel_backgammonlan_11",
    packageName: "com.lenomila.backgammon",
    name: "Backgammon LAN",
    shortDescription: "LAN backgammon with Android and Windows compatibility.",
    fullDescription: "Backgammon LAN plays local white-vs-computer games and hosts or joins LAN opponents with Android NSD/mDNS, socket sync, animations, sounds, and reconnect handling.",
    category: "Games",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "BackgammonLAN-v0.1.10.apk",
    releaseStorageKey: "github:yustein/NovaStore:backgammonlan-v0.1.10/BackgammonLAN-v0.1.10.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/backgammonlan-v0.1.10/BackgammonLAN-v0.1.10.apk",
    sizeBytes: 916908,
    sha256: "b92063e76ba776b953c51a415afebfe67d421f13034062b04e0c4df65b84369d",
    channel: "stable",
    versionCode: 11,
    versionName: "0.1.10",
    minSdk: 26,
    targetSdk: 35,
    releaseNotes: "Adds heartbeat-notified LAN backgammon reliability improvements with Android/Windows compatible discovery, reconnect, and board sync behavior.",
  },
  {
    id: "app_calcfx",
    artifactId: "art_calcfx_2",
    releaseId: "rel_calcfx_2",
    packageName: "com.lenomila.calcfx",
    name: "CalcFX",
    shortDescription: "Calculator prototype for quick everyday calculations.",
    fullDescription: "CalcFX is a lightweight Android calculator prototype built as part of the Lenomila Android app set.",
    category: "Tools",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "CalcFX-v0.1.1.apk",
    releaseStorageKey: "github:yustein/NovaStore:calcfx-v0.1.1/CalcFX-v0.1.1.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/calcfx-v0.1.1/CalcFX-v0.1.1.apk",
    sizeBytes: 905004,
    sha256: "74d23e3ef0e646b35ea1b4fdd3bf32a9aacd92d4548510356601b7d0a3cbf733",
    channel: "stable",
    versionCode: 2,
    versionName: "0.1.1",
    minSdk: 26,
    targetSdk: 36,
    releaseNotes: "Publishes the latest CalcFX Android calculator prototype to NovaStore.",
  },
  {
    id: "app_carpetmeasure",
    artifactId: "art_carpetmeasure_10",
    releaseId: "rel_carpetmeasure_10",
    packageName: "com.lenomila.carpetmeasure",
    name: "Carpet Measure",
    shortDescription: "AR carpet and room measurement prototype.",
    fullDescription: "Carpet Measure uses ARCore/Sceneform corner measurement with MediaPipe segmentation support for carpet and room measurement experiments.",
    category: "Tools",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "CarpetMeasure-v0.1.9.apk",
    releaseStorageKey: "github:yustein/NovaStore:carpetmeasure-v0.1.9/CarpetMeasure-v0.1.9.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/carpetmeasure-v0.1.9/CarpetMeasure-v0.1.9.apk",
    sizeBytes: 23839669,
    sha256: "0be6bff3f3eb412d40d03c5ff07946874b8d117581f575efd413b4de5e9fc338",
    channel: "stable",
    versionCode: 10,
    versionName: "0.1.9",
    minSdk: 26,
    targetSdk: 36,
    releaseNotes: "Publishes the latest AR carpet measurement prototype with corner measurement and segmentation support.",
  },
  {
    id: "app_clawdeck",
    artifactId: "art_clawdeck_25",
    releaseId: "rel_clawdeck_25",
    packageName: "com.clawdeck",
    name: "ClawDeck",
    shortDescription: "Mobile OpenClaw fleet console with SSH-first chat and tools.",
    fullDescription: "ClawDeck manages saved OpenClaw servers through pinned SSH, encrypted saved passwords, command history, jobs, sessions, and full-screen streaming chat with locally stored history.",
    category: "Tools",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "ClawDeck-v1.0.24.apk",
    releaseStorageKey: "github:yustein/NovaStore:clawdeck-v1.0.24/ClawDeck-v1.0.24.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/clawdeck-v1.0.24/ClawDeck-v1.0.24.apk",
    sizeBytes: 306875,
    sha256: "647ea538e2c156ffe5af924145affeec6b3e95084bd940b8b2439c4cfee249e5",
    channel: "stable",
    versionCode: 25,
    versionName: "1.0.24",
    minSdk: 23,
    targetSdk: 35,
    releaseNotes: "Stores chat history locally on the Android device so conversations remain available after app close, background idle, and relaunch.",
  },
  {
    id: "app_echoatlas",
    artifactId: "art_echoatlas_6",
    releaseId: "rel_echoatlas_6",
    packageName: "com.lenomila.echoatlas",
    name: "Echo Atlas",
    shortDescription: "Voice and echo analysis atlas prototype.",
    fullDescription: "Echo Atlas is a native Android prototype in the Lenomila tools set for exploring voice, echo, and local analysis workflows.",
    category: "Tools",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "EchoAtlas-v0.1.5.apk",
    releaseStorageKey: "github:yustein/NovaStore:echoatlas-v0.1.5/EchoAtlas-v0.1.5.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/echoatlas-v0.1.5/EchoAtlas-v0.1.5.apk",
    sizeBytes: 910311,
    sha256: "2179287c1ae7e89f5df7bd5c2411e2de639da25007e1e10773c219a413e4e342",
    channel: "stable",
    versionCode: 6,
    versionName: "0.1.5",
    minSdk: 26,
    targetSdk: 36,
    releaseNotes: "Publishes the latest Echo Atlas Android prototype to NovaStore.",
  },
  {
    id: "app_fileatlas",
    artifactId: "art_fileatlas_5",
    releaseId: "rel_fileatlas_5",
    packageName: "com.lenomila.fileatlas",
    name: "File Atlas",
    shortDescription: "Android file atlas and local browsing prototype.",
    fullDescription: "File Atlas is a native Android file-browsing and local file-atlas prototype for the Lenomila app set.",
    category: "Tools",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "FileAtlas-v0.1.4.apk",
    releaseStorageKey: "github:yustein/NovaStore:fileatlas-v0.1.4/FileAtlas-v0.1.4.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/fileatlas-v0.1.4/FileAtlas-v0.1.4.apk",
    sizeBytes: 917628,
    sha256: "004308b0c70009fe44d51fea5e67226bf683d8bb546246af374eef39fb0a4b4a",
    channel: "stable",
    versionCode: 5,
    versionName: "0.1.4",
    minSdk: 26,
    targetSdk: 36,
    releaseNotes: "Publishes the latest File Atlas Android prototype to NovaStore.",
  },
  {
    id: "app_gatewayfieldbook",
    artifactId: "art_gatewayfieldbook_5",
    releaseId: "rel_gatewayfieldbook_5",
    packageName: "com.lenomila.gatewayfieldbook",
    name: "Gateway Fieldbook",
    shortDescription: "Gateway Fieldbook reference and recovery notes.",
    fullDescription: "Gateway Fieldbook is a recovered fieldbook/reference app with local guide material and no networked account requirements.",
    category: "Reference",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "GatewayFieldbook-v1.3.0.apk",
    releaseStorageKey: "github:yustein/NovaStore:gatewayfieldbook-v1.3.0/GatewayFieldbook-v1.3.0.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/gatewayfieldbook-v1.3.0/GatewayFieldbook-v1.3.0.apk",
    sizeBytes: 905592,
    sha256: "29964a09beffeff9617b02da7479fe48a12dd65b700980d356fc76255618e813",
    channel: "stable",
    versionCode: 5,
    versionName: "1.3.0",
    minSdk: 26,
    targetSdk: 35,
    releaseNotes: "Publishes the recovered Gateway Fieldbook v1.3.0 build to NovaStore.",
  },
  {
    id: "app_muzoplay",
    artifactId: "art_muzoplay_24",
    releaseId: "rel_muzoplay_24",
    packageName: "com.lenomila.muzoplay",
    name: "MuzoPlay",
    shortDescription: "IPTV player-only prototype with Media3/VLC playback.",
    fullDescription: "MuzoPlay is a native Java/Media3 IPTV player prototype with VLC fallback, provider imports, EPG/channel mapping, VOD search, fullscreen controls, PiP, and diagnostics.",
    category: "Media",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "MuzoPlay-v0.1.23.apk",
    releaseStorageKey: "github:yustein/NovaStore:muzoplay-v0.1.23/MuzoPlay-v0.1.23.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/muzoplay-v0.1.23/MuzoPlay-v0.1.23.apk",
    sizeBytes: 30942765,
    sha256: "0a0553798729f041cdc18aa454da2bad9ac67afdb035f4372ccc974d66dda2db",
    channel: "stable",
    versionCode: 24,
    versionName: "0.1.23",
    minSdk: 26,
    targetSdk: 36,
    releaseNotes: "Adds the latest MuzoPlay IPTV player build with dense browsing, VLC fallback, VOD search, subtitle/audio controls, and fullscreen improvements.",
  },
  {
    id: "app_quakeglobe",
    artifactId: "art_quakeglobe_8",
    releaseId: "rel_quakeglobe_8",
    packageName: "com.lenomila.quakeglobe",
    name: "Quake Globe",
    shortDescription: "Live earthquake monitor with a 3D globe.",
    fullDescription: "Quake Globe is a native Java earthquake monitor with an OpenGL ES 2.0 globe, USGS feeds, layer controls, event lists, alert rules, and source/privacy views.",
    category: "Science",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "QuakeGlobe-v0.1.7.apk",
    releaseStorageKey: "github:yustein/NovaStore:quakeglobe-v0.1.7/QuakeGlobe-v0.1.7.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/quakeglobe-v0.1.7/QuakeGlobe-v0.1.7.apk",
    sizeBytes: 1519525,
    sha256: "8025eafbc83621c473a723d400c802fbc7a2c67bafcbdc6f4aa4e0317f1264fe",
    channel: "stable",
    versionCode: 8,
    versionName: "0.1.7",
    minSdk: 26,
    targetSdk: 36,
    releaseNotes: "Publishes the latest Quake Globe earthquake monitor with corrected globe alignment, event picking, alert rules, and source-honest earthquake feeds.",
  },
  {
    id: "app_resonancefinder",
    artifactId: "art_resonancefinder_1",
    releaseId: "rel_resonancefinder_1",
    packageName: "com.lenomila.resonancefinder",
    name: "Resonance Finder",
    shortDescription: "Resonance finder prototype for acoustic experiments.",
    fullDescription: "Resonance Finder is an Android prototype for exploring resonance and frequency-finding workflows.",
    category: "Science",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "ResonanceFinder-v0.1.0.apk",
    releaseStorageKey: "github:yustein/NovaStore:resonancefinder-v0.1.0/ResonanceFinder-v0.1.0.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/resonancefinder-v0.1.0/ResonanceFinder-v0.1.0.apk",
    sizeBytes: 874789,
    sha256: "a2771ddef4bdc0cf5209d4bec2eac99b5feaf2df85ca970c71e59e2d0929b671",
    channel: "stable",
    versionCode: 1,
    versionName: "0.1.0",
    minSdk: 26,
    targetSdk: 36,
    releaseNotes: "Publishes the first Resonance Finder Android APK to NovaStore.",
  },
  {
    id: "app_resonancelab",
    artifactId: "art_resonancelab_4",
    releaseId: "rel_resonancelab_4",
    packageName: "fyi.metatron.resonancelab",
    name: "Resonance Lab",
    shortDescription: "Acoustic resonance lab prototype.",
    fullDescription: "Resonance Lab is an acoustic resonance prototype for local frequency and resonance experiments.",
    category: "Science",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "2f251bc0a8c8ee73f48e88b31889c834035f83ce9281d9b16e7a7fb0010ae395",
    developerVerificationPackageStatus: "registered",
    originalFileName: "ResonanceLab-v0.1.3.apk",
    releaseStorageKey: "github:yustein/NovaStore:resonancelab-v0.1.3/ResonanceLab-v0.1.3.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/resonancelab-v0.1.3/ResonanceLab-v0.1.3.apk",
    sizeBytes: 28761,
    sha256: "92fef8233be2354a0c7bfeb023aecb4a6d6814555c3278d482ac1ab5dcdae6f1",
    channel: "stable",
    versionCode: 4,
    versionName: "0.1.3",
    minSdk: 26,
    targetSdk: 35,
    releaseNotes: "Publishes the latest Resonance Lab acoustic prototype to NovaStore.",
  },
  {
    id: "app_speedtestlab",
    artifactId: "art_speedtestlab_6",
    releaseId: "rel_speedtestlab_6",
    packageName: "com.lenomila.speedtest",
    name: "Speed Test Lab",
    shortDescription: "Speed test lab prototype.",
    fullDescription: "Speed Test Lab is a lightweight Android prototype for speed testing and network measurement experiments.",
    category: "Tools",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "SpeedTestLab-v0.1.5.apk",
    releaseStorageKey: "github:yustein/NovaStore:speedtestlab-v0.1.5/SpeedTestLab-v0.1.5.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/speedtestlab-v0.1.5/SpeedTestLab-v0.1.5.apk",
    sizeBytes: 908612,
    sha256: "d7ec76ae5b07dad6686939f392692189695cf55a701e14a7a8e8c200a678b7ba",
    channel: "stable",
    versionCode: 6,
    versionName: "0.1.5",
    minSdk: 26,
    targetSdk: 36,
    releaseNotes: "Publishes the latest Speed Test Lab Android prototype to NovaStore.",
  },
  {
    id: "app_speedcockpit",
    artifactId: "art_speedcockpit_14",
    releaseId: "rel_speedcockpit_14",
    packageName: "com.lenomila.speedcockpit",
    name: "SpeedCockpit",
    shortDescription: "GPS cockpit speedometer with maps and alerts.",
    fullDescription: "SpeedCockpit is a GPS/sensor cockpit speedometer with many visual styles, map dashboard modes, speed-limit checks, warning tones, and stationary drift protection.",
    category: "Navigation",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "SpeedCockpit-v0.1.13.apk",
    releaseStorageKey: "github:yustein/NovaStore:speedcockpit-v0.1.13/SpeedCockpit-v0.1.13.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/speedcockpit-v0.1.13/SpeedCockpit-v0.1.13.apk",
    sizeBytes: 2491123,
    sha256: "33368b1bbb81b58b514b40e89d8f0eb39334d2b5605898e807958bebbd0d0d0e",
    channel: "stable",
    versionCode: 14,
    versionName: "0.1.13",
    minSdk: 26,
    targetSdk: 36,
    releaseNotes: "Publishes the latest SpeedCockpit build with map cockpit modes, stricter speed-limit display, warning tones, and reduced map tile flicker.",
  },
  {
    id: "app_turkeytourism",
    artifactId: "art_turkeytourism_12",
    releaseId: "rel_turkeytourism_12",
    packageName: "fyi.metatron.turkeytourist",
    name: "Turkey Tourism",
    shortDescription: "Turkey travel guide prototype.",
    fullDescription: "Turkey Tourism is an Android travel guide prototype for Turkey with bundled guide content and map-oriented travel workflows.",
    category: "Travel",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "2f251bc0a8c8ee73f48e88b31889c834035f83ce9281d9b16e7a7fb0010ae395",
    developerVerificationPackageStatus: "registered",
    originalFileName: "TurkeyTourism-v1.4.7.apk",
    releaseStorageKey: "github:yustein/NovaStore:turkeytourism-v1.4.7/TurkeyTourism-v1.4.7.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/turkeytourism-v1.4.7/TurkeyTourism-v1.4.7.apk",
    sizeBytes: 18563607,
    sha256: "cbeed03a5b423ef93ef0d7d694eee7e62f8e7c98b07a77d7960d97ce8038771b",
    channel: "stable",
    versionCode: 12,
    versionName: "1.4.7",
    minSdk: 26,
    targetSdk: 35,
    releaseNotes: "Publishes the latest Turkey Tourism travel guide prototype to NovaStore.",
  },
  {
    id: "app_wavevid",
    artifactId: "art_wavevid_4",
    releaseId: "rel_wavevid_4",
    packageName: "com.lenomila.wavevid",
    name: "WaveVid",
    shortDescription: "Waveform video tool prototype.",
    fullDescription: "WaveVid is an Android media prototype for waveform/video-oriented experiments in the Lenomila app set.",
    category: "Media",
    publisherName: "Lenomila",
    trustedSigningCertSha256: "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
    developerVerificationPackageStatus: "registered",
    originalFileName: "WaveVidAndroid-v0.1.3.apk",
    releaseStorageKey: "github:yustein/NovaStore:wavevid-v0.1.3/WaveVidAndroid-v0.1.3.apk",
    publicDownloadUrl: "https://github.com/yustein/NovaStore/releases/download/wavevid-v0.1.3/WaveVidAndroid-v0.1.3.apk",
    sizeBytes: 1007148,
    sha256: "a1995b27a22afaddbec35177e150cbf10c15ffbcf1285730c5868e7c24f0e1a7",
    channel: "stable",
    versionCode: 4,
    versionName: "0.1.3",
    minSdk: 26,
    targetSdk: 36,
    releaseNotes: "Publishes the latest WaveVid Android media prototype to NovaStore.",
  },
];

@Injectable()
export class StoreService {
  readonly organizationId = "org_demo";

  private apps = new Map<string, AppRecord>();
  private artifacts = new Map<string, ArtifactRecord>();
  private releases = new Map<string, ReleaseRecord>();
  private audits: AuditRecord[] = [];
  private devices = new Map<string, DeviceRecord>();
  private telemetryEventIds = new Set<string>();

  constructor() {
    this.seedDemoRecords();
  }

  listApps(): AppRecord[] {
    return [...this.apps.values()];
  }

  getApp(appId: string): AppRecord {
    const app = this.apps.get(appId);
    if (!app) throw new NotFoundException("App not found");
    return app;
  }

  findAppByPackage(packageName: string): AppRecord | undefined {
    return this.listApps().find((app) => app.packageName === packageName);
  }

  saveApp(app: AppRecord): AppRecord {
    this.apps.set(app.id, app);
    return app;
  }

  listReleases(): ReleaseRecord[] {
    return [...this.releases.values()];
  }

  getRelease(releaseId: string): ReleaseRecord {
    const release = this.releases.get(releaseId);
    if (!release) throw new NotFoundException("Release not found");
    return release;
  }

  saveRelease(release: ReleaseRecord): ReleaseRecord {
    this.releases.set(release.id, release);
    return release;
  }

  getArtifact(artifactId: string): ArtifactRecord {
    const artifact = this.artifacts.get(artifactId);
    if (!artifact) throw new NotFoundException("Artifact not found");
    return artifact;
  }

  appendAudit(input: Omit<AuditRecord, "id" | "createdAt">): AuditRecord {
    const record: AuditRecord = {
      id: `aud_${ulid()}`,
      createdAt: new Date(),
      ...input
    };
    this.audits.unshift(record);
    return record;
  }

  listAudit(): AuditRecord[] {
    return this.audits.slice();
  }

  upsertDevice(input: {
    clientInstallationIdHash: string;
    apiLevel?: number;
    storeVersionCode?: number;
  }): DeviceRecord {
    const existing = this.devices.get(input.clientInstallationIdHash);
    const now = new Date();
    if (existing) {
      existing.lastSeenAt = now;
      existing.lastApiLevel = input.apiLevel ?? existing.lastApiLevel;
      existing.lastStoreVersionCode = input.storeVersionCode ?? existing.lastStoreVersionCode;
      existing.updatedAt = now;
      return existing;
    }

    const device: DeviceRecord = {
      id: `dev_${ulid()}`,
      clientInstallationIdHash: input.clientInstallationIdHash,
      firstSeenAt: now,
      lastSeenAt: now,
      lastApiLevel: input.apiLevel ?? null,
      lastStoreVersionCode: input.storeVersionCode ?? null,
      createdAt: now,
      updatedAt: now
    };
    this.devices.set(input.clientInstallationIdHash, device);
    return device;
  }

  acceptTelemetryEvent(eventId: string): boolean {
    if (this.telemetryEventIds.has(eventId)) return false;
    this.telemetryEventIds.add(eventId);
    return true;
  }

  makeId(prefix: string): string {
    return `${prefix}_${ulid()}`;
  }

  private seedDemoRecords(): void {
    const now = new Date();
    for (const seed of demoReleaseSeeds) {
      const app: AppRecord = {
        id: seed.id,
        organizationId: this.organizationId,
        packageName: seed.packageName,
        name: seed.name,
        shortDescription: seed.shortDescription,
        fullDescription: seed.fullDescription,
        category: seed.category,
        publisherName: seed.publisherName,
        visibility: "public",
        status: "active",
        trustedSigningCertSha256: seed.trustedSigningCertSha256,
        developerVerificationPackageStatus: seed.developerVerificationPackageStatus,
        createdAt: now,
        updatedAt: now
      };

      const artifact: ArtifactRecord = {
        id: seed.artifactId,
        appId: app.id,
        artifactType: "apk",
        originalFileName: seed.originalFileName,
        releaseStorageKey: seed.releaseStorageKey,
        publicDownloadUrl: seed.publicDownloadUrl,
        sizeBytes: seed.sizeBytes,
        sha256: seed.sha256,
        state: "promoted",
        createdAt: now,
        updatedAt: now
      };

      const release: ReleaseRecord = {
        id: seed.releaseId,
        appId: app.id,
        artifactId: artifact.id,
        channel: seed.channel,
        versionCode: seed.versionCode,
        versionName: seed.versionName,
        packageName: app.packageName,
        releaseNotes: seed.releaseNotes,
        state: "rollout_active",
        rolloutPercent: 100,
        minSdk: seed.minSdk,
        targetSdk: seed.targetSdk,
        signingCertSha256: seed.trustedSigningCertSha256,
        artifactSha256: artifact.sha256,
        artifactSizeBytes: artifact.sizeBytes,
        publishedAt: now,
        createdAt: now,
        updatedAt: now
      };

      this.apps.set(app.id, app);
      this.artifacts.set(artifact.id, artifact);
      this.releases.set(release.id, release);
    }
  }
}
