/** Socket has been created. The connection is not yet open. */
export function isWsConnecting(ws?: WebSocket | null) {
  return ws?.readyState === 0;
}

/** The connection is open and ready to communicate. */
export function isWsOpened(ws?: WebSocket | null) {
  return ws?.readyState === 1;
}

/** The connection is in the process of closing. */
export function isWsClosing(ws?: WebSocket | null) {
  return ws?.readyState === 2;
}

/** The connection is closed or couldn't be opened. */
export function isWsClosed(ws?: WebSocket | null) {
  return ws?.readyState === 3;
}
