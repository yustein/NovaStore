package com.novastore.client

import android.content.Context
import org.json.JSONArray
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL

const val NOVASTORE_PACKAGE = "com.novastore.client"
const val PUBLIC_CATALOG_INDEX_URL =
    "https://api.github.com/repos/yustein/NovaStore/contents/catalog/index.json?ref=main"

data class ReleaseInfo(
    val appRole: String,
    val packageName: String,
    val name: String,
    val publisherName: String,
    val category: String,
    val channel: String,
    val versionName: String,
    val versionCode: Long,
    val minSdk: Int,
    val targetSdk: Int,
    val sizeBytes: Long,
    val sha256: String,
    val signingCertSha256: String,
    val downloadUrl: String,
    val releaseId: String,
    val releaseNotes: String
)

private const val BUILT_IN_CATALOG_JSON = """
{
  "schemaVersion": 1,
  "generatedAt": "2026-06-09T18:04:36Z",
  "apps": [
    {
      "schemaVersion": 1,
      "appRole": "store",
      "packageName": "com.novastore.client",
      "name": "NovaStore",
      "publisherName": "Lenomila",
      "category": "Store",
      "channel": "stable",
      "versionName": "0.1.9",
      "versionCode": 10,
      "minSdk": 26,
      "targetSdk": 36,
      "sizeBytes": 18502661,
      "sha256": "be30faebac18e9c4872fa9fee6456d55097b2cbaee23a94293023ffa8b08dd12",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/novastore-v0.1.9/NovaStore-v0.1.9.apk",
      "releaseId": "rel_novastore_10",
      "releaseNotes": "Checks GitHub contents API on every foreground return and adds pull-to-refresh on Apps and Updates.",
      "publishedAt": "2026-06-09T17:27:39Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.lenomila.antikythera",
      "name": "Antikythera",
      "publisherName": "Lenomila",
      "category": "Science",
      "channel": "stable",
      "versionName": "0.1.1",
      "versionCode": 2,
      "minSdk": 26,
      "targetSdk": 36,
      "sizeBytes": 903445,
      "sha256": "5705333fbbbc1864234dc5eb68ed5c5db8f6e20bc7213df847b75212685a1a33",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/antikythera-v0.1.1/Antikythera-v0.1.1.apk",
      "releaseId": "rel_antikythera_2",
      "releaseNotes": "Adds the source-honest Antikythera mechanism reconstruction prototype with animated gear/dial surfaces, evidence-tier overlays, and learn/gallery/source views.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.lenomila.auroraweather",
      "name": "Aurora Weather",
      "publisherName": "Lenomila",
      "category": "Weather",
      "channel": "stable",
      "versionName": "3.0.20",
      "versionCode": 57,
      "minSdk": 26,
      "targetSdk": 35,
      "sizeBytes": 2408458,
      "sha256": "bd2b04f034d2e46c446ba39140fd7c00f1f6a31e2e98838ec5e3e0201809e03a",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/auroraweather-v3.0.20/AuroraWeather-v3.0.20.apk",
      "releaseId": "rel_auroraweather_57",
      "releaseNotes": "Fixes app and widget rain prediction by ignoring past hourly rows and tiny trace signals.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.lenomila.backgammon",
      "name": "Backgammon LAN",
      "publisherName": "Lenomila",
      "category": "Games",
      "channel": "stable",
      "versionName": "0.1.10",
      "versionCode": 11,
      "minSdk": 26,
      "targetSdk": 35,
      "sizeBytes": 916908,
      "sha256": "b92063e76ba776b953c51a415afebfe67d421f13034062b04e0c4df65b84369d",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/backgammonlan-v0.1.10/BackgammonLAN-v0.1.10.apk",
      "releaseId": "rel_backgammonlan_11",
      "releaseNotes": "Adds heartbeat-notified LAN backgammon reliability improvements with Android/Windows compatible discovery, reconnect, and board sync behavior.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.lenomila.calcfx",
      "name": "CalcFX",
      "publisherName": "Lenomila",
      "category": "Tools",
      "channel": "stable",
      "versionName": "0.1.1",
      "versionCode": 2,
      "minSdk": 26,
      "targetSdk": 36,
      "sizeBytes": 905004,
      "sha256": "74d23e3ef0e646b35ea1b4fdd3bf32a9aacd92d4548510356601b7d0a3cbf733",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/calcfx-v0.1.1/CalcFX-v0.1.1.apk",
      "releaseId": "rel_calcfx_2",
      "releaseNotes": "Publishes the latest CalcFX Android calculator prototype to NovaStore.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.lenomila.carpetmeasure",
      "name": "Carpet Measure",
      "publisherName": "Lenomila",
      "category": "Tools",
      "channel": "stable",
      "versionName": "0.1.9",
      "versionCode": 10,
      "minSdk": 26,
      "targetSdk": 36,
      "sizeBytes": 23839669,
      "sha256": "0be6bff3f3eb412d40d03c5ff07946874b8d117581f575efd413b4de5e9fc338",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/carpetmeasure-v0.1.9/CarpetMeasure-v0.1.9.apk",
      "releaseId": "rel_carpetmeasure_10",
      "releaseNotes": "Publishes the latest AR carpet measurement prototype with corner measurement and segmentation support.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.clawdeck",
      "name": "ClawDeck",
      "publisherName": "Lenomila",
      "category": "Tools",
      "channel": "stable",
      "versionName": "1.0.24",
      "versionCode": 25,
      "minSdk": 23,
      "targetSdk": 35,
      "sizeBytes": 306875,
      "sha256": "647ea538e2c156ffe5af924145affeec6b3e95084bd940b8b2439c4cfee249e5",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/clawdeck-v1.0.24/ClawDeck-v1.0.24.apk",
      "releaseId": "rel_clawdeck_25",
      "releaseNotes": "Stores chat history locally on the Android device so conversations remain available after app close, background idle, and relaunch.",
      "publishedAt": "2026-06-09T17:45:03Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.lenomila.echoatlas",
      "name": "Echo Atlas",
      "publisherName": "Lenomila",
      "category": "Tools",
      "channel": "stable",
      "versionName": "0.1.5",
      "versionCode": 6,
      "minSdk": 26,
      "targetSdk": 36,
      "sizeBytes": 910311,
      "sha256": "2179287c1ae7e89f5df7bd5c2411e2de639da25007e1e10773c219a413e4e342",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/echoatlas-v0.1.5/EchoAtlas-v0.1.5.apk",
      "releaseId": "rel_echoatlas_6",
      "releaseNotes": "Publishes the latest Echo Atlas Android prototype to NovaStore.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.lenomila.fileatlas",
      "name": "File Atlas",
      "publisherName": "Lenomila",
      "category": "Tools",
      "channel": "stable",
      "versionName": "0.1.4",
      "versionCode": 5,
      "minSdk": 26,
      "targetSdk": 36,
      "sizeBytes": 917628,
      "sha256": "004308b0c70009fe44d51fea5e67226bf683d8bb546246af374eef39fb0a4b4a",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/fileatlas-v0.1.4/FileAtlas-v0.1.4.apk",
      "releaseId": "rel_fileatlas_5",
      "releaseNotes": "Publishes the latest File Atlas Android prototype to NovaStore.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.lenomila.gatewayfieldbook",
      "name": "Gateway Fieldbook",
      "publisherName": "Lenomila",
      "category": "Reference",
      "channel": "stable",
      "versionName": "1.3.0",
      "versionCode": 5,
      "minSdk": 26,
      "targetSdk": 35,
      "sizeBytes": 905592,
      "sha256": "29964a09beffeff9617b02da7479fe48a12dd65b700980d356fc76255618e813",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/gatewayfieldbook-v1.3.0/GatewayFieldbook-v1.3.0.apk",
      "releaseId": "rel_gatewayfieldbook_5",
      "releaseNotes": "Publishes the recovered Gateway Fieldbook v1.3.0 build to NovaStore.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.lenomila.muzoplay",
      "name": "MuzoPlay",
      "publisherName": "Lenomila",
      "category": "Media",
      "channel": "stable",
      "versionName": "0.1.23",
      "versionCode": 24,
      "minSdk": 26,
      "targetSdk": 36,
      "sizeBytes": 30942765,
      "sha256": "0a0553798729f041cdc18aa454da2bad9ac67afdb035f4372ccc974d66dda2db",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/muzoplay-v0.1.23/MuzoPlay-v0.1.23.apk",
      "releaseId": "rel_muzoplay_24",
      "releaseNotes": "Adds the latest MuzoPlay IPTV player build with dense browsing, VLC fallback, VOD search, subtitle/audio controls, and fullscreen improvements.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.lenomila.quakeglobe",
      "name": "Quake Globe",
      "publisherName": "Lenomila",
      "category": "Science",
      "channel": "stable",
      "versionName": "0.1.7",
      "versionCode": 8,
      "minSdk": 26,
      "targetSdk": 36,
      "sizeBytes": 1519525,
      "sha256": "8025eafbc83621c473a723d400c802fbc7a2c67bafcbdc6f4aa4e0317f1264fe",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/quakeglobe-v0.1.7/QuakeGlobe-v0.1.7.apk",
      "releaseId": "rel_quakeglobe_8",
      "releaseNotes": "Publishes the latest Quake Globe earthquake monitor with corrected globe alignment, event picking, alert rules, and source-honest earthquake feeds.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.lenomila.resonancefinder",
      "name": "Resonance Finder",
      "publisherName": "Lenomila",
      "category": "Science",
      "channel": "stable",
      "versionName": "0.1.0",
      "versionCode": 1,
      "minSdk": 26,
      "targetSdk": 36,
      "sizeBytes": 874789,
      "sha256": "a2771ddef4bdc0cf5209d4bec2eac99b5feaf2df85ca970c71e59e2d0929b671",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/resonancefinder-v0.1.0/ResonanceFinder-v0.1.0.apk",
      "releaseId": "rel_resonancefinder_1",
      "releaseNotes": "Publishes the first Resonance Finder Android APK to NovaStore.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "fyi.metatron.resonancelab",
      "name": "Resonance Lab",
      "publisherName": "Lenomila",
      "category": "Science",
      "channel": "stable",
      "versionName": "0.1.3",
      "versionCode": 4,
      "minSdk": 26,
      "targetSdk": 35,
      "sizeBytes": 28761,
      "sha256": "92fef8233be2354a0c7bfeb023aecb4a6d6814555c3278d482ac1ab5dcdae6f1",
      "signingCertSha256": "2f251bc0a8c8ee73f48e88b31889c834035f83ce9281d9b16e7a7fb0010ae395",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/resonancelab-v0.1.3/ResonanceLab-v0.1.3.apk",
      "releaseId": "rel_resonancelab_4",
      "releaseNotes": "Publishes the latest Resonance Lab acoustic prototype to NovaStore.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.lenomila.speedtest",
      "name": "Speed Test Lab",
      "publisherName": "Lenomila",
      "category": "Tools",
      "channel": "stable",
      "versionName": "0.1.5",
      "versionCode": 6,
      "minSdk": 26,
      "targetSdk": 36,
      "sizeBytes": 908612,
      "sha256": "d7ec76ae5b07dad6686939f392692189695cf55a701e14a7a8e8c200a678b7ba",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/speedtestlab-v0.1.5/SpeedTestLab-v0.1.5.apk",
      "releaseId": "rel_speedtestlab_6",
      "releaseNotes": "Publishes the latest Speed Test Lab Android prototype to NovaStore.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.lenomila.speedcockpit",
      "name": "SpeedCockpit",
      "publisherName": "Lenomila",
      "category": "Navigation",
      "channel": "stable",
      "versionName": "0.1.13",
      "versionCode": 14,
      "minSdk": 26,
      "targetSdk": 36,
      "sizeBytes": 2491123,
      "sha256": "33368b1bbb81b58b514b40e89d8f0eb39334d2b5605898e807958bebbd0d0d0e",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/speedcockpit-v0.1.13/SpeedCockpit-v0.1.13.apk",
      "releaseId": "rel_speedcockpit_14",
      "releaseNotes": "Publishes the latest SpeedCockpit build with map cockpit modes, stricter speed-limit display, warning tones, and reduced map tile flicker.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "fyi.metatron.turkeytourist",
      "name": "Turkey Tourism",
      "publisherName": "Lenomila",
      "category": "Travel",
      "channel": "stable",
      "versionName": "1.4.7",
      "versionCode": 12,
      "minSdk": 26,
      "targetSdk": 35,
      "sizeBytes": 18563607,
      "sha256": "cbeed03a5b423ef93ef0d7d694eee7e62f8e7c98b07a77d7960d97ce8038771b",
      "signingCertSha256": "2f251bc0a8c8ee73f48e88b31889c834035f83ce9281d9b16e7a7fb0010ae395",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/turkeytourism-v1.4.7/TurkeyTourism-v1.4.7.apk",
      "releaseId": "rel_turkeytourism_12",
      "releaseNotes": "Publishes the latest Turkey Tourism travel guide prototype to NovaStore.",
      "publishedAt": "2026-06-09T18:20:10Z"
    },
    {
      "schemaVersion": 1,
      "appRole": "managed",
      "packageName": "com.lenomila.wavevid",
      "name": "WaveVid",
      "publisherName": "Lenomila",
      "category": "Media",
      "channel": "stable",
      "versionName": "0.1.3",
      "versionCode": 4,
      "minSdk": 26,
      "targetSdk": 36,
      "sizeBytes": 1007148,
      "sha256": "a1995b27a22afaddbec35177e150cbf10c15ffbcf1285730c5868e7c24f0e1a7",
      "signingCertSha256": "1320f7199695b914b2b58149d34b5026671b856791bf8fe3d0ec5d0cb70bcec6",
      "downloadUrl": "https://github.com/yustein/NovaStore/releases/download/wavevid-v0.1.3/WaveVidAndroid-v0.1.3.apk",
      "releaseId": "rel_wavevid_4",
      "releaseNotes": "Publishes the latest WaveVid Android media prototype to NovaStore.",
      "publishedAt": "2026-06-09T18:20:10Z"
    }
  ]
}
"""

private val builtInReleaseCatalog: List<ReleaseInfo> by lazy { parseCatalog(BUILT_IN_CATALOG_JSON) }

val builtInNovaStoreRelease: ReleaseInfo by lazy {
    builtInReleaseCatalog.first { it.packageName == NOVASTORE_PACKAGE }
}

val builtInAuroraRelease: ReleaseInfo by lazy {
    builtInReleaseCatalog.first { it.packageName == "com.lenomila.auroraweather" }
}

object ReleaseStore {
    private const val PREFS = "novastore_release_catalog"
    private const val KEY_JSON = "catalog_json"
    private const val KEY_LAST_REFRESH = "last_refresh_ms"

    fun current(context: Context): List<ReleaseInfo> {
        return cached(context).ifEmpty { builtInReleases() }
    }

    fun cached(context: Context): List<ReleaseInfo> {
        val json = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE).getString(KEY_JSON, null)
        return json?.let { runCatching { parseCatalog(it) }.getOrDefault(emptyList()) }.orEmpty()
    }

    fun lastRefreshMs(context: Context): Long {
        return context.getSharedPreferences(PREFS, Context.MODE_PRIVATE).getLong(KEY_LAST_REFRESH, 0L)
    }

    fun refreshBlocking(context: Context): List<ReleaseInfo> {
        val text = fetchText(PUBLIC_CATALOG_INDEX_URL)
        val releases = parseCatalog(text)
        context.getSharedPreferences(PREFS, Context.MODE_PRIVATE)
            .edit()
            .putString(KEY_JSON, text)
            .putLong(KEY_LAST_REFRESH, System.currentTimeMillis())
            .apply()
        return releases
    }

    fun builtInReleases(): List<ReleaseInfo> = builtInReleaseCatalog
}

fun parseCatalog(json: String): List<ReleaseInfo> {
    val root = JSONObject(json)
    val apps = root.optJSONArray("apps") ?: JSONArray().put(root)
    return (0 until apps.length()).map { index -> parseReleaseInfo(apps.getJSONObject(index)) }
}

fun parseReleaseInfo(json: String): ReleaseInfo {
    return parseReleaseInfo(JSONObject(json))
}

fun parseReleaseInfo(item: JSONObject): ReleaseInfo {
    return ReleaseInfo(
        appRole = item.optString("appRole", "managed"),
        packageName = item.getString("packageName"),
        name = item.getString("name"),
        publisherName = item.getString("publisherName"),
        category = item.getString("category"),
        channel = item.getString("channel"),
        versionName = item.getString("versionName"),
        versionCode = item.getLong("versionCode"),
        minSdk = item.getInt("minSdk"),
        targetSdk = item.getInt("targetSdk"),
        sizeBytes = item.getLong("sizeBytes"),
        sha256 = item.getString("sha256"),
        signingCertSha256 = item.getString("signingCertSha256"),
        downloadUrl = item.getString("downloadUrl"),
        releaseId = item.getString("releaseId"),
        releaseNotes = item.getString("releaseNotes")
    )
}

fun fetchText(url: String): String {
    val connection = (URL(url).openConnection() as HttpURLConnection).apply {
        connectTimeout = 12000
        readTimeout = 12000
        instanceFollowRedirects = true
        requestMethod = "GET"
        setRequestProperty("Accept", "application/vnd.github.raw+json")
        setRequestProperty("User-Agent", "NovaStore/0.1")
    }
    return try {
        if (connection.responseCode !in 200..299) {
            error("Catalog request failed with HTTP ${connection.responseCode}")
        }
        connection.inputStream.bufferedReader().use { it.readText() }
    } finally {
        connection.disconnect()
    }
}

fun formatBytes(bytes: Long): String {
    val mb = bytes / (1024.0 * 1024.0)
    return String.format("%.1f MB", mb)
}
