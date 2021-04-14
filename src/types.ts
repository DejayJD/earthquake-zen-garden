export type Profile = {
  firstName: string;
  lastName: string;
  avatarImage: string;
  phone: string;
  email: string;
  bio: string;
};

export type Feature = {
  type: string;
  properties: {
    mag: number;
    place: string;
    time: number;
    updated: number;
    tz: number;
    url: string;
    detail: string;
    felt: number | null; // null in data
    cdi: unknown | null; // null in data
    mmi: unknown | null; // null in data
    alert: unknown | null; // null in data
    status: string;
    tsunami: number;
    sig: number;
    net: string;
    code: string;
    ids: string;
    sources: string;
    types: string;
    nst: number;
    dmin: number;
    rms: number;
    gap: number;
    magType: string;
    type: string;
    title: string;
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
  id: string;
};

export type FeatureCollectionData = {
  type: string;
  metadata: {
    generated: number;
    url: string;
    title: string;
    status: number;
    api: string;
    count: number;
  };
  features: Feature[];
};
