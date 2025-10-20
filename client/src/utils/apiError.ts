import axios from "axios";

// Returns user-friendly error message from an Axios error
export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message ?? error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "Unexpected error occurred. Please try again.";
}
