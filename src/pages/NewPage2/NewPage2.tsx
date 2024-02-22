import NativeMethod from '@/components/NativeMethod'
import styles from './style'
import { Link } from 'react-router-dom'

const NewPage2: React.FC = () => {
  const handleToast = () => {
    NativeMethod.toast('Page 2')
  }
  return (
    <div css={styles.wrapper}>
      <p>Page 2</p>
      <button onClick={handleToast} css={styles.btn}>
        Toast
      </button>
      <Link to={'/p1'}>
        <button css={styles.btn}>To Page 2</button>
      </Link>
    </div>
  )
}

export default NewPage2
