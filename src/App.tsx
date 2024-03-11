import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './components/Counter/counter';
import styles from './App.module.less'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={styles.logo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <Counter/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.read_the_docs}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
