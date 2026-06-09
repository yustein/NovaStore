import { describe, expect, it } from "vitest";
import { CatalogService } from "../src/catalog/catalog.service.js";
import { StoreService } from "../src/common/store.service.js";
import { UpdatesService } from "../src/updates/updates.service.js";

const catalogPackages = [
  "com.novastore.client",
  "com.lenomila.antikythera",
  "com.lenomila.auroraweather",
  "com.lenomila.backgammon",
  "com.lenomila.calcfx",
  "com.lenomila.carpetmeasure",
  "com.clawdeck",
  "com.lenomila.echoatlas",
  "com.lenomila.fileatlas",
  "com.lenomila.gatewayfieldbook",
  "com.lenomila.muzoplay",
  "com.lenomila.quakeglobe",
  "com.lenomila.resonancefinder",
  "fyi.metatron.resonancelab",
  "com.lenomila.speedtest",
  "com.lenomila.speedcockpit",
  "fyi.metatron.turkeytourist",
  "com.lenomila.wavevid"
];

describe("catalog and update logic", () => {
  it("serves every published Lenomila app in the seeded public catalog", () => {
    const store = new StoreService();
    const catalog = new CatalogService(store);

    const items = catalog.list();

    expect(items).toHaveLength(catalogPackages.length);
    expect(items.map((item) => item.packageName).sort()).toEqual([...catalogPackages].sort());
    expect(items.every((item) => item.trustLevel === "verified")).toBe(true);
  });

  it("serves Aurora Weather as the seeded public catalog app", () => {
    const store = new StoreService();
    const catalog = new CatalogService(store);

    const items = catalog.list({ q: "weather" });

    expect(items).toHaveLength(1);
    expect(items[0]?.packageName).toBe("com.lenomila.auroraweather");
    expect(items[0]?.latestVersionCode).toBe(57);
    expect(items[0]?.trustLevel).toBe("verified");
  });

  it("serves the current NovaStore self-update release", () => {
    const store = new StoreService();
    const catalog = new CatalogService(store);

    const items = catalog.list({ q: "novastore" });

    expect(items).toHaveLength(1);
    expect(items[0]?.packageName).toBe("com.novastore.client");
    expect(items[0]?.latestVersionCode).toBe(10);
    expect(items[0]?.trustLevel).toBe("verified");
  });

  it("serves ClawDeck as a seeded tools catalog app", () => {
    const store = new StoreService();
    const catalog = new CatalogService(store);

    const items = catalog.list({ q: "clawdeck" });

    expect(items).toHaveLength(1);
    expect(items[0]?.packageName).toBe("com.clawdeck");
    expect(items[0]?.latestVersionCode).toBe(25);
    expect(items[0]?.trustLevel).toBe("verified");
  });

  it("offers updates only for managed apps below the release version", () => {
    const store = new StoreService();
    const updates = new UpdatesService(store);

    const result = updates.check({
      clientInstallationId: "client-demo",
      channels: ["stable"],
      managedApps: [
        {
          packageName: "com.lenomila.auroraweather",
          installedVersionCode: 52,
          installedByNovaStore: true
        },
        {
          packageName: "com.example.other",
          installedVersionCode: 1,
          installedByNovaStore: false
        }
      ]
    });

    expect(result.updates).toHaveLength(1);
    expect(result.updates[0]?.releaseId).toBe("rel_auroraweather_57");
  });

  it("does not offer current or unmanaged apps", () => {
    const store = new StoreService();
    const updates = new UpdatesService(store);

    const result = updates.check({
      clientInstallationId: "client-demo",
      managedApps: [
        {
          packageName: "com.lenomila.auroraweather",
          installedVersionCode: 57,
          installedByNovaStore: true
        },
        {
          packageName: "com.lenomila.auroraweather",
          installedVersionCode: 52,
          installedByNovaStore: false
        }
      ]
    });

    expect(result.updates).toHaveLength(0);
  });
});
