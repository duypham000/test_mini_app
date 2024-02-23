import React from 'react'

enum ReadyState {
  'CONNECTING' = 0,
  'OPEN' = 1,
  'CLOSING' = 2,
  'CLOSED' = 3
}

interface Props {
  messages?: string[]
}

const useSocketAlert = (props: Props) => {
  const { messages = [] } = props

  const isLogined = true

  const ws = React.useRef<WebSocket>()
  const [readyState, setReadyState] = React.useState<ReadyState>()
  const [countReset, setCountReset] = React.useState(0)

  React.useEffect(() => {
    if (!isLogined) return

    ws.current = new WebSocket(process.env.NEXT_PUBLIC_WEB_SOCKET_URL as string)
    setReadyState(ws.current.readyState)

    ws.current.onopen = () => {
      setReadyState(ws.current?.readyState)
    }

    ws.current.onerror = () => {
      setReadyState(ws.current?.readyState)
    }

    ws.current.onclose = () => {
      setReadyState(ws.current?.readyState)
    }

    ws.current.onmessage = (ev: MessageEvent<any>) => {
      console.log(ev)
    }
  }, [isLogined, countReset])

  React.useEffect(() => {
    let reconnect: any

    if (readyState === ReadyState.CLOSED) {
      reconnect = setInterval(() => {
        setCountReset((count) => count + 1)
      }, 20000)
    }

    return () => {
      if (reconnect) {
        clearInterval(reconnect)
      }
    }
  }, [readyState])

  React.useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      messages.forEach((message) => {
        ws.current?.send(message)
      })
    }
  }, [readyState, JSON.stringify(messages)])

  // React.useEffect(() => {
  //   let interval: any;

  //   if (readyState === ReadyState.OPEN) {
  //     interval = setInterval(() => {
  //       ws.current?.send(JSON.stringify({ event: 'ping' }));
  //     }, 5000);
  //   }

  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // }, [readyState]);

  const handleClose = () => {
    ws.current?.close()
  }

  const handleReset = () => {
    setCountReset((count) => count + 1)
    setReadyState(undefined)
    ws.current?.close()
  }

  return { ws: ws.current, onClose: handleClose, onReset: handleReset }
}

export default useSocketAlert
