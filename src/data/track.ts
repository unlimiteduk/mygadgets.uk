// Mock booking tracker — no backend. Same booking ID always resolves to
// the same status so demos/screenshots stay consistent, but nothing here
// is a real job record.

export const TRACK_STAGES = ['Received', 'Diagnosed', 'Repairing', 'Quality check', 'Ready for pickup'] as const;
export type TrackStage = (typeof TRACK_STAGES)[number];

export interface TrackResult {
  ticket: string;
  device: string;
  stage: TrackStage;
  stageIndex: number;
  note: string;
}

const SAMPLE_DEVICES = [
  'iPhone 13 · screen replacement',
  'MacBook Air 13" M1 · battery replacement',
  'Galaxy S22 · screen replacement',
  'iPad 9th gen · charging port repair',
  'Dell XPS 13 · screen replacement',
];

const STAGE_NOTES: Record<TrackStage, string> = {
  Received: 'We have your device on the bench — diagnosis starts shortly.',
  Diagnosed: 'Fault confirmed and quoted — waiting on your approval to start.',
  Repairing: 'Work is underway. Screens and batteries are usually done within the hour.',
  'Quality check': 'Repair complete — every function is being tested before it leaves the bench.',
  'Ready for pickup': 'All done. Come in any time during opening hours, or reply to arrange collection.',
};

function hashString(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) h = (h * 31 + input.charCodeAt(i)) >>> 0;
  return h;
}

export function mockLookup(rawId: string): TrackResult | null {
  const id = rawId.trim().toUpperCase().replace(/^MG-?/, 'MG-');
  if (!/^MG-\d{3,4}$/.test(id)) return null;

  const h = hashString(id);
  const stageIndex = h % TRACK_STAGES.length;
  const stage = TRACK_STAGES[stageIndex];
  const device = SAMPLE_DEVICES[h % SAMPLE_DEVICES.length];

  return { ticket: id, device, stage, stageIndex, note: STAGE_NOTES[stage] };
}
