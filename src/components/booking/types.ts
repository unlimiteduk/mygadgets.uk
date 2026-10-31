import type { Model } from '@/data/models';

export const DEVICE_SLUG_TO_MODEL_DEVICE: Record<string, Model['device'] | null> = {
  macbook: 'MacBook',
  iphone: 'iPhone',
  ipad: 'iPad',
  samsung: 'Galaxy',
  laptop: null,
  playstation: null,
  xbox: null,
  imac: null,
  pc: null,
};

export interface SelectedFault {
  label: string;
  price: string;
  turnaround: string;
  serviceSlug?: string;
}

export interface BookingState {
  deviceSlug: string;
  deviceLabel: string;
  modelSlug: string;
  modelName: string;
  faults: SelectedFault[];
  needsDiagnosis: boolean;
  fulfilment: 'walk-in' | 'pickup';
  name: string;
  phone: string;
  slot: string;
  ticket: string;
}

export function faultsTotal(faults: SelectedFault[]): number {
  return faults.reduce((sum, f) => sum + (parseInt(f.price.replace(/[^\d]/g, ''), 10) || 0), 0);
}
