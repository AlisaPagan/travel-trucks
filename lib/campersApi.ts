import {
  CampersQueryParams,
  CamperListResponse,
  Filters,
  CamperDetails,
  Review,
  BookingRequest,
  BookingRequestResponse,
} from "@/types";
import { api } from "./api";

// ===== fetch campers list =====

export async function fetchCampers(
  params: CampersQueryParams,
): Promise<CamperListResponse> {
  const { data } = await api.get<CamperListResponse>("/campers", {
    params,
  });

  return data;
}

// ===== fetch filters =====

export async function fetchFilters(): Promise<Filters> {
  const { data } = await api.get<Filters>("/campers/filters");

  return data;
}

// ===== fetch camper by ID =====

export async function fetchCamperById(
  camperId: string,
): Promise<CamperDetails> {
  const { data } = await api.get<CamperDetails>(`/campers/${camperId}`);
  return data;
}

// ===== fetch reviews =====

export async function fetchReviews(camperId: string): Promise<Review[]> {
  const { data } = await api.get<Review[]>(`/campers/${camperId}/reviews`);
  return data;
}

// ===== make booking request =====

export async function makeBookingRequest(
  camperId: string,
  payload: BookingRequest,
): Promise<BookingRequestResponse> {
  const { data } = await api.post<BookingRequestResponse>(
    `/campers/${camperId}/booking-requests`,
    payload,
  );
  return data;
}
