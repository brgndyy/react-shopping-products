import ERROR_MESSAGE from '@/constants/errorMessage';
import HttpError from '@/error/HttpError';

type FetchOption = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: BodyInit | null;
  headers?: HeadersInit;
};

const Fetcher = {
  get: async <T>(url: string, { headers = {} }: Partial<FetchOption> = {}): Promise<T> => {
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers,
      });

      if (!res.ok) {
        const error = new HttpError(ERROR_MESSAGE.FAIL_FETCH, res.status);
        throw error;
      }

      const data: T = await res.json();
      return data;
    } catch (err) {
      if (err instanceof HttpError) {
        throw err;
      } else {
        throw new HttpError(ERROR_MESSAGE.UNEXPECTED_ERROR, 500);
      }
    }
  },

  post: async (url: string, { body, headers = {} }: Partial<FetchOption>) => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        body,
        headers,
      });

      if (!res.ok) {
        const error = new HttpError(ERROR_MESSAGE.FAIL_FETCH, res.status);
        throw error;
      }
    } catch (err) {
      if (err instanceof HttpError) {
        throw err;
      } else {
        throw new HttpError(ERROR_MESSAGE.UNEXPECTED_ERROR, 500);
      }
    }
  },

  put: async (url: string, { body, headers = {} }: Partial<FetchOption>) => {
    try {
      const res = await fetch(url, {
        method: 'PUT',
        body,
        headers,
      });

      if (!res.ok) {
        const error = new HttpError(ERROR_MESSAGE.FAIL_FETCH, res.status);
        throw error;
      }
    } catch (err) {
      if (err instanceof HttpError) {
        throw err;
      } else {
        throw new HttpError(ERROR_MESSAGE.UNEXPECTED_ERROR, 500);
      }
    }
  },

  patch: async (url: string, { body, headers = {} }: Partial<FetchOption>) => {
    try {
      const res = await fetch(url, {
        method: 'PATCH',
        body,
        headers,
      });

      if (!res.ok) {
        const error = new HttpError(ERROR_MESSAGE.FAIL_FETCH, res.status);
        throw error;
      }
    } catch (err) {
      if (err instanceof HttpError) {
        throw err;
      } else {
        throw new HttpError(ERROR_MESSAGE.UNEXPECTED_ERROR, 500);
      }
    }
  },

  delete: async (url: string, { headers = {} }: Partial<FetchOption> = {}) => {
    try {
      const res = await fetch(url, {
        method: 'DELETE',
        headers,
      });

      if (!res.ok) {
        const error = new HttpError(ERROR_MESSAGE.FAIL_FETCH, res.status);
        throw error;
      }
    } catch (err) {
      if (err instanceof HttpError) {
        throw err;
      } else {
        throw new HttpError(ERROR_MESSAGE.UNEXPECTED_ERROR, 500);
      }
    }
  },
};

export default Fetcher;
