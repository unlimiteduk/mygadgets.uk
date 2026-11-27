import type { Model } from "@/data/models";

export const DEVICE_SLUG_TO_MODEL_DEVICE: Record<
  string,
  Model["device"] | null
> = {
  macbook: "MacBook",
  iphone: "iPhone",
  ipad: "iPad",
  samsung: "Galaxy",
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
  fulfilment: "walk-in" | "pickup";
  name: string;
  phone: string;
  slot: string;
  ticket: string;
}

export function faultsTotal(faults: SelectedFault[]): number | null {
  if (!faults.length) return null;
  const prices = faults.map((fault) =>
    fault.price.match(/£\s*([0-9]+(?:\.[0-9]{1,2})?)/),
  );
  if (prices.some((price) => !price)) return null;
  return prices.reduce((sum, price) => sum + Number(price![1]), 0);
}
