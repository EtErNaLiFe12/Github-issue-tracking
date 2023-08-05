import { AxiosError, AxiosResponse } from 'axios';
import { useQuery, UseQueryOptions, useMutation, QueryKey } from 'react-query';
import get from 'lodash/get';
import map from 'lodash/map';
import isArray from 'lodash/isArray';
import http from '../../src/utils/axios';
import { VITE_GOOGLE_SHEET_API_KEY } from 'config';

// ----------------------------------------------------------------------

export const URLS = {
  // GET
  GET_SHEET: 'https://sheets.googleapis.com/v4/spreadsheets',
};

interface GoogleSheetsRes {
  majorDimension: string;
  range: string;
  values: Array<string[]>;
}

interface GoogleSheetsFinalRes {
  id: string;
  name: string;
  location: string;
  remark: string;
}

// API

// export async function verifySMS(input: VerifySMSInput): Promise<SmsVerificationResponse> {
//   const response = await http.post(URLS.VERIFY_SMS, input);
//   return response.data;
// }

// export async function checkDuplicate(input: DuplicateInput): Promise<boolean> {
//   const response = await http({
//     method: 'POST',
//     url: URLS.DUPLICATE_CHECK,
//     data: { ...input }
//   });
//   return response.data;
// }

// export async function registerPin(input: RegisterPinInput) {
//   const response = await http({
//     method: 'POST',
//     url: URLS.REGISTER_PIN,
//     data: { ...input }
//   });
//   return response.data;
// }

export async function getGoogleSheet(params: { spreadsheetId: string; range: string }) {
  const { spreadsheetId, range } = params;
  const apiKey = VITE_GOOGLE_SHEET_API_KEY;
  const { data } = (await http.get(
    URLS.GET_SHEET + `/${spreadsheetId}/values/${range}?key=${apiKey}`,
  )) as AxiosResponse<GoogleSheetsRes>;

  const rows = data?.values.slice(1);
  const headers = data?.values[0];
  const response = rows?.map((row: { [x: string]: any }) => {
    let obj = {} as any;
    headers?.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  }) as GoogleSheetsFinalRes[];

  return response;
}

export function useGetSheets<TData = GoogleSheetsFinalRes[]>(
  params: {
    spreadsheetId: string;
    range: string;
  },
  options?: UseQueryOptions<GoogleSheetsFinalRes[], AxiosError, TData>,
) {
  return useQuery('google-sheet-get' as QueryKey, () => getGoogleSheet(params), options);
}


