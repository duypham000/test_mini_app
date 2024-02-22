import NativeMethod from '@/components/NativeMethod'
import styles from './style'
import { Link } from 'react-router-dom'
import mainAxios from '@/apis/main-axios'

const NewPage1: React.FC = () => {
  const handleToast = () => {
    NativeMethod.toast('Page 1')
  }
  const handleTest = async () => {
    try {
      await mainAxios.get('/api/personalize/ta-indicator-favorite/list')
      document.getElementById('test')!.innerHTML = 'done'
    } catch (error) {
      document.getElementById('test')!.innerHTML = 'error'
    }
    // console.log(process)
  }

  return (
    <div css={styles.wrapper}>
      <p>Page 1</p>
      <p id='test'>Result</p>
      <button onClick={handleToast} css={styles.btn}>
        Toast
      </button>
      <button onClick={handleTest} css={styles.btn}>
        Test Axios
      </button>
      <Link to={'/p2'}>
        <button css={styles.btn}>To Page 2</button>
      </Link>
    </div>
  )
}

export default NewPage1
