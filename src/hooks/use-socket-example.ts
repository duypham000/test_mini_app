import React from 'react';

enum ReadyState {
  'CONNECTING' = 0,
  'OPEN' = 1,
  'CLOSING' = 2,
  'CLOSED' = 3,
}

interface Props {
  messages?: string[];
}

const useSocketExample = (props: Props) => {
  const { messages = [] } = props;

  const ws = React.useRef<WebSocket>();
  const [readyState, setReadyState] = React.useState<ReadyState>();
  const [countReset, setCountReset] = React.useState(0);

  React.useEffect(() => {
    ws.current = new WebSocket(`wss://stream.binance.com/stream`);
    setReadyState(ws.current.readyState);

    ws.current.onopen = () => {
      console.log('WebSocket is connected!');
      setReadyState(ws.current?.readyState);
    };

    ws.current.onerror = () => {
      console.log('WebSocket is error!');
      setReadyState(ws.current?.readyState);
    };

    ws.current.onclose = () => {
      console.log('WebSocket is closed!');
      setReadyState(ws.current?.readyState);
    };

    ws.current.onmessage = (ev: MessageEvent<any>) => {
      console.log('MessageEvent', JSON.parse(ev.data));
    };
  }, [countReset]);

  React.useEffect(() => {
    let reconnect: any;

    if (readyState === ReadyState.CLOSED) {
      reconnect = setInterval(() => {
        setCountReset((count) => count + 1);
      }, 3000);
    }

    return () => {
      if (reconnect) {
        clearInterval(reconnect);
      }
    };
  }, [readyState]);

  React.useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      messages.forEach((message) => {
        ws.current?.send(message);
      });
    }
  }, [readyState, JSON.stringify(messages)]);

  const handleClose = () => {
    ws.current?.close();
  };

  const handleReset = () => {
    setCountReset((count) => count + 1);
    setReadyState(undefined);
    ws.current?.close();
  };

  return { ws: ws.current, onClose: handleClose, onReset: handleReset };
};

export default useSocketExample;
