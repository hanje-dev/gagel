import * as charCodes from 'charcodes';

export const lineBreak = /\r\n?|[\n\u2028\u2029]/;
export const lineBreakG = new RegExp(lineBreak.source, 'g');

export function isNewLine(code: number): boolean {
  switch (code) {
    case charCodes.lineBreak:
  }
}
