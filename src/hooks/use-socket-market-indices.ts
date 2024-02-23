import React from 'react';

enum ReadyState {
  'CONNECTING' = 0,
  'OPEN' = 1,
  'CLOSING' = 2,
  'CLOSED' = 3,
}

interface Props {
  messages?: string[];
  setData: any;
}

const useSocketMarketIndices = (props: Props) => {
  const { messages = [], setData } = props;

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

        if (json?.topic === 'quotes' && json?.data?.length > 0) {
          json?.data?.forEach((element: any) => {
            setData((rowData) => {
              const res = [
                ...rowData.map((e) => {
                  if (e?.ticker === element?.s) {
                    return {
                      ...e,
                      indexClose: element?.p || e.indexClose,
                      pctChange: element?.pc || e.pctChange,
                      netChange: element?.pn || e.netChange,
                    };
                  } else {
                    return e;
                  }
                }),
              ];
              return res;
            });
          });
        }
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

export default useSocketMarketIndices;
