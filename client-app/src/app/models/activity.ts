import { Profile } from "./Profile";

export type Activity = {
    id: string;
    title: string;
    date: Date | null;
    description: string;
    category: string;
    city: string;
    venue: string;

    hostUsername?: string;
    isCancelled?: boolean;
    attendees?: Profile[];

    isGoing?: boolean;
    isHost?: boolean;
    host?: Profile;
  }