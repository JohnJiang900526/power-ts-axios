import {
  processHeaders,
  parseHeaders,
  flattenHeaders
} from "../../src/helpers/headers"; 

describe("helpers:header", () => {
  describe("parseHeaders", () => {
    test("should parse headers", () => {
      const parsed = parseHeaders(
        'Content-Type: application/json\r\n' +
        'Connection: keep-alive\r\n' +
        'Transfer-Encoding: chunked\r\n' +
        'Date: Tue, 21 May 2019 09:23:44 GMT\r\n' +
        ':aa\r\n' +
        'key:'
      );
      console.log(parsed)

      expect(parsed["content-type"]).toBe("application/json");
      expect(parsed["connection"]).toBe("keep-alive");
      expect(parsed["transfer-encoding"]).toBe("chunked");
      expect(parsed["date"]).toBe("Tue, 21 May 2019 09:23:44 GMT");
      expect(parsed["key"]).toBe("");
    });
  });
});

