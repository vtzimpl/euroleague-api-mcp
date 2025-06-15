export interface ClubResponse {
  code: string;
  name: string;
  alias: string;
  isVirtual: boolean;
  country: {
    code: string;
    name: string;
  };
  address: string;
  website: string;
  ticketsUrl?: string;
  twitterAccount?: string;
  instagramAccount?: string;
  facebookAccount?: string;
  venue: VenueInfo | null;
  venueBackup: VenueInfo | null;
  nationalCompetitionCode: string | null;
  city: string;
  president?: string;
  phone?: string;
  fax?: string;
  images?: {
    crest?: string;
  };
}

export interface VenueInfo {
  name: string;
  code: string;
  capacity: number;
  address: string;
  images: Record<string, unknown>;
  active: boolean;
  notes?: string;
}
