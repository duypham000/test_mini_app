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

const useSocketCompanySummary = (props: Props) => {
  const { messages = [] } = props;

  const ws = React.useRef<WebSocket>();
  const [readyState, setReadyState] = React.useState<ReadyState>();
  const [countReset, setCountReset] = React.useState(0);

  React.useEffect(() => {
    ws.current = new WebSocket(
      process.env.NEXT_PUBLIC_WEB_SOCKET_URL as string
    );
    setReadyState(ws.current.readyState);

    ws.current.onopen = () => {
      setReadyState(ws.current?.readyState);
    };

    ws.current.onerror = () => {
      setReadyState(ws.current?.readyState);
    };

    ws.current.onclose = () => {
      setReadyState(ws.current?.readyState);
    };

    ws.current.onmessage = (ev: MessageEvent<any>) => {
      try {
        const json = JSON.parse(ev.data);

        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };
  }, [countReset]);

  React.useEffect(() => {
    let reconnect: any;

    if (readyState === ReadyState.CLOSED) {
      reconnect = setInterval(() => {
        setCountReset((count) => count + 1);
      }, 20000);
    }

    return () => {
      if (reconnect) {
        clearInterval(reconnect);
      }
    };
  }, [readyState]);

  // React.useEffect(() => {
  //   let interval: any;

  //   if (readyState === ReadyState.OPEN) {
  //     interval = setInterval(() => {
  //       ws.current?.send(JSON.stringify({ event: 'ping' }));
  //     }, 30000);
  //   }

  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // }, [readyState]);

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

export default useSocketCompanySummary;
