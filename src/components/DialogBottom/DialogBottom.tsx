import React from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'
import useMountTransition from '@/hooks/use-mount-transition'
import styles from './styles'
import { CloseIconBlack300 } from '../icons/CloseIconBlack300'
import Typography from '../Typography'
import utilStyles from '@/styles/util-styles'

interface Props {
  visible: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  className?: string
  removeWhenClosed?: boolean
  cssCustom?: React.CSSProperties | any
}

const DialogBottom: React.FC<Props> = (props) => {
  const {
    title = '',
    visible,
    children,
    className,
    onClose,
    removeWhenClosed = true,
    cssCustom
  } = props

  const bodyRef = React.useRef<any>(document.querySelector('body'))
  const portalRootRef = React.useRef(document.createElement('div'))
  const isTransitioning = useMountTransition(visible, 300)

  // Append portal root on mount
  React.useEffect(() => {
    bodyRef.current.appendChild(portalRootRef.current)
    const portal = portalRootRef.current
    const bodyEl = bodyRef.current

    return () => {
      // Clean up the portal when drawer component unmounts
      portal.remove()
      // Ensure scroll overflow is removed
      bodyEl.style.overflow = ''
    }
  }, [])

  // Prevent page scrolling when the drawer is open
  React.useEffect(() => {
    const updatePageScroll = () => {
      if (visible) {
        bodyRef.current.style.overflow = 'hidden'
      } else {
        bodyRef.current.style.overflow = ''
      }
    }

    updatePageScroll()
  }, [visible])

  // Allow Escape key to dismiss the drawer
  React.useEffect(() => {
    const onKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (visible) {
      window.addEventListener('keyup', onKeyPress)
    }

    return () => {
      window.removeEventListener('keyup', onKeyPress)
    }
  }, [visible, onClose])

  if (!isTransitioning && removeWhenClosed && !visible) {
    return null
  }

  return createPortal(
    <div
      css={[styles.wrapper(), cssCustom]}
      className={cn('drawer-container', {
        open: visible,
        in: isTransitioning,
        className
      })}
    >
      <div className={cn('drawer', 'bottom')}>
        <div className={cn('drawer_header')}>
          <Typography variant='sub_heading_two'>{title}</Typography>
          <CloseIconBlack300 onClick={onClose} />
        </div>

        <div
          css={utilStyles.scrollBar({ width: 4 })}
          className={cn('drawer_content')}
        >
          {children}
        </div>
      </div>

      <div className='backdrop' onClick={onClose} />
    </div>,
    portalRootRef.current
  )
}

export default DialogBottom
