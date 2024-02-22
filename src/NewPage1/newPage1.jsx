import { Link } from 'react-router-dom'
import styles from './style'

const NewPage1 = () => {
  const handleToast = () => {
    // eslint-disable-next-line no-undef
    NativeMethod.toast('Page 1')
  }
  return (
    <div css={styles.wrapper}>
      <p>Page 1</p>
      <button onClick={handleToast} css={styles.btn}>
        Toast
      </button>
      <Link to={'/p2'}>
        <button css={styles.btn}>To Page 2</button>
      </Link>
    </div>
  )
}

export default NewPage1
