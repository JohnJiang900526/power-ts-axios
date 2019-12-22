import { isDate, isPlainObject } from "./util";

function encode(val: string): string {
  return encodeURIComponent(val)
  .replace(/%40/g, '@')
  .replace(/%3A/gi, ':')
  .replace(/%24/g, '$')
  .replace(/%2C/gi, ',')
  .replace(/%20/g, '+')
  .replace(/%5B/gi, '[')
  .replace(/%5D/gi, ']');
}

export function buildUrl (url: string, parmas?: any): string {
  if (!parmas) {
    return url;
  }

  const parts: string[] = [];

  Object.keys(parmas).forEach((key) => {
    const val = parmas[key];

    if (val === null || typeof val === "undefined") {
      return false;
    }

    let values = [];

    if (Array.isArray(val)) {
      values = val;
      key += '[]';
    } else {
      values = [val];
    }

    values.forEach((val) => {
      if (isDate(val)) {
        val = val.toISOString();
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val);
      }

      parts.push(`${encode(key)}=${encode(val)}`);
    });
  });

  let serializedParams = parts.join("&");

  if (serializedParams) {
    let markIndex = url.indexOf("#");
    if (markIndex !== -1) {
      url = url.slice(0, markIndex);
    }

    url += (url.indexOf('?') === -1 ? "?" : "&") + serializedParams;
  }

  return url;
}

